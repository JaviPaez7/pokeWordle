import { useState, useEffect } from 'react';

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: Record<number, number>;
  caughtPokemon: string[];
}

const DEFAULT_STATS: GameStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  guessDistribution: {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0,
  },
  caughtPokemon: [],
};

export function useStats() {
  const [stats, setStats] = useState<GameStats>(DEFAULT_STATS);

  useEffect(() => {
    const storedStats = localStorage.getItem('pokewordle-stats');
    if (storedStats) {
      try {
        setStats(JSON.parse(storedStats));
      } catch (e) {
        console.error("Error parsing stats", e);
      }
    }
  }, []);

  const saveStats = (newStats: GameStats) => {
    setStats(newStats);
    localStorage.setItem('pokewordle-stats', JSON.stringify(newStats));
  };

  const addGameResult = (won: boolean, numGuesses: number, pokemonName: string) => {
    setStats((prev) => {
      const newStats = { ...prev };
      newStats.gamesPlayed += 1;
      
      if (won) {
        newStats.gamesWon += 1;
        newStats.currentStreak += 1;
        newStats.maxStreak = Math.max(newStats.maxStreak, newStats.currentStreak);
        
        // Add to distribution
        const guessKey = numGuesses > 8 ? 8 : numGuesses;
        if (!newStats.guessDistribution[guessKey]) {
            newStats.guessDistribution[guessKey] = 0;
        }
        newStats.guessDistribution[guessKey] += 1;
        
        // Add to caught pokemon if not already there
        if (!newStats.caughtPokemon.includes(pokemonName)) {
            newStats.caughtPokemon = [...newStats.caughtPokemon, pokemonName];
        }
      } else {
        newStats.currentStreak = 0;
      }
      
      localStorage.setItem('pokewordle-stats', JSON.stringify(newStats));
      return newStats;
    });
  };

  return { stats, addGameResult };
}
