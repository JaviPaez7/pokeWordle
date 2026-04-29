"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "pokewordle-pokedex";

export function usePokedex() {
  const [capturedIds, setCapturedIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCapturedIds(JSON.parse(raw));
    } catch (_) {}
  }, []);

  const capture = (pokemonId: number) => {
    setCapturedIds(prev => {
      if (prev.includes(pokemonId)) return prev;
      const next = [...prev, pokemonId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const isCaptured = (pokemonId: number) => capturedIds.includes(pokemonId);

  return { capturedIds, capture, isCaptured };
}
