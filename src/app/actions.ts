"use server";

import type { PokemonData } from '@/lib/pokemon-data';
import { POKEMON_DATA } from '@/lib/pokemon-data';
import { comparePokemon } from '@/lib/comparison';
import type { ValidatePokemonGuessOutput } from '@/lib/types';
import { ai } from '@/ai/genkit';


export async function submitGuessAction(
  guess: string,
  correctPokemonName: string
): Promise<ValidatePokemonGuessOutput | { error: string }> {
  try {
    const guessedPokemon = POKEMON_DATA.find(p => p.name.toLowerCase() === guess.toLowerCase());
    const correctPokemon = POKEMON_DATA.find(p => p.name.toLowerCase() === correctPokemonName.toLowerCase());

    if (!guessedPokemon || !correctPokemon) {
      return { error: 'Pokémon data not found.' };
    }

    const feedback = comparePokemon(guessedPokemon, correctPokemon);
    
    const response: ValidatePokemonGuessOutput = {
      ...feedback,
      guessedPokemon: {
        name: guessedPokemon.name,
        photoUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${guessedPokemon.id}.png`,
        type: guessedPokemon.types[0],
        secondaryType: guessedPokemon.types[1] || 'N/A',
        habitat: guessedPokemon.habitat,
        evolutionStage: `Stage ${guessedPokemon.evolutionStage}`,
        height: `${guessedPokemon.height}m`,
        weight: `${guessedPokemon.weight}kg`,
      }
    };

    return response;

  } catch (error) {
    console.error("Error in submitGuessAction:", error);
    return { error: "Failed to get feedback. Please try again." };
  }
}

export async function getPokemonHintAction(pokemonName: string): Promise<{ hint: string } | { error: string }> {
  try {
    const { text } = await ai.generate({
      prompt: `Eres el Profesor Oak del mundo Pokémon. Estoy jugando a adivinar un Pokémon y estoy atascado. El Pokémon correcto es: ${pokemonName}. 
      Dame una pista corta (máximo 2 frases), divertida y un poco enigmática en español sobre este Pokémon para ayudarme a adivinarlo. 
      REGLA ESTRICTA: ¡NUNCA menciones el nombre del Pokémon ni parte de su nombre en tu respuesta!`,
    });
    return { hint: text };
  } catch (error) {
    console.error("Error in getPokemonHintAction:", error);
    return { error: "El sistema del Profesor Oak está fallando. Inténtalo más tarde." };
  }
}
