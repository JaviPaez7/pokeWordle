
"use client";

import { useState, useEffect } from "react";
import type { Pokemon } from "@/lib/pokemon";
import { GuessInput } from "./guess-input";
import { Silhouette } from "./silhouette";
import { Button } from "./ui/button";
import { StatsModal } from "./stats-modal";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { playPokemonCry } from "@/lib/audio";
import { useStats } from "@/hooks/use-stats";


interface SilhouetteGameProps {
  correctPokemon: Pokemon;
  pokemonList: Pokemon[];
}

type GameStatus = "playing" | "won";

export function SilhouetteGame({ correctPokemon, pokemonList }: SilhouetteGameProps) {
  const [status, setStatus] = useState<GameStatus>("playing");
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  const { width, height } = useWindowSize();
  const { addGameResult } = useStats();

  useEffect(() => {
    // If the daily pokemon changes, reset the game
    const storedPokemonName = localStorage.getItem(`silhouette-pokemon`);
    if (storedPokemonName && storedPokemonName !== correctPokemon.name) {
      handleReset(false);
    } else {
        const storedStatus = localStorage.getItem(`silhouette-status-${correctPokemon.name}`) as GameStatus | null;
        if (storedStatus) {
            setStatus(storedStatus);
            if (storedStatus === "won") {
                setShowConfetti(true);
            }
        }
    }
     localStorage.setItem('silhouette-pokemon', correctPokemon.name);
  }, [correctPokemon]);

  const handleReset = (showToast = true) => {
    setStatus("playing");
    setShowConfetti(false);
    localStorage.removeItem(`silhouette-status-${correctPokemon.name}`);
    if (showToast) {
      toast({
        title: "Juego Reiniciado",
        description: "¡Puedes intentarlo de nuevo!",
      });
    }
  };

  const handleGuess = (guess: string) => {
    if (status !== "playing") return false;

    if (guess.toLowerCase() === correctPokemon.name.toLowerCase()) {
      setStatus("won");
      setShowConfetti(true);
      playPokemonCry(correctPokemon.id);
      addGameResult(true, 1, correctPokemon.name);
      localStorage.setItem(`silhouette-status-${correctPokemon.name}`, "won");
      toast({
        title: "¡Correcto!",
        description: `¡Era ${correctPokemon.name}!`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Incorrecto",
        description: "¡Sigue intentándolo!",
      });
      return false;
    }
    return true;
  };
  
  const isRevealed = status === 'won';

  return (
    <div className="w-full space-y-6 flex flex-col items-center">
       {showConfetti && <Confetti width={width} height={height} />}
      <div className="flex justify-end w-full gap-2">
         <StatsModal />
         <Button variant="ghost" size="icon" onClick={() => handleReset()} aria-label="Reiniciar juego">
            <RefreshCw className="h-6 w-6 text-white" />
          </Button>
      </div>
      
      <Silhouette pokemon={correctPokemon} isRevealed={isRevealed} />

      {status === 'playing' ? (
        <div className="w-full max-w-sm">
            <GuessInput
                pokemonList={pokemonList}
                onSubmit={handleGuess}
                disabled={status !== 'playing'}
            />
        </div>
      ) : (
        <div className="text-center p-4 rounded-lg bg-green-500/80 text-white">
            <h2 className="text-2xl font-bold">¡Has ganado!</h2>
            <p>El Pokémon era <span className="font-bold">{correctPokemon.name}</span></p>
        </div>
      )}
    </div>
  );
}

