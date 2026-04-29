
'use client';

import { useState, useEffect } from 'react';
import { getDailyPokemon, getYesterdaysPokemon } from '@/lib/daily-pokemon';
import { POKEMON_LIST_ALL, getPokemonList, POKEMON_NAME_LIST_ALL, getPokemonNameList } from '@/lib/pokemon';
import { PokewordleGame } from '@/components/pokewordle-game';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const vsParam = searchParams.get('vs');
  const [generations, setGenerations] = useState(3);
  const [pokemonList, setPokemonList] = useState(POKEMON_LIST_ALL);
  const [pokemonNameList, setPokemonNameList] = useState(POKEMON_NAME_LIST_ALL);
  const [correctPokemonName, setCorrectPokemonName] = useState('');
  const [yesterdaysPokemon, setYesterdaysPokemon] = useState('');
  const [isPractice, setIsPractice] = useState(false);

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
    if (vsParam) {
      try {
        const decoded = atob(vsParam);
        setCorrectPokemonName(decoded);
      } catch (e) {
        setCorrectPokemonName(getDailyPokemon('classic', gen));
      }
    } else {
      setCorrectPokemonName(getDailyPokemon('classic', gen));
    }
    setYesterdaysPokemon(getYesterdaysPokemon('classic', gen));
  };
  
  const handlePracticeMode = () => {
    setIsPractice(true);
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    setCorrectPokemonName(pokemonList[randomIndex].name);
    // Remove vs parameter if it exists
    if (vsParam) {
        router.push('/');
    }
  };

  const handleExitPractice = () => {
    setIsPractice(false);
    if (vsParam) {
        router.push('/');
    }
    setCorrectPokemonName(getDailyPokemon('classic', generations));
  };

  const correctPokemon = pokemonList.find(p => p.name === correctPokemonName);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 p-4 text-foreground">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-emerald-500/20 blur-[100px] translate-x-[-50%]" />
      
      <div className="z-10 w-full max-w-4xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-2xl">
        <header className="py-8 text-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {vsParam ? "¡Reto Multijugador!" : isPractice ? "Pokewordle Práctica" : "Pokewordle Diario"}
          </h1>
          {!vsParam && !isPractice && (
            <p className="mt-4 text-lg text-white sm:text-xl">
              El Pokémon de ayer fue: <span className="font-bold text-white">{yesterdaysPokemon}</span>
            </p>
          )}
          <div className="flex flex-wrap gap-2 justify-center pt-2">
             {!isPractice && !vsParam && (
               <Button onClick={handlePracticeMode} variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10">
                 Jugar Modo Práctica (Infinito)
               </Button>
             )}
             {isPractice && (
               <>
                 <Button onClick={handlePracticeMode} variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10">
                   Siguiente Pokémon
                 </Button>
                 <Button onClick={handleExitPractice} variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                   Volver al modo diario
                 </Button>
               </>
             )}
             {vsParam && !isPractice && (
               <Button onClick={handleExitPractice} variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10">
                 Salir del Reto y jugar Diario
               </Button>
             )}
          </div>
        </header>

        <main>
          {correctPokemon ? (
            <PokewordleGame 
              key={correctPokemon.name}
              correctPokemon={correctPokemon} 
              pokemonList={pokemonList} 
              pokemonNameList={pokemonNameList} 
              isPractice={isPractice}
              isVs={!!vsParam}
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
                    <SelectItem value="6">Gen 1-6 (721 Pokémon)</SelectItem>
                    <SelectItem value="7">Gen 1-7 (809 Pokémon)</SelectItem>
                    <SelectItem value="8">Gen 1-8 (905 Pokémon)</SelectItem>
                    <SelectItem value="9">Gen 1-9 (1025 Pokémon)</SelectItem>
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

export default function Home() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Cargando...</div>}>
            <HomeContent />
        </Suspense>
    );
}

