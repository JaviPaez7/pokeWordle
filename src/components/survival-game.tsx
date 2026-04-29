"use client";

import { useState, useEffect } from "react";
import type { Pokemon } from "@/lib/pokemon";
import { GuessInput } from "./guess-input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Heart, HeartCrack } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { playPokemonCry } from "@/lib/audio";
import { usePokedex } from "@/hooks/use-pokedex";
import { POKEMON_DATA } from "@/lib/pokemon-data";
import { comparePokemon } from "@/lib/comparison";
import { GuessGrid } from "./guess-grid";
import type { ValidatePokemonGuessOutput } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MAX_LIVES = 3;

interface SurvivalGameProps {
  initialPokemon: Pokemon;
  pokemonList: Pokemon[];
}

type GameStatus = "playing" | "game_over";

function getRandomPokemon(list: Pokemon[], exclude?: string): Pokemon {
  const filtered = exclude ? list.filter(p => p.name !== exclude) : list;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function SurvivalGame({ initialPokemon, pokemonList }: SurvivalGameProps) {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>(initialPokemon);
  const [lives, setLives] = useState(MAX_LIVES);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [status, setStatus] = useState<GameStatus>("playing");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<(ValidatePokemonGuessOutput | null)[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [justWon, setJustWon] = useState(false);
  const { toast } = useToast();
  const { width, height } = useWindowSize();
  const { capture } = usePokedex();

  useEffect(() => {
    const saved = localStorage.getItem("pokewordle-survival-best");
    if (saved) setBestStreak(parseInt(saved, 10));
  }, []);

  const handleGuess = (guess: string): boolean => {
    if (status !== "playing") return false;

    if (guesses.find(g => g.toLowerCase() === guess.toLowerCase())) {
      toast({ title: "Ya lo intentaste", description: `Ya has probado con "${guess}".`, variant: "destructive" });
      return false;
    }

    const guessedData = POKEMON_DATA.find(p => p.name.toLowerCase() === guess.toLowerCase());
    const correctData = POKEMON_DATA.find(p => p.name.toLowerCase() === currentPokemon.name.toLowerCase());

    if (!guessedData || !correctData) {
      toast({ title: "Error", description: "No se encontraron datos del Pokémon.", variant: "destructive" });
      return false;
    }

    const feedbackResult = comparePokemon(guessedData, correctData);
    const result: ValidatePokemonGuessOutput = {
      ...feedbackResult,
      guessedPokemon: {
        name: guessedData.name,
        photoUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${guessedData.id}.png`,
        type: guessedData.types[0],
        secondaryType: guessedData.types[1] || "N/A",
        habitat: guessedData.habitat,
        evolutionStage: `Stage ${guessedData.evolutionStage}`,
        height: `${guessedData.height}m`,
        weight: `${guessedData.weight}kg`,
      },
    };

    setGuesses(prev => [...prev, guess]);
    setFeedback(prev => [...prev, result]);

    if (guess.toLowerCase() === currentPokemon.name.toLowerCase()) {
      // Correct!
      playPokemonCry(correctData.id);
      capture(correctData.id);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        localStorage.setItem("pokewordle-survival-best", String(newStreak));
      }
      setShowConfetti(true);
      setJustWon(true);
      toast({ title: `¡Correcto! Racha: ${newStreak} 🔥`, description: "¡Sigue así!" });
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      // Wrong
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setStatus("game_over");
        toast({ title: "💀 ¡Game Over!", description: `El Pokémon era ${currentPokemon.name}. Racha final: ${streak}.`, variant: "destructive" });
      } else {
        toast({ title: `Incorrecto ❌ — ${newLives} ${newLives === 1 ? "vida" : "vidas"} restantes`, variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const handleNextPokemon = () => {
    const next = getRandomPokemon(pokemonList, currentPokemon.name);
    setCurrentPokemon(next);
    setGuesses([]);
    setFeedback([]);
    setJustWon(false);
  };

  const handleRestart = () => {
    const next = getRandomPokemon(pokemonList);
    setCurrentPokemon(next);
    setGuesses([]);
    setFeedback([]);
    setLives(MAX_LIVES);
    setStreak(0);
    setStatus("playing");
    setJustWon(false);
  };

  const livesArray = Array.from({ length: MAX_LIVES });

  return (
    <div className="w-full space-y-6">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={150} />}

      {/* Header: Lives + Streak */}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-1.5">
          {livesArray.map((_, i) => (
            <div key={i} className={cn("transition-all duration-300", i < lives ? "text-rose-400 scale-110" : "text-white/20")}>
              {i < lives ? <Heart className="w-6 h-6 fill-rose-400" /> : <HeartCrack className="w-6 h-6" />}
            </div>
          ))}
        </div>
        <div className="text-right">
          <div className="text-white font-bold text-lg">🔥 {streak}</div>
          <div className="text-white/40 text-xs">Mejor: {bestStreak}</div>
        </div>
      </div>

      {/* Game Grid */}
      <GuessGrid guesses={guesses} feedback={feedback} />

      {/* Input or Game State */}
      {status === "playing" && !justWon && (
        <GuessInput pokemonList={pokemonList} onSubmit={handleGuess} disabled={false} />
      )}

      {justWon && status === "playing" && (
        <div className="flex flex-col items-center gap-4">
          <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-2xl p-4 text-center w-full">
            <p className="text-emerald-300 font-bold">¡Era <span className="text-white">{currentPokemon.name}</span>! Racha actual: 🔥 {streak}</p>
          </div>
          <Button
            onClick={handleNextPokemon}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full px-8 h-12 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all hover:scale-105 active:scale-95"
          >
            Siguiente Pokémon →
          </Button>
        </div>
      )}

      {status === "game_over" && (
        <div className="flex flex-col items-center gap-4">
          <div className="bg-rose-500/20 border border-rose-500/40 rounded-2xl p-5 text-center w-full space-y-2">
            <p className="text-rose-300 font-bold text-xl">💀 Game Over</p>
            <p className="text-white/70 text-sm">El Pokémon era: <span className="text-white font-bold">{currentPokemon.name}</span></p>
            <div className="flex justify-center gap-2 pt-1">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
                alt={currentPokemon.name}
                width={80}
                height={80}
                className="drop-shadow-lg"
              />
            </div>
            <p className="text-white/50 text-sm">Racha final: <span className="text-amber-400 font-bold text-lg">{streak}</span></p>
            {streak >= bestStreak && streak > 0 && (
              <p className="text-amber-300 text-xs font-bold">¡Nuevo récord personal! 🏆</p>
            )}
          </div>
          <Button
            onClick={handleRestart}
            className="bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-full px-8 h-12 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Intentar de nuevo
          </Button>
        </div>
      )}
    </div>
  );
}
