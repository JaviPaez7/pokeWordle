import { POKEMON_DATA } from './pokemon-data';

export interface Pokemon {
  id: number;
  name: string;
  spriteUrl: string;
}

const POKEMON_GENERATION_LIMITS = {
  1: 151,
  2: 251,
  3: 386,
  4: 493,
  5: 649,
  6: 721,
  7: 809,
  8: 905,
  9: 1025,
};

export const POKEMON_LIST_ALL: Pokemon[] = POKEMON_DATA.map((p) => ({
  id: p.id,
  name: p.name,
  spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`
}));

export const POKEMON_NAME_LIST_ALL: string[] = POKEMON_DATA.map(p => p.name);

export function getPokemonList(generations: number = 3): Pokemon[] {
    const limit = POKEMON_GENERATION_LIMITS[generations as keyof typeof POKEMON_GENERATION_LIMITS] || 1025;
    return POKEMON_LIST_ALL.slice(0, limit);
}

export function getPokemonNameList(generations: number = 3): string[] {
    const limit = POKEMON_GENERATION_LIMITS[generations as keyof typeof POKEMON_GENERATION_LIMITS] || 1025;
    return POKEMON_NAME_LIST_ALL.slice(0, limit);
}
