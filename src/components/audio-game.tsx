"use client";

import { useState, useEffect, useRef } from "react";
import type { Pokemon } from "@/lib/pokemon";
import { GuessInput } from "./guess-input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { Play, Volume2, VolumeX, RotateCcw, Check, X } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { playPokemonCry } from "@/lib/audio";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AudioGameProps {
  correctPokemon: Pokemon;
  pokemonList: Pokemon[];
}

type GameStatus = "playing" | "won" | "given_up";

export function AudioGame({ correctPokemon, pokemonList }: AudioGameProps) {
  const [status, setStatus] = useState<GameStatus>("playing");
  const [attempts, setAttempts] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  const { width, height } = useWindowSize();

  const storageKey = `pokewordle-audio-${correctPokemon.name}`;
  const CRY_URL = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${correctPokemon.id}.ogg`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.status) setStatus(parsed.status);
        if (parsed.attempts) setAttempts(parsed.attempts);
        if (parsed.status === "won") setShowConfetti(true);
      } catch (_) {}
    }
  }, [correctPokemon]);

  useEffect(() => {
    if (status !== "playing") {
      localStorage.setItem(storageKey, JSON.stringify({ status, attempts }));
    }
  }, [status, attempts]);

  const handlePlay = () => {
    if (isPlaying) return;
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(CRY_URL);
    audio.volume = 0.5;
    audioRef.current = audio;
    setIsPlaying(true);
    setPlayCount(c => c + 1);

    audio.play().catch(() => toast({ title: "Error de audio", description: "No se pudo reproducir el sonido.", variant: "destructive" }));
    audio.onended = () => setIsPlaying(false);
  };

  const handleGuess = (guess: string): boolean => {
    if (status !== "playing") return false;

    if (attempts.find(a => a.toLowerCase() === guess.toLowerCase())) {
      toast({ title: "Ya lo intentaste", description: `Ya has probado con "${guess}".`, variant: "destructive" });
      return false;
    }

    const newAttempts = [...attempts, guess];
    setAttempts(newAttempts);

    if (guess.toLowerCase() === correctPokemon.name.toLowerCase()) {
      setStatus("won");
      setShowConfetti(true);
      playPokemonCry(correctPokemon.id);
      toast({ title: "¡Correcto! 🎉", description: `¡Era ${correctPokemon.name}!` });
    } else {
      toast({ title: "Incorrecto ❌", description: "Ese no es. ¡Sigue intentándolo!", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleGiveUp = () => {
    setStatus("given_up");
    localStorage.setItem(storageKey, JSON.stringify({ status: "given_up", attempts }));
  };

  const isFinished = status !== "playing";

  return (
    <div className="w-full space-y-8 flex flex-col items-center">
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}

      {/* Pokémon Reveal or Mystery */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {isFinished ? (
          <div className="flex flex-col items-center gap-3 animate-in fade-in-50">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${correctPokemon.id}.png`}
              alt={correctPokemon.name}
              width={160}
              height={160}
              className="drop-shadow-2xl"
            />
            <span className="font-headline text-2xl font-bold text-white capitalize">{correctPokemon.name}</span>
          </div>
        ) : (
          <div className="w-36 h-36 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Volume2 className="w-16 h-16 text-white/20" />
          </div>
        )}
      </div>

      {/* Play Button with sound wave animation */}
      <div className="relative flex items-center justify-center">
        {isPlaying && (
          <>
            <div className="absolute w-32 h-32 rounded-full border-2 border-emerald-400/40 animate-ping" />
            <div className="absolute w-24 h-24 rounded-full border-2 border-emerald-400/60 animate-ping [animation-delay:150ms]" />
          </>
        )}
        <Button
          onClick={handlePlay}
          disabled={isPlaying}
          className={cn(
            "w-20 h-20 rounded-full text-white font-bold transition-all duration-300 shadow-2xl",
            isPlaying
              ? "bg-emerald-600 scale-110 shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              : "bg-emerald-500 hover:bg-emerald-400 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]"
          )}
          aria-label="Reproducir grito del Pokémon"
        >
          <Play className="w-8 h-8 fill-white" />
        </Button>
      </div>

      {playCount > 0 && (
        <p className="text-white/40 text-xs">
          Reproducido {playCount} {playCount === 1 ? "vez" : "veces"}
        </p>
      )}

      {/* Attempts log */}
      {attempts.length > 0 && (
        <div className="w-full max-w-xs space-y-2">
          <p className="text-white/50 text-xs uppercase tracking-wider text-center">Intentos</p>
          <div className="space-y-1">
            {attempts.map((a, i) => {
              const isCorrect = a.toLowerCase() === correctPokemon.name.toLowerCase();
              return (
                <div
                  key={i}
                  className={cn(
                    "flex items-center justify-between px-4 py-2 rounded-xl text-sm font-semibold",
                    isCorrect
                      ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
                      : "bg-rose-500/10 border border-rose-500/20 text-rose-300"
                  )}
                >
                  <span className="capitalize">{a}</span>
                  {isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Input / Game End */}
      {status === "playing" && (
        <div className="w-full space-y-3">
          <GuessInput pokemonList={pokemonList} onSubmit={handleGuess} disabled={false} />
          {attempts.length >= 3 && (
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={handleGiveUp}
                className="text-white/40 hover:text-white/70 text-xs"
              >
                <RotateCcw className="w-3 h-3 mr-1" /> Rendirse y ver la respuesta
              </Button>
            </div>
          )}
        </div>
      )}

      {status === "won" && (
        <div className="w-full bg-emerald-500/20 border border-emerald-500/40 rounded-2xl p-4 text-center space-y-1">
          <p className="text-emerald-300 font-bold text-lg">¡Lo adivinaste en {attempts.length} {attempts.length === 1 ? "intento" : "intentos"}! 🏆</p>
          <p className="text-white/60 text-sm">Vuelve mañana por un nuevo reto.</p>
        </div>
      )}

      {status === "given_up" && (
        <div className="w-full bg-rose-500/20 border border-rose-500/40 rounded-2xl p-4 text-center space-y-1">
          <p className="text-rose-300 font-bold text-lg">Te has rendido 😔</p>
          <p className="text-white/60 text-sm">Era <span className="font-bold text-white">{correctPokemon.name}</span>. Vuelve mañana.</p>
        </div>
      )}
    </div>
  );
}
