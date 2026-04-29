
"use client";

import { useState, useEffect, useTransition } from "react";
import type { ValidatePokemonGuessOutput } from "@/lib/types";
import { GuessInput } from "./guess-input";
import { GuessGrid } from "./guess-grid";
import { InstructionsModal } from "./instructions-modal";
import { ResultsModal } from "./results-modal";
import { StatsModal } from "./stats-modal";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Lightbulb, Loader } from "lucide-react";
import { Button } from "./ui/button";
import type { Pokemon } from "@/lib/pokemon";
import { POKEMON_DATA } from "@/lib/pokemon-data";
import { comparePokemon } from "@/lib/comparison";
import { playPokemonCry } from "@/lib/audio";
import { useStats } from "@/hooks/use-stats";
import { getPokemonHintAction } from "@/app/actions";
import { usePokedex } from "@/hooks/use-pokedex";
import { PokedexModal } from "./pokedex-modal";

type GameStatus = "playing" | "won";

type GameState = {
  guesses: string[];
  feedback: (ValidatePokemonGuessOutput | null)[];
  status: GameStatus;
  correctPokemon: Pokemon;
};

interface PokewordleGameProps {
  correctPokemon: Pokemon;
  pokemonList: Pokemon[];
  pokemonNameList: string[];
  isPractice?: boolean;
  isVs?: boolean;
}

