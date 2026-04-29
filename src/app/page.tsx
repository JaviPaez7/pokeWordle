
'use client';

import { useState, useEffect } from 'react';
import { getDailyPokemon, getYesterdaysPokemon } from '@/lib/daily-pokemon';
import { POKEMON_LIST_ALL, getPokemonList, POKEMON_NAME_LIST_ALL, getPokemonNameList } from '@/lib/pokemon';
import { PokewordleGame } from '@/components/pokewordle-game';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const [generations, setGenerations] = useState(3);
  const [pokemonList, setPokemonList] = useState(POKEMON_LIST_ALL);
  const [pokemonNameList, setPokemonNameList] = useState(POKEMON_NAME_LIST_ALL);
  const [correctPokemonName, setCorrectPokemonName] = useState('');
  const [yesterdaysPokemon, setYesterdaysPokemon] = useState('');

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
    const newNameList = getPokemonNameList(gen);
    setPokemonList(newList);
    setPokemonNameList(newNameList);
    
    setCorrectPokemonName(getDailyPokemon('classic', gen));
    setYesterdaysPokemon(getYesterdaysPokemon('classic', gen));
  };
  
  const correctPokemon = pokemonList.find(p => p.name === correctPokemonName);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 p-4 text-foreground">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-emerald-500/20 blur-[100px] translate-x-[-50%]" />
      
      <div className="z-10 w-full max-w-4xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-2xl">
        <header className="py-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Pokewordle Diario
          </h1>
          <p className="mt-4 text-lg text-white sm:text-xl">
            El Pokémon de ayer fue: <span className="font-bold text-white">{yesterdaysPokemon}</span>
          </p>
        </header>

        <main>
          {correctPokemon ? (
            <PokewordleGame 
              key={correctPokemon.name}
              correctPokemon={correctPokemon} 
              pokemonList={pokemonList} 
              pokemonNameList={pokemonNameList} 
            />
          ) : (
            <div className="text-center text-white">Cargando Pokémon...</div>
          )}
        </main>
        
        <div className="w-full max-w-xs mx-auto space-y-2 mt-8">
            <Label htmlFor="generations" className="text-white">Generaciones</Label>
            <Select onValueChange={handleGenerationChange} defaultValue={String(generations)}>
                <SelectTrigger id="generations">
                    <SelectValue placeholder="Seleccionar generaciones" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Gen 1 (151 Pokémon)</SelectItem>
                    <SelectItem value="2">Gen 1-2 (251 Pokémon)</SelectItem>
                    <SelectItem value="3">Gen 1-3 (386 Pokémon)</SelectItem>
                    <SelectItem value="4">Gen 1-4 (493 Pokémon)</SelectItem>
                    <SelectItem value="5">Gen 1-5 (649 Pokémon)</SelectItem>
                </SelectContent>
            </Select>
        </div>


        <div className="text-center mt-8">
            <Button asChild variant="secondary">
                <Link href="/silhouette">Jugar al modo Silueta →</Link>
            </Button>
        </div>
      </div>
      <footer className="w-full p-8 text-center text-neutral-300">
        <p>&copy; {new Date().getFullYear()} Pokewordle. ¡Vuelve mañana por un nuevo desafío!</p>
      </footer>
    </div>
  );
}

