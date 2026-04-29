const fs = require('fs');

async function fetchAllPokemon() {
    console.log("Starting fetch...");
    const POKEMON_COUNT = 1025; // Up to Gen 9
    const batchSize = 50;
    const allData = [];

    const getEvolutionStage = async (speciesUrl) => {
        try {
            const speciesRes = await fetch(speciesUrl);
            const speciesData = await speciesRes.json();
            
            const habitat = speciesData.habitat ? speciesData.habitat.name : 'unknown';
            
            // Simple heuristic for evolution stage if we don't want to parse the whole chain
            let stage = 1;
            if (speciesData.evolves_from_species) {
                stage = 2;
                // Check if the parent evolves from something
                const parentRes = await fetch(speciesData.evolves_from_species.url);
                const parentData = await parentRes.json();
                if (parentData.evolves_from_species) {
                    stage = 3;
                }
            }
            // Babies are stage 1
            if (speciesData.is_baby) stage = 1;
            
            return { stage, habitat };
        } catch (e) {
            return { stage: 1, habitat: 'unknown' };
        }
    };

    for (let i = 1; i <= POKEMON_COUNT; i += batchSize) {
        const batch = [];
        for (let j = 0; j < batchSize && i + j <= POKEMON_COUNT; j++) {
            batch.push(i + j);
        }

        console.log(`Fetching ${batch[0]} to ${batch[batch.length - 1]}...`);
        const promises = batch.map(async (id) => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!res.ok) return null;
                const data = await res.json();
                
                const types = data.types.map(t => t.type.name);
                const height = data.height / 10; // decimeters to meters
                const weight = data.weight / 10; // hectograms to kg
                
                // Get species data for habitat and evolution stage
                const { stage, habitat } = await getEvolutionStage(data.species.url);

                return {
                    id,
                    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                    types,
                    height,
                    weight,
                    habitat,
                    evolutionStage: stage
                };
            } catch (e) {
                console.error(`Failed to fetch ${id}`, e);
                return null;
            }
        });

        const results = await Promise.all(promises);
        results.forEach(r => { if (r) allData.push(r); });
    }

    const fileContent = `export interface PokemonData {
    id: number;
    name: string;
    types: string[];
    height: number;
    weight: number;
    habitat: string;
    evolutionStage: number;
}

export const POKEMON_DATA: PokemonData[] = ${JSON.stringify(allData, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

    fs.writeFileSync('../src/lib/pokemon-data.ts', fileContent);
    console.log("Successfully wrote all pokemon to src/lib/pokemon-data.ts!");
}

fetchAllPokemon();