export function PokewordleGame({ correctPokemon, pokemonList, pokemonNameList, isPractice = false, isVs = false }: PokewordleGameProps) {
  const [state, setState] = useState<GameState>({
    guesses: [],
    feedback: [],
    status: "playing",
    correctPokemon: correctPokemon,
  });
  const [isResultsModalOpen, setResultsModalOpen] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { addGameResult } = useStats();
  const { capture } = usePokedex();
  const storageKey = isPractice ? 'pokewordle-state-practice' : isVs ? `pokewordle-state-vs-${correctPokemon.name}` : `pokewordle-state-${correctPokemon.name}`;

  useEffect(() => {
    const storedStateRaw = localStorage.getItem(storageKey);
    if (storedStateRaw) {
      try {
        const storedState: Omit<GameState, 'correctPokemon'> & { correctPokemonName: string } = JSON.parse(storedStateRaw);
        if (storedState.correctPokemonName === correctPokemon.name) {
          const newState = { ...storedState, correctPokemon, guesses: storedState.guesses, feedback: storedState.feedback };
          setState(newState);
          if (newState.status !== "playing") {
            setResultsModalOpen(true);
          }
        } else {
          handleReset(false);
        }
      } catch (error) {
        handleReset(false);
      }
    } else {
      handleReset(false);
    }
  }, [correctPokemon]);

  useEffect(() => {
    if (state.guesses.length > 0 || state.status !== 'playing') {
      const stateToStore = {
        guesses: state.guesses,
        feedback: state.feedback,
        status: state.status,
        correctPokemonName: state.correctPokemon.name,
      };
      localStorage.setItem(storageKey, JSON.stringify(stateToStore));
    }
  }, [state]);
  
  const handleReset = (showToast = true) => {
    const newState = {
      guesses: [],
      feedback: [],
      status: "playing" as GameStatus,
      correctPokemon: correctPokemon,
    };
    setState(newState);
    localStorage.removeItem(storageKey);
    if (showToast) {
      toast({
        title: "Juego reiniciado",
        description: "¡Tus intentos han sido borrados! Puedes empezar de nuevo.",
      });
    }
  };

  const handleGameEnd = (status: "won") => {
    setState(prev => ({...prev, status}));
    setResultsModalOpen(true);
  };

  const handleHintClick = async () => {
    setIsLoadingHint(true);
    const result = await getPokemonHintAction(correctPokemon.name);
    if ('error' in result) {
      toast({
        title: "Error al obtener la pista",
        description: result.error,
        variant: "destructive",
      });
    } else {
      setHint(result.hint);
    }
    setIsLoadingHint(false);
  };


  const handleGuess = (guess: string) => {
    if (state.status !== "playing") return false;

    if (!pokemonNameList.find(p => p.toLowerCase() === guess.toLowerCase())) {
      toast({
        title: "Pokémon no válido",
        description: `"${guess}" no está en la lista de Pokémon para las generaciones seleccionadas.`,
        variant: "destructive",
      });
      return false;
    }
    
    if (state.guesses.find(g => g.toLowerCase() === guess.toLowerCase())) {
        toast({
          title: "Ya lo intentaste",
          description: `Ya has intentado con "${guess}".`,
          variant: "destructive",
        });
        return false;
    }

    const guessedPokemonData = POKEMON_DATA.find(p => p.name.toLowerCase() === guess.toLowerCase());
    const correctPokemonData = POKEMON_DATA.find(p => p.name.toLowerCase() === correctPokemon.name.toLowerCase());

    if (!guessedPokemonData || !correctPokemonData) {
        toast({ title: 'Error', description: "No se pudieron encontrar los datos del Pokémon.", variant: 'destructive' });
        return false;
    }

    const feedbackResult = comparePokemon(guessedPokemonData, correctPokemonData);
    
    const result: ValidatePokemonGuessOutput = {
        ...feedbackResult,
        guessedPokemon: {
            name: guessedPokemonData.name,
            photoUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${guessedPokemonData.id}.png`,
            type: guessedPokemonData.types[0],
            secondaryType: guessedPokemonData.types[1] || 'N/A',
            habitat: guessedPokemonData.habitat,
            evolutionStage: `Stage ${guessedPokemonData.evolutionStage}`,
            height: `${guessedPokemonData.height}m`,
            weight: `${guessedPokemonData.weight}kg`,
        }
    };

    const isCorrect = guess.toLowerCase() === correctPokemon.name.toLowerCase();

    setState((currentState) => ({
      ...currentState,
      guesses: [...currentState.guesses, guess],
      feedback: [...currentState.feedback, result],
    }));

    if (isCorrect) {
      playPokemonCry(correctPokemonData.id);
      capture(correctPokemonData.id);
      if (!isPractice && !isVs) {
         addGameResult(true, state.guesses.length + 1, correctPokemon.name);
      }
      handleGameEnd("won");
    }

    return true;
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center gap-2">
        <div className="font-headline text-lg text-white">
          Adivina el Pokémon de hoy. ¡Intentos ilimitados!
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => handleReset()} aria-label="Reiniciar juego">
            <RefreshCw className="h-6 w-6 text-white" />
          </Button>
          <PokedexModal />
          <StatsModal />
          <InstructionsModal />
        </div>
      </div>
      
      <GuessGrid guesses={state.guesses} feedback={state.feedback} />
      
      {state.status === "playing" && (
        <div className="space-y-4">
          <GuessInput
            pokemonList={pokemonList}
            onSubmit={handleGuess}
            disabled={isPending || state.status !== 'playing'}
          />
          
          <div className="flex flex-col items-center gap-3 mt-4">
            {!hint && (
              <Button 
                variant="outline" 
                onClick={handleHintClick} 
                disabled={isLoadingHint}
                className="bg-indigo-500/10 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400 transition-all rounded-full px-6"
              >
                {isLoadingHint ? (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Lightbulb className="mr-2 h-4 w-4" />
                )}
                Preguntar al Prof. Oak
              </Button>
            )}

            {hint && (
              <div className="w-full bg-indigo-900/40 backdrop-blur-md border border-indigo-500/30 rounded-xl p-4 shadow-[0_0_20px_rgba(99,102,241,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                <div className="flex gap-3">
                  <div className="shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/50">
                      <Lightbulb className="h-4 w-4 text-indigo-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-indigo-300 font-bold text-sm mb-1 uppercase tracking-wider">Profesor Oak dice:</h4>
                    <p className="text-white/90 text-sm italic">{hint}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {state.status !== "playing" && (
         <Button onClick={() => setResultsModalOpen(true)} className="w-full bg-accent hover:bg-accent/90">
            Mostrar Resultados
          </Button>
      )}

      <ResultsModal
        status={state.status}
        guesses={state.guesses}
        feedback={state.feedback as ValidatePokemonGuessOutput[]}
        correctPokemon={correctPokemon.name}
        isOpen={isResultsModalOpen}
        onClose={() => setResultsModalOpen(false)}
      />
    </div>
  );
}
