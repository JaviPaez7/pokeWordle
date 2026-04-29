'use client';

import { useState, useEffect } from 'react';
import { POKEMON_LIST_ALL, getPokemonList } from '@/lib/pokemon';
import type { Pokemon } from '@/lib/pokemon';
import { SurvivalGame } from '@/components/survival-game';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function getRandomPokemon(list: Pokemon[]): Pokemon {
  return list[Math.floor(Math.random() * list.length)];
}

export default function SurvivalPage() {
  const [generations, setGenerations] = useState(3);
  const [pokemonList, setPokemonList] = useState(POKEMON_LIST_ALL);
  const [firstPokemon, setFirstPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const storedGenerations = localStorage.getItem('pokewordle-generations');
    const initialGenerations = storedGenerations ? parseInt(storedGenerations, 10) : 3;
    handleGenerationChange(String(initialGenerations));
  }, []);

  const handleGenerationChange = (value: string) => {
    const gen = parseInt(value, 10);
    setGenerations(gen);
    localStorage.setItem('pokewordle-generations', String(gen));
    const newList = getPokemonList(gen);
    setPokemonList(newList);
    setFirstPokemon(getRandomPokemon(newList));
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 p-4 text-foreground selection:bg-rose-500/30">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-600/20 blur-[120px] animate-blob-spin mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/20 blur-[120px] animate-blob-spin-reverse mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-amber-500/15 blur-[100px] -translate-x-1/2 animate-float mix-blend-screen" />
      </div>

      <div className="z-10 w-full max-w-4xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] ring-1 ring-white/5">
        <header className="py-8 text-center space-y-2">
          <div className="text-4xl mb-2">💀</div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Modo Supervivencia
          </h1>
          <p className="text-white/60 text-base max-w-md mx-auto">
            Adivina Pokémon consecutivos. Tienes <span className="text-rose-400 font-bold">3 vidas</span>. Cada intento fallido te quita una. ¿Cuánto aguantas?
          </p>
        </header>

        <main>
          {firstPokemon ? (
            <SurvivalGame
              key={firstPokemon.name + Date.now()}
              initialPokemon={firstPokemon}
              pokemonList={pokemonList}
            />
          ) : (
            <div className="text-center text-white">Cargando...</div>
          )}
        </main>

        <div className="w-full max-w-xs mx-auto space-y-2 mt-8">
          <Label htmlFor="generations-survival" className="text-white">Generaciones</Label>
          <Select onValueChange={handleGenerationChange} defaultValue={String(generations)}>
            <SelectTrigger id="generations-survival">
              <SelectValue placeholder="Seleccionar generaciones" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Gen 1 (151 Pokémon)</SelectItem>
              <SelectItem value="2">Gen 1-2 (251 Pokémon)</SelectItem>
              <SelectItem value="3">Gen 1-3 (386 Pokémon)</SelectItem>
              <SelectItem value="4">Gen 1-4 (493 Pokémon)</SelectItem>
              <SelectItem value="5">Gen 1-5 (649 Pokémon)</SelectItem>
              <SelectItem value="6">Gen 1-6 (721 Pokémon)</SelectItem>
              <SelectItem value="7">Gen 1-7 (809 Pokémon)</SelectItem>
              <SelectItem value="8">Gen 1-8 (905 Pokémon)</SelectItem>
              <SelectItem value="9">Gen 1-9 (1025 Pokémon)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-center mt-6">
          <Button asChild variant="secondary">
            <Link href="/">← Volver al modo Clásico</Link>
          </Button>
        </div>
      </div>

      <footer className="w-full p-8 text-center text-neutral-300">
        <p>&copy; {new Date().getFullYear()} Pokewordle.</p>
      </footer>
    </div>
  );
}
