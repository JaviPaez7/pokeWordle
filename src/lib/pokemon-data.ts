export interface PokemonData {
    id: number;
    name: string;
    types: string[];
    height: number;
    weight: number;
    habitat: string;
    evolutionStage: number;
}

export const POKEMON_DATA: PokemonData[] = [
  {
    id: 1,
    name: "Bulbasaur",
    types: [
      "grass",
      "poison"
    ],
    height: 0.7,
    weight: 6.9,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 2,
    name: "Ivysaur",
    types: [
      "grass",
      "poison"
    ],
    height: 1,
    weight: 13,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 3,
    name: "Venusaur",
    types: [
      "grass",
      "poison"
    ],
    height: 2,
    weight: 100,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 4,
    name: "Charmander",
    types: [
      "fire"
    ],
    height: 0.6,
    weight: 8.5,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 5,
    name: "Charmeleon",
    types: [
      "fire"
    ],
    height: 1.1,
    weight: 19,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 6,
    name: "Charizard",
    types: [
      "fire",
      "flying"
    ],
    height: 1.7,
    weight: 90.5,
    habitat: "mountain",
    evolutionStage: 3
  },
  {
    id: 7,
    name: "Squirtle",
    types: [
      "water"
    ],
    height: 0.5,
    weight: 9,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 8,
    name: "Wartortle",
    types: [
      "water"
    ],
    height: 1,
    weight: 22.5,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 9,
    name: "Blastoise",
    types: [
      "water"
    ],
    height: 1.6,
    weight: 85.5,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 10,
    name: "Caterpie",
    types: [
      "bug"
    ],
    height: 0.3,
    weight: 2.9,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 11,
    name: "Metapod",
    types: [
      "bug"
    ],
    height: 0.7,
    weight: 9.9,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 12,
    name: "Butterfree",
    types: [
      "bug",
      "flying"
    ],
    height: 1.1,
    weight: 32,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 13,
    name: "Weedle",
    types: [
      "bug",
      "poison"
    ],
    height: 0.3,
    weight: 3.2,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 14,
    name: "Kakuna",
    types: [
      "bug",
      "poison"
    ],
    height: 0.6,
    weight: 10,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 15,
    name: "Beedrill",
    types: [
      "bug",
      "poison"
    ],
    height: 1,
    weight: 29.5,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 16,
    name: "Pidgey",
    types: [
      "normal",
      "flying"
    ],
    height: 0.3,
    weight: 1.8,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 17,
    name: "Pidgeotto",
    types: [
      "normal",
      "flying"
    ],
    height: 1.1,
    weight: 30,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 18,
    name: "Pidgeot",
    types: [
      "normal",
      "flying"
    ],
    height: 1.5,
    weight: 39.5,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 19,
    name: "Rattata",
    types: [
      "normal"
    ],
    height: 0.3,
    weight: 3.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 20,
    name: "Raticate",
    types: [
      "normal"
    ],
    height: 0.7,
    weight: 18.5,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 21,
    name: "Spearow",
    types: [
      "normal",
      "flying"
    ],
    height: 0.3,
    weight: 2,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 22,
    name: "Fearow",
    types: [
      "normal",
      "flying"
    ],
    height: 1.2,
    weight: 38,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 23,
    name: "Ekans",
    types: [
      "poison"
    ],
    height: 2,
    weight: 6.9,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 24,
    name: "Arbok",
    types: [
      "poison"
    ],
    height: 3.5,
    weight: 65,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 25,
    name: "Pikachu",
    types: [
      "electric"
    ],
    height: 0.4,
    weight: 6,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 26,
    name: "Raichu",
    types: [
      "electric"
    ],
    height: 0.8,
    weight: 30,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 27,
    name: "Sandshrew",
    types: [
      "ground"
    ],
    height: 0.6,
    weight: 12,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 28,
    name: "Sandslash",
    types: [
      "ground"
    ],
    height: 1,
    weight: 29.5,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 29,
    name: "Nidoran-f",
    types: [
      "poison"
    ],
    height: 0.4,
    weight: 7,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 30,
    name: "Nidorina",
    types: [
      "poison"
    ],
    height: 0.8,
    weight: 20,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 31,
    name: "Nidoqueen",
    types: [
      "poison",
      "ground"
    ],
    height: 1.3,
    weight: 60,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 32,
    name: "Nidoran-m",
    types: [
      "poison"
    ],
    height: 0.5,
    weight: 9,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 33,
    name: "Nidorino",
    types: [
      "poison"
    ],
    height: 0.9,
    weight: 19.5,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 34,
    name: "Nidoking",
    types: [
      "poison",
      "ground"
    ],
    height: 1.4,
    weight: 62,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 35,
    name: "Clefairy",
    types: [
      "fairy"
    ],
    height: 0.6,
    weight: 7.5,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 36,
    name: "Clefable",
    types: [
      "fairy"
    ],
    height: 1.3,
    weight: 40,
    habitat: "mountain",
    evolutionStage: 3
  },
  {
    id: 37,
    name: "Vulpix",
    types: [
      "fire"
    ],
    height: 0.6,
    weight: 9.9,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 38,
    name: "Ninetales",
    types: [
      "fire"
    ],
    height: 1.1,
    weight: 19.9,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 39,
    name: "Jigglypuff",
    types: [
      "normal",
      "fairy"
    ],
    height: 0.5,
    weight: 5.5,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 40,
    name: "Wigglytuff",
    types: [
      "normal",
      "fairy"
    ],
    height: 1,
    weight: 12,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 41,
    name: "Zubat",
    types: [
      "poison",
      "flying"
    ],
    height: 0.8,
    weight: 7.5,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 42,
    name: "Golbat",
    types: [
      "poison",
      "flying"
    ],
    height: 1.6,
    weight: 55,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 43,
    name: "Oddish",
    types: [
      "grass",
      "poison"
    ],
    height: 0.5,
    weight: 5.4,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 44,
    name: "Gloom",
    types: [
      "grass",
      "poison"
    ],
    height: 0.8,
    weight: 8.6,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 45,
    name: "Vileplume",
    types: [
      "grass",
      "poison"
    ],
    height: 1.2,
    weight: 18.6,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 46,
    name: "Paras",
    types: [
      "bug",
      "grass"
    ],
    height: 0.3,
    weight: 5.4,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 47,
    name: "Parasect",
    types: [
      "bug",
      "grass"
    ],
    height: 1,
    weight: 29.5,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 48,
    name: "Venonat",
    types: [
      "bug",
      "poison"
    ],
    height: 1,
    weight: 30,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 49,
    name: "Venomoth",
    types: [
      "bug",
      "poison"
    ],
    height: 1.5,
    weight: 12.5,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 50,
    name: "Diglett",
    types: [
      "ground"
    ],
    height: 0.2,
    weight: 0.8,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 51,
    name: "Dugtrio",
    types: [
      "ground"
    ],
    height: 0.7,
    weight: 33.3,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 52,
    name: "Meowth",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 4.2,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 53,
    name: "Persian",
    types: [
      "normal"
    ],
    height: 1,
    weight: 32,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 54,
    name: "Psyduck",
    types: [
      "water"
    ],
    height: 0.8,
    weight: 19.6,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 55,
    name: "Golduck",
    types: [
      "water"
    ],
    height: 1.7,
    weight: 76.6,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 56,
    name: "Mankey",
    types: [
      "fighting"
    ],
    height: 0.5,
    weight: 28,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 57,
    name: "Primeape",
    types: [
      "fighting"
    ],
    height: 1,
    weight: 32,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 58,
    name: "Growlithe",
    types: [
      "fire"
    ],
    height: 0.7,
    weight: 19,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 59,
    name: "Arcanine",
    types: [
      "fire"
    ],
    height: 1.9,
    weight: 155,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 60,
    name: "Poliwag",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 12.4,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 61,
    name: "Poliwhirl",
    types: [
      "water"
    ],
    height: 1,
    weight: 20,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 62,
    name: "Poliwrath",
    types: [
      "water",
      "fighting"
    ],
    height: 1.3,
    weight: 54,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 63,
    name: "Abra",
    types: [
      "psychic"
    ],
    height: 0.9,
    weight: 19.5,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 64,
    name: "Kadabra",
    types: [
      "psychic"
    ],
    height: 1.3,
    weight: 56.5,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 65,
    name: "Alakazam",
    types: [
      "psychic"
    ],
    height: 1.5,
    weight: 48,
    habitat: "urban",
    evolutionStage: 3
  },
  {
    id: 66,
    name: "Machop",
    types: [
      "fighting"
    ],
    height: 0.8,
    weight: 19.5,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 67,
    name: "Machoke",
    types: [
      "fighting"
    ],
    height: 1.5,
    weight: 70.5,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 68,
    name: "Machamp",
    types: [
      "fighting"
    ],
    height: 1.6,
    weight: 130,
    habitat: "mountain",
    evolutionStage: 3
  },
  {
    id: 69,
    name: "Bellsprout",
    types: [
      "grass",
      "poison"
    ],
    height: 0.7,
    weight: 4,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 70,
    name: "Weepinbell",
    types: [
      "grass",
      "poison"
    ],
    height: 1,
    weight: 6.4,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 71,
    name: "Victreebel",
    types: [
      "grass",
      "poison"
    ],
    height: 1.7,
    weight: 15.5,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 72,
    name: "Tentacool",
    types: [
      "water",
      "poison"
    ],
    height: 0.9,
    weight: 45.5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 73,
    name: "Tentacruel",
    types: [
      "water",
      "poison"
    ],
    height: 1.6,
    weight: 55,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 74,
    name: "Geodude",
    types: [
      "rock",
      "ground"
    ],
    height: 0.4,
    weight: 20,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 75,
    name: "Graveler",
    types: [
      "rock",
      "ground"
    ],
    height: 1,
    weight: 105,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 76,
    name: "Golem",
    types: [
      "rock",
      "ground"
    ],
    height: 1.4,
    weight: 300,
    habitat: "mountain",
    evolutionStage: 3
  },
  {
    id: 77,
    name: "Ponyta",
    types: [
      "fire"
    ],
    height: 1,
    weight: 30,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 78,
    name: "Rapidash",
    types: [
      "fire"
    ],
    height: 1.7,
    weight: 95,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 79,
    name: "Slowpoke",
    types: [
      "water",
      "psychic"
    ],
    height: 1.2,
    weight: 36,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 80,
    name: "Slowbro",
    types: [
      "water",
      "psychic"
    ],
    height: 1.6,
    weight: 78.5,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 81,
    name: "Magnemite",
    types: [
      "electric",
      "steel"
    ],
    height: 0.3,
    weight: 6,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 82,
    name: "Magneton",
    types: [
      "electric",
      "steel"
    ],
    height: 1,
    weight: 60,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 83,
    name: "Farfetchd",
    types: [
      "normal",
      "flying"
    ],
    height: 0.8,
    weight: 15,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 84,
    name: "Doduo",
    types: [
      "normal",
      "flying"
    ],
    height: 1.4,
    weight: 39.2,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 85,
    name: "Dodrio",
    types: [
      "normal",
      "flying"
    ],
    height: 1.8,
    weight: 85.2,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 86,
    name: "Seel",
    types: [
      "water"
    ],
    height: 1.1,
    weight: 90,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 87,
    name: "Dewgong",
    types: [
      "water",
      "ice"
    ],
    height: 1.7,
    weight: 120,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 88,
    name: "Grimer",
    types: [
      "poison"
    ],
    height: 0.9,
    weight: 30,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 89,
    name: "Muk",
    types: [
      "poison"
    ],
    height: 1.2,
    weight: 30,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 90,
    name: "Shellder",
    types: [
      "water"
    ],
    height: 0.3,
    weight: 4,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 91,
    name: "Cloyster",
    types: [
      "water",
      "ice"
    ],
    height: 1.5,
    weight: 132.5,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 92,
    name: "Gastly",
    types: [
      "ghost",
      "poison"
    ],
    height: 1.3,
    weight: 0.1,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 93,
    name: "Haunter",
    types: [
      "ghost",
      "poison"
    ],
    height: 1.6,
    weight: 0.1,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 94,
    name: "Gengar",
    types: [
      "ghost",
      "poison"
    ],
    height: 1.5,
    weight: 40.5,
    habitat: "cave",
    evolutionStage: 3
  },
  {
    id: 95,
    name: "Onix",
    types: [
      "rock",
      "ground"
    ],
    height: 8.8,
    weight: 210,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 96,
    name: "Drowzee",
    types: [
      "psychic"
    ],
    height: 1,
    weight: 32.4,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 97,
    name: "Hypno",
    types: [
      "psychic"
    ],
    height: 1.6,
    weight: 75.6,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 98,
    name: "Krabby",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 6.5,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 99,
    name: "Kingler",
    types: [
      "water"
    ],
    height: 1.3,
    weight: 60,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 100,
    name: "Voltorb",
    types: [
      "electric"
    ],
    height: 0.5,
    weight: 10.4,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 101,
    name: "Electrode",
    types: [
      "electric"
    ],
    height: 1.2,
    weight: 66.6,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 102,
    name: "Exeggcute",
    types: [
      "grass",
      "psychic"
    ],
    height: 0.4,
    weight: 2.5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 103,
    name: "Exeggutor",
    types: [
      "grass",
      "psychic"
    ],
    height: 2,
    weight: 120,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 104,
    name: "Cubone",
    types: [
      "ground"
    ],
    height: 0.4,
    weight: 6.5,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 105,
    name: "Marowak",
    types: [
      "ground"
    ],
    height: 1,
    weight: 45,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 106,
    name: "Hitmonlee",
    types: [
      "fighting"
    ],
    height: 1.5,
    weight: 49.8,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 107,
    name: "Hitmonchan",
    types: [
      "fighting"
    ],
    height: 1.4,
    weight: 50.2,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 108,
    name: "Lickitung",
    types: [
      "normal"
    ],
    height: 1.2,
    weight: 65.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 109,
    name: "Koffing",
    types: [
      "poison"
    ],
    height: 0.6,
    weight: 1,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 110,
    name: "Weezing",
    types: [
      "poison"
    ],
    height: 1.2,
    weight: 9.5,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 111,
    name: "Rhyhorn",
    types: [
      "ground",
      "rock"
    ],
    height: 1,
    weight: 115,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 112,
    name: "Rhydon",
    types: [
      "ground",
      "rock"
    ],
    height: 1.9,
    weight: 120,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 113,
    name: "Chansey",
    types: [
      "normal"
    ],
    height: 1.1,
    weight: 34.6,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 114,
    name: "Tangela",
    types: [
      "grass"
    ],
    height: 1,
    weight: 35,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 115,
    name: "Kangaskhan",
    types: [
      "normal"
    ],
    height: 2.2,
    weight: 80,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 116,
    name: "Horsea",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 8,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 117,
    name: "Seadra",
    types: [
      "water"
    ],
    height: 1.2,
    weight: 25,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 118,
    name: "Goldeen",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 15,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 119,
    name: "Seaking",
    types: [
      "water"
    ],
    height: 1.3,
    weight: 39,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 120,
    name: "Staryu",
    types: [
      "water"
    ],
    height: 0.8,
    weight: 34.5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 121,
    name: "Starmie",
    types: [
      "water",
      "psychic"
    ],
    height: 1.1,
    weight: 80,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 122,
    name: "Mr-mime",
    types: [
      "psychic",
      "fairy"
    ],
    height: 1.3,
    weight: 54.5,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 123,
    name: "Scyther",
    types: [
      "bug",
      "flying"
    ],
    height: 1.5,
    weight: 56,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 124,
    name: "Jynx",
    types: [
      "ice",
      "psychic"
    ],
    height: 1.4,
    weight: 40.6,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 125,
    name: "Electabuzz",
    types: [
      "electric"
    ],
    height: 1.1,
    weight: 30,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 126,
    name: "Magmar",
    types: [
      "fire"
    ],
    height: 1.3,
    weight: 44.5,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 127,
    name: "Pinsir",
    types: [
      "bug"
    ],
    height: 1.5,
    weight: 55,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 128,
    name: "Tauros",
    types: [
      "normal"
    ],
    height: 1.4,
    weight: 88.4,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 129,
    name: "Magikarp",
    types: [
      "water"
    ],
    height: 0.9,
    weight: 10,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 130,
    name: "Gyarados",
    types: [
      "water",
      "flying"
    ],
    height: 6.5,
    weight: 235,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 131,
    name: "Lapras",
    types: [
      "water",
      "ice"
    ],
    height: 2.5,
    weight: 220,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 132,
    name: "Ditto",
    types: [
      "normal"
    ],
    height: 0.3,
    weight: 4,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 133,
    name: "Eevee",
    types: [
      "normal"
    ],
    height: 0.3,
    weight: 6.5,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 134,
    name: "Vaporeon",
    types: [
      "water"
    ],
    height: 1,
    weight: 29,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 135,
    name: "Jolteon",
    types: [
      "electric"
    ],
    height: 0.8,
    weight: 24.5,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 136,
    name: "Flareon",
    types: [
      "fire"
    ],
    height: 0.9,
    weight: 25,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 137,
    name: "Porygon",
    types: [
      "normal"
    ],
    height: 0.8,
    weight: 36.5,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 138,
    name: "Omanyte",
    types: [
      "rock",
      "water"
    ],
    height: 0.4,
    weight: 7.5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 139,
    name: "Omastar",
    types: [
      "rock",
      "water"
    ],
    height: 1,
    weight: 35,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 140,
    name: "Kabuto",
    types: [
      "rock",
      "water"
    ],
    height: 0.5,
    weight: 11.5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 141,
    name: "Kabutops",
    types: [
      "rock",
      "water"
    ],
    height: 1.3,
    weight: 40.5,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 142,
    name: "Aerodactyl",
    types: [
      "rock",
      "flying"
    ],
    height: 1.8,
    weight: 59,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 143,
    name: "Snorlax",
    types: [
      "normal"
    ],
    height: 2.1,
    weight: 460,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 144,
    name: "Articuno",
    types: [
      "ice",
      "flying"
    ],
    height: 1.7,
    weight: 55.4,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 145,
    name: "Zapdos",
    types: [
      "electric",
      "flying"
    ],
    height: 1.6,
    weight: 52.6,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 146,
    name: "Moltres",
    types: [
      "fire",
      "flying"
    ],
    height: 2,
    weight: 60,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 147,
    name: "Dratini",
    types: [
      "dragon"
    ],
    height: 1.8,
    weight: 3.3,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 148,
    name: "Dragonair",
    types: [
      "dragon"
    ],
    height: 4,
    weight: 16.5,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 149,
    name: "Dragonite",
    types: [
      "dragon",
      "flying"
    ],
    height: 2.2,
    weight: 210,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 150,
    name: "Mewtwo",
    types: [
      "psychic"
    ],
    height: 2,
    weight: 122,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 151,
    name: "Mew",
    types: [
      "psychic"
    ],
    height: 0.4,
    weight: 4,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 152,
    name: "Chikorita",
    types: [
      "grass"
    ],
    height: 0.9,
    weight: 6.4,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 153,
    name: "Bayleef",
    types: [
      "grass"
    ],
    height: 1.2,
    weight: 15.8,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 154,
    name: "Meganium",
    types: [
      "grass"
    ],
    height: 1.8,
    weight: 100.5,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 155,
    name: "Cyndaquil",
    types: [
      "fire"
    ],
    height: 0.5,
    weight: 7.9,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 156,
    name: "Quilava",
    types: [
      "fire"
    ],
    height: 0.9,
    weight: 19,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 157,
    name: "Typhlosion",
    types: [
      "fire"
    ],
    height: 1.7,
    weight: 79.5,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 158,
    name: "Totodile",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 9.5,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 159,
    name: "Croconaw",
    types: [
      "water"
    ],
    height: 1.1,
    weight: 25,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 160,
    name: "Feraligatr",
    types: [
      "water"
    ],
    height: 2.3,
    weight: 88.8,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 161,
    name: "Sentret",
    types: [
      "normal"
    ],
    height: 0.8,
    weight: 6,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 162,
    name: "Furret",
    types: [
      "normal"
    ],
    height: 1.8,
    weight: 32.5,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 163,
    name: "Hoothoot",
    types: [
      "normal",
      "flying"
    ],
    height: 0.7,
    weight: 21.2,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 164,
    name: "Noctowl",
    types: [
      "normal",
      "flying"
    ],
    height: 1.6,
    weight: 40.8,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 165,
    name: "Ledyba",
    types: [
      "bug",
      "flying"
    ],
    height: 1,
    weight: 10.8,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 166,
    name: "Ledian",
    types: [
      "bug",
      "flying"
    ],
    height: 1.4,
    weight: 35.6,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 167,
    name: "Spinarak",
    types: [
      "bug",
      "poison"
    ],
    height: 0.5,
    weight: 8.5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 168,
    name: "Ariados",
    types: [
      "bug",
      "poison"
    ],
    height: 1.1,
    weight: 33.5,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 169,
    name: "Crobat",
    types: [
      "poison",
      "flying"
    ],
    height: 1.8,
    weight: 75,
    habitat: "cave",
    evolutionStage: 3
  },
  {
    id: 170,
    name: "Chinchou",
    types: [
      "water",
      "electric"
    ],
    height: 0.5,
    weight: 12,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 171,
    name: "Lanturn",
    types: [
      "water",
      "electric"
    ],
    height: 1.2,
    weight: 22.5,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 172,
    name: "Pichu",
    types: [
      "electric"
    ],
    height: 0.3,
    weight: 2,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 173,
    name: "Cleffa",
    types: [
      "fairy"
    ],
    height: 0.3,
    weight: 3,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 174,
    name: "Igglybuff",
    types: [
      "normal",
      "fairy"
    ],
    height: 0.3,
    weight: 1,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 175,
    name: "Togepi",
    types: [
      "fairy"
    ],
    height: 0.3,
    weight: 1.5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 176,
    name: "Togetic",
    types: [
      "fairy",
      "flying"
    ],
    height: 0.6,
    weight: 3.2,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 177,
    name: "Natu",
    types: [
      "psychic",
      "flying"
    ],
    height: 0.2,
    weight: 2,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 178,
    name: "Xatu",
    types: [
      "psychic",
      "flying"
    ],
    height: 1.5,
    weight: 15,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 179,
    name: "Mareep",
    types: [
      "electric"
    ],
    height: 0.6,
    weight: 7.8,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 180,
    name: "Flaaffy",
    types: [
      "electric"
    ],
    height: 0.8,
    weight: 13.3,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 181,
    name: "Ampharos",
    types: [
      "electric"
    ],
    height: 1.4,
    weight: 61.5,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 182,
    name: "Bellossom",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 5.8,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 183,
    name: "Marill",
    types: [
      "water",
      "fairy"
    ],
    height: 0.4,
    weight: 8.5,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 184,
    name: "Azumarill",
    types: [
      "water",
      "fairy"
    ],
    height: 0.8,
    weight: 28.5,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 185,
    name: "Sudowoodo",
    types: [
      "rock"
    ],
    height: 1.2,
    weight: 38,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 186,
    name: "Politoed",
    types: [
      "water"
    ],
    height: 1.1,
    weight: 33.9,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 187,
    name: "Hoppip",
    types: [
      "grass",
      "flying"
    ],
    height: 0.4,
    weight: 0.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 188,
    name: "Skiploom",
    types: [
      "grass",
      "flying"
    ],
    height: 0.6,
    weight: 1,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 189,
    name: "Jumpluff",
    types: [
      "grass",
      "flying"
    ],
    height: 0.8,
    weight: 3,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 190,
    name: "Aipom",
    types: [
      "normal"
    ],
    height: 0.8,
    weight: 11.5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 191,
    name: "Sunkern",
    types: [
      "grass"
    ],
    height: 0.3,
    weight: 1.8,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 192,
    name: "Sunflora",
    types: [
      "grass"
    ],
    height: 0.8,
    weight: 8.5,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 193,
    name: "Yanma",
    types: [
      "bug",
      "flying"
    ],
    height: 1.2,
    weight: 38,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 194,
    name: "Wooper",
    types: [
      "water",
      "ground"
    ],
    height: 0.4,
    weight: 8.5,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 195,
    name: "Quagsire",
    types: [
      "water",
      "ground"
    ],
    height: 1.4,
    weight: 75,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 196,
    name: "Espeon",
    types: [
      "psychic"
    ],
    height: 0.9,
    weight: 26.5,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 197,
    name: "Umbreon",
    types: [
      "dark"
    ],
    height: 1,
    weight: 27,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 198,
    name: "Murkrow",
    types: [
      "dark",
      "flying"
    ],
    height: 0.5,
    weight: 2.1,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 199,
    name: "Slowking",
    types: [
      "water",
      "psychic"
    ],
    height: 2,
    weight: 79.5,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 200,
    name: "Misdreavus",
    types: [
      "ghost"
    ],
    height: 0.7,
    weight: 1,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 201,
    name: "Unown",
    types: [
      "psychic"
    ],
    height: 0.5,
    weight: 5,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 202,
    name: "Wobbuffet",
    types: [
      "psychic"
    ],
    height: 1.3,
    weight: 28.5,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 203,
    name: "Girafarig",
    types: [
      "normal",
      "psychic"
    ],
    height: 1.5,
    weight: 41.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 204,
    name: "Pineco",
    types: [
      "bug"
    ],
    height: 0.6,
    weight: 7.2,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 205,
    name: "Forretress",
    types: [
      "bug",
      "steel"
    ],
    height: 1.2,
    weight: 125.8,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 206,
    name: "Dunsparce",
    types: [
      "normal"
    ],
    height: 1.5,
    weight: 14,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 207,
    name: "Gligar",
    types: [
      "ground",
      "flying"
    ],
    height: 1.1,
    weight: 64.8,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 208,
    name: "Steelix",
    types: [
      "steel",
      "ground"
    ],
    height: 9.2,
    weight: 400,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 209,
    name: "Snubbull",
    types: [
      "fairy"
    ],
    height: 0.6,
    weight: 7.8,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 210,
    name: "Granbull",
    types: [
      "fairy"
    ],
    height: 1.4,
    weight: 48.7,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 211,
    name: "Qwilfish",
    types: [
      "water",
      "poison"
    ],
    height: 0.5,
    weight: 3.9,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 212,
    name: "Scizor",
    types: [
      "bug",
      "steel"
    ],
    height: 1.8,
    weight: 118,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 213,
    name: "Shuckle",
    types: [
      "bug",
      "rock"
    ],
    height: 0.6,
    weight: 20.5,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 214,
    name: "Heracross",
    types: [
      "bug",
      "fighting"
    ],
    height: 1.5,
    weight: 54,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 215,
    name: "Sneasel",
    types: [
      "dark",
      "ice"
    ],
    height: 0.9,
    weight: 28,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 216,
    name: "Teddiursa",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 8.8,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 217,
    name: "Ursaring",
    types: [
      "normal"
    ],
    height: 1.8,
    weight: 125.8,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 218,
    name: "Slugma",
    types: [
      "fire"
    ],
    height: 0.7,
    weight: 35,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 219,
    name: "Magcargo",
    types: [
      "fire",
      "rock"
    ],
    height: 0.8,
    weight: 55,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 220,
    name: "Swinub",
    types: [
      "ice",
      "ground"
    ],
    height: 0.4,
    weight: 6.5,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 221,
    name: "Piloswine",
    types: [
      "ice",
      "ground"
    ],
    height: 1.1,
    weight: 55.8,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 222,
    name: "Corsola",
    types: [
      "water",
      "rock"
    ],
    height: 0.6,
    weight: 5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 223,
    name: "Remoraid",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 12,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 224,
    name: "Octillery",
    types: [
      "water"
    ],
    height: 0.9,
    weight: 28.5,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 225,
    name: "Delibird",
    types: [
      "ice",
      "flying"
    ],
    height: 0.9,
    weight: 16,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 226,
    name: "Mantine",
    types: [
      "water",
      "flying"
    ],
    height: 2.1,
    weight: 220,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 227,
    name: "Skarmory",
    types: [
      "steel",
      "flying"
    ],
    height: 1.7,
    weight: 50.5,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 228,
    name: "Houndour",
    types: [
      "dark",
      "fire"
    ],
    height: 0.6,
    weight: 10.8,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 229,
    name: "Houndoom",
    types: [
      "dark",
      "fire"
    ],
    height: 1.4,
    weight: 35,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 230,
    name: "Kingdra",
    types: [
      "water",
      "dragon"
    ],
    height: 1.8,
    weight: 152,
    habitat: "sea",
    evolutionStage: 3
  },
  {
    id: 231,
    name: "Phanpy",
    types: [
      "ground"
    ],
    height: 0.5,
    weight: 33.5,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 232,
    name: "Donphan",
    types: [
      "ground"
    ],
    height: 1.1,
    weight: 120,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 233,
    name: "Porygon2",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 32.5,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 234,
    name: "Stantler",
    types: [
      "normal"
    ],
    height: 1.4,
    weight: 71.2,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 235,
    name: "Smeargle",
    types: [
      "normal"
    ],
    height: 1.2,
    weight: 58,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 236,
    name: "Tyrogue",
    types: [
      "fighting"
    ],
    height: 0.7,
    weight: 21,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 237,
    name: "Hitmontop",
    types: [
      "fighting"
    ],
    height: 1.4,
    weight: 48,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 238,
    name: "Smoochum",
    types: [
      "ice",
      "psychic"
    ],
    height: 0.4,
    weight: 6,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 239,
    name: "Elekid",
    types: [
      "electric"
    ],
    height: 0.6,
    weight: 23.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 240,
    name: "Magby",
    types: [
      "fire"
    ],
    height: 0.7,
    weight: 21.4,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 241,
    name: "Miltank",
    types: [
      "normal"
    ],
    height: 1.2,
    weight: 75.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 242,
    name: "Blissey",
    types: [
      "normal"
    ],
    height: 1.5,
    weight: 46.8,
    habitat: "urban",
    evolutionStage: 3
  },
  {
    id: 243,
    name: "Raikou",
    types: [
      "electric"
    ],
    height: 1.9,
    weight: 178,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 244,
    name: "Entei",
    types: [
      "fire"
    ],
    height: 2.1,
    weight: 198,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 245,
    name: "Suicune",
    types: [
      "water"
    ],
    height: 2,
    weight: 187,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 246,
    name: "Larvitar",
    types: [
      "rock",
      "ground"
    ],
    height: 0.6,
    weight: 72,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 247,
    name: "Pupitar",
    types: [
      "rock",
      "ground"
    ],
    height: 1.2,
    weight: 152,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 248,
    name: "Tyranitar",
    types: [
      "rock",
      "dark"
    ],
    height: 2,
    weight: 202,
    habitat: "mountain",
    evolutionStage: 3
  },
  {
    id: 249,
    name: "Lugia",
    types: [
      "psychic",
      "flying"
    ],
    height: 5.2,
    weight: 216,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 250,
    name: "Ho-oh",
    types: [
      "fire",
      "flying"
    ],
    height: 3.8,
    weight: 199,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 251,
    name: "Celebi",
    types: [
      "psychic",
      "grass"
    ],
    height: 0.6,
    weight: 5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 252,
    name: "Treecko",
    types: [
      "grass"
    ],
    height: 0.5,
    weight: 5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 253,
    name: "Grovyle",
    types: [
      "grass"
    ],
    height: 0.9,
    weight: 21.6,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 254,
    name: "Sceptile",
    types: [
      "grass"
    ],
    height: 1.7,
    weight: 52.2,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 255,
    name: "Torchic",
    types: [
      "fire"
    ],
    height: 0.4,
    weight: 2.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 256,
    name: "Combusken",
    types: [
      "fire",
      "fighting"
    ],
    height: 0.9,
    weight: 19.5,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 257,
    name: "Blaziken",
    types: [
      "fire",
      "fighting"
    ],
    height: 1.9,
    weight: 52,
    habitat: "grassland",
    evolutionStage: 3
  },
  {
    id: 258,
    name: "Mudkip",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 7.6,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 259,
    name: "Marshtomp",
    types: [
      "water",
      "ground"
    ],
    height: 0.7,
    weight: 28,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 260,
    name: "Swampert",
    types: [
      "water",
      "ground"
    ],
    height: 1.5,
    weight: 81.9,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 261,
    name: "Poochyena",
    types: [
      "dark"
    ],
    height: 0.5,
    weight: 13.6,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 262,
    name: "Mightyena",
    types: [
      "dark"
    ],
    height: 1,
    weight: 37,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 263,
    name: "Zigzagoon",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 17.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 264,
    name: "Linoone",
    types: [
      "normal"
    ],
    height: 0.5,
    weight: 32.5,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 265,
    name: "Wurmple",
    types: [
      "bug"
    ],
    height: 0.3,
    weight: 3.6,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 266,
    name: "Silcoon",
    types: [
      "bug"
    ],
    height: 0.6,
    weight: 10,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 267,
    name: "Beautifly",
    types: [
      "bug",
      "flying"
    ],
    height: 1,
    weight: 28.4,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 268,
    name: "Cascoon",
    types: [
      "bug"
    ],
    height: 0.7,
    weight: 11.5,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 269,
    name: "Dustox",
    types: [
      "bug",
      "poison"
    ],
    height: 1.2,
    weight: 31.6,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 270,
    name: "Lotad",
    types: [
      "water",
      "grass"
    ],
    height: 0.5,
    weight: 2.6,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 271,
    name: "Lombre",
    types: [
      "water",
      "grass"
    ],
    height: 1.2,
    weight: 32.5,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 272,
    name: "Ludicolo",
    types: [
      "water",
      "grass"
    ],
    height: 1.5,
    weight: 55,
    habitat: "waters-edge",
    evolutionStage: 3
  },
  {
    id: 273,
    name: "Seedot",
    types: [
      "grass"
    ],
    height: 0.5,
    weight: 4,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 274,
    name: "Nuzleaf",
    types: [
      "grass",
      "dark"
    ],
    height: 1,
    weight: 28,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 275,
    name: "Shiftry",
    types: [
      "grass",
      "dark"
    ],
    height: 1.3,
    weight: 59.6,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 276,
    name: "Taillow",
    types: [
      "normal",
      "flying"
    ],
    height: 0.3,
    weight: 2.3,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 277,
    name: "Swellow",
    types: [
      "normal",
      "flying"
    ],
    height: 0.7,
    weight: 19.8,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 278,
    name: "Wingull",
    types: [
      "water",
      "flying"
    ],
    height: 0.6,
    weight: 9.5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 279,
    name: "Pelipper",
    types: [
      "water",
      "flying"
    ],
    height: 1.2,
    weight: 28,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 280,
    name: "Ralts",
    types: [
      "psychic",
      "fairy"
    ],
    height: 0.4,
    weight: 6.6,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 281,
    name: "Kirlia",
    types: [
      "psychic",
      "fairy"
    ],
    height: 0.8,
    weight: 20.2,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 282,
    name: "Gardevoir",
    types: [
      "psychic",
      "fairy"
    ],
    height: 1.6,
    weight: 48.4,
    habitat: "urban",
    evolutionStage: 3
  },
  {
    id: 283,
    name: "Surskit",
    types: [
      "bug",
      "water"
    ],
    height: 0.5,
    weight: 1.7,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 284,
    name: "Masquerain",
    types: [
      "bug",
      "flying"
    ],
    height: 0.8,
    weight: 3.6,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 285,
    name: "Shroomish",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 4.5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 286,
    name: "Breloom",
    types: [
      "grass",
      "fighting"
    ],
    height: 1.2,
    weight: 39.2,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 287,
    name: "Slakoth",
    types: [
      "normal"
    ],
    height: 0.8,
    weight: 24,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 288,
    name: "Vigoroth",
    types: [
      "normal"
    ],
    height: 1.4,
    weight: 46.5,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 289,
    name: "Slaking",
    types: [
      "normal"
    ],
    height: 2,
    weight: 130.5,
    habitat: "forest",
    evolutionStage: 3
  },
  {
    id: 290,
    name: "Nincada",
    types: [
      "bug",
      "ground"
    ],
    height: 0.5,
    weight: 5.5,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 291,
    name: "Ninjask",
    types: [
      "bug",
      "flying"
    ],
    height: 0.8,
    weight: 12,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 292,
    name: "Shedinja",
    types: [
      "bug",
      "ghost"
    ],
    height: 0.8,
    weight: 1.2,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 293,
    name: "Whismur",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 16.3,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 294,
    name: "Loudred",
    types: [
      "normal"
    ],
    height: 1,
    weight: 40.5,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 295,
    name: "Exploud",
    types: [
      "normal"
    ],
    height: 1.5,
    weight: 84,
    habitat: "cave",
    evolutionStage: 3
  },
  {
    id: 296,
    name: "Makuhita",
    types: [
      "fighting"
    ],
    height: 1,
    weight: 86.4,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 297,
    name: "Hariyama",
    types: [
      "fighting"
    ],
    height: 2.3,
    weight: 253.8,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 298,
    name: "Azurill",
    types: [
      "normal",
      "fairy"
    ],
    height: 0.2,
    weight: 2,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 299,
    name: "Nosepass",
    types: [
      "rock"
    ],
    height: 1,
    weight: 97,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 300,
    name: "Skitty",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 11,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 301,
    name: "Delcatty",
    types: [
      "normal"
    ],
    height: 1.1,
    weight: 32.6,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 302,
    name: "Sableye",
    types: [
      "dark",
      "ghost"
    ],
    height: 0.5,
    weight: 11,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 303,
    name: "Mawile",
    types: [
      "steel",
      "fairy"
    ],
    height: 0.6,
    weight: 11.5,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 304,
    name: "Aron",
    types: [
      "steel",
      "rock"
    ],
    height: 0.4,
    weight: 60,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 305,
    name: "Lairon",
    types: [
      "steel",
      "rock"
    ],
    height: 0.9,
    weight: 120,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 306,
    name: "Aggron",
    types: [
      "steel",
      "rock"
    ],
    height: 2.1,
    weight: 360,
    habitat: "mountain",
    evolutionStage: 3
  },
  {
    id: 307,
    name: "Meditite",
    types: [
      "fighting",
      "psychic"
    ],
    height: 0.6,
    weight: 11.2,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 308,
    name: "Medicham",
    types: [
      "fighting",
      "psychic"
    ],
    height: 1.3,
    weight: 31.5,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 309,
    name: "Electrike",
    types: [
      "electric"
    ],
    height: 0.6,
    weight: 15.2,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 310,
    name: "Manectric",
    types: [
      "electric"
    ],
    height: 1.5,
    weight: 40.2,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 311,
    name: "Plusle",
    types: [
      "electric"
    ],
    height: 0.4,
    weight: 4.2,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 312,
    name: "Minun",
    types: [
      "electric"
    ],
    height: 0.4,
    weight: 4.2,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 313,
    name: "Volbeat",
    types: [
      "bug"
    ],
    height: 0.7,
    weight: 17.7,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 314,
    name: "Illumise",
    types: [
      "bug"
    ],
    height: 0.6,
    weight: 17.7,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 315,
    name: "Roselia",
    types: [
      "grass",
      "poison"
    ],
    height: 0.3,
    weight: 2,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 316,
    name: "Gulpin",
    types: [
      "poison"
    ],
    height: 0.4,
    weight: 10.3,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 317,
    name: "Swalot",
    types: [
      "poison"
    ],
    height: 1.7,
    weight: 80,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 318,
    name: "Carvanha",
    types: [
      "water",
      "dark"
    ],
    height: 0.8,
    weight: 20.8,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 319,
    name: "Sharpedo",
    types: [
      "water",
      "dark"
    ],
    height: 1.8,
    weight: 88.8,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 320,
    name: "Wailmer",
    types: [
      "water"
    ],
    height: 2,
    weight: 130,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 321,
    name: "Wailord",
    types: [
      "water"
    ],
    height: 14.5,
    weight: 398,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 322,
    name: "Numel",
    types: [
      "fire",
      "ground"
    ],
    height: 0.7,
    weight: 24,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 323,
    name: "Camerupt",
    types: [
      "fire",
      "ground"
    ],
    height: 1.9,
    weight: 220,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 324,
    name: "Torkoal",
    types: [
      "fire"
    ],
    height: 0.5,
    weight: 80.4,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 325,
    name: "Spoink",
    types: [
      "psychic"
    ],
    height: 0.7,
    weight: 30.6,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 326,
    name: "Grumpig",
    types: [
      "psychic"
    ],
    height: 0.9,
    weight: 71.5,
    habitat: "mountain",
    evolutionStage: 2
  },
  {
    id: 327,
    name: "Spinda",
    types: [
      "normal"
    ],
    height: 1.1,
    weight: 5,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 328,
    name: "Trapinch",
    types: [
      "ground"
    ],
    height: 0.7,
    weight: 15,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 329,
    name: "Vibrava",
    types: [
      "ground",
      "dragon"
    ],
    height: 1.1,
    weight: 15.3,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 330,
    name: "Flygon",
    types: [
      "ground",
      "dragon"
    ],
    height: 2,
    weight: 82,
    habitat: "rough-terrain",
    evolutionStage: 3
  },
  {
    id: 331,
    name: "Cacnea",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 51.3,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 332,
    name: "Cacturne",
    types: [
      "grass",
      "dark"
    ],
    height: 1.3,
    weight: 77.4,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 333,
    name: "Swablu",
    types: [
      "normal",
      "flying"
    ],
    height: 0.4,
    weight: 1.2,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 334,
    name: "Altaria",
    types: [
      "dragon",
      "flying"
    ],
    height: 1.1,
    weight: 20.6,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 335,
    name: "Zangoose",
    types: [
      "normal"
    ],
    height: 1.3,
    weight: 40.3,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 336,
    name: "Seviper",
    types: [
      "poison"
    ],
    height: 2.7,
    weight: 52.5,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 337,
    name: "Lunatone",
    types: [
      "rock",
      "psychic"
    ],
    height: 1,
    weight: 168,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 338,
    name: "Solrock",
    types: [
      "rock",
      "psychic"
    ],
    height: 1.2,
    weight: 154,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 339,
    name: "Barboach",
    types: [
      "water",
      "ground"
    ],
    height: 0.4,
    weight: 1.9,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 340,
    name: "Whiscash",
    types: [
      "water",
      "ground"
    ],
    height: 0.9,
    weight: 23.6,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 341,
    name: "Corphish",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 11.5,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 342,
    name: "Crawdaunt",
    types: [
      "water",
      "dark"
    ],
    height: 1.1,
    weight: 32.8,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 343,
    name: "Baltoy",
    types: [
      "ground",
      "psychic"
    ],
    height: 0.5,
    weight: 21.5,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 344,
    name: "Claydol",
    types: [
      "ground",
      "psychic"
    ],
    height: 1.5,
    weight: 108,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 345,
    name: "Lileep",
    types: [
      "rock",
      "grass"
    ],
    height: 1,
    weight: 23.8,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 346,
    name: "Cradily",
    types: [
      "rock",
      "grass"
    ],
    height: 1.5,
    weight: 60.4,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 347,
    name: "Anorith",
    types: [
      "rock",
      "bug"
    ],
    height: 0.7,
    weight: 12.5,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 348,
    name: "Armaldo",
    types: [
      "rock",
      "bug"
    ],
    height: 1.5,
    weight: 68.2,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 349,
    name: "Feebas",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 7.4,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 350,
    name: "Milotic",
    types: [
      "water"
    ],
    height: 6.2,
    weight: 162,
    habitat: "waters-edge",
    evolutionStage: 2
  },
  {
    id: 351,
    name: "Castform",
    types: [
      "normal"
    ],
    height: 0.3,
    weight: 0.8,
    habitat: "grassland",
    evolutionStage: 1
  },
  {
    id: 352,
    name: "Kecleon",
    types: [
      "normal"
    ],
    height: 1,
    weight: 22,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 353,
    name: "Shuppet",
    types: [
      "ghost"
    ],
    height: 0.6,
    weight: 2.3,
    habitat: "urban",
    evolutionStage: 1
  },
  {
    id: 354,
    name: "Banette",
    types: [
      "ghost"
    ],
    height: 1.1,
    weight: 12.5,
    habitat: "urban",
    evolutionStage: 2
  },
  {
    id: 355,
    name: "Duskull",
    types: [
      "ghost"
    ],
    height: 0.8,
    weight: 15,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 356,
    name: "Dusclops",
    types: [
      "ghost"
    ],
    height: 1.6,
    weight: 30.6,
    habitat: "forest",
    evolutionStage: 2
  },
  {
    id: 357,
    name: "Tropius",
    types: [
      "grass",
      "flying"
    ],
    height: 2,
    weight: 100,
    habitat: "forest",
    evolutionStage: 1
  },
  {
    id: 358,
    name: "Chimecho",
    types: [
      "psychic"
    ],
    height: 0.6,
    weight: 1,
    habitat: "grassland",
    evolutionStage: 2
  },
  {
    id: 359,
    name: "Absol",
    types: [
      "dark"
    ],
    height: 1.2,
    weight: 47,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 360,
    name: "Wynaut",
    types: [
      "psychic"
    ],
    height: 0.6,
    weight: 14,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 361,
    name: "Snorunt",
    types: [
      "ice"
    ],
    height: 0.7,
    weight: 16.8,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 362,
    name: "Glalie",
    types: [
      "ice"
    ],
    height: 1.5,
    weight: 256.5,
    habitat: "cave",
    evolutionStage: 2
  },
  {
    id: 363,
    name: "Spheal",
    types: [
      "ice",
      "water"
    ],
    height: 0.8,
    weight: 39.5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 364,
    name: "Sealeo",
    types: [
      "ice",
      "water"
    ],
    height: 1.1,
    weight: 87.6,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 365,
    name: "Walrein",
    types: [
      "ice",
      "water"
    ],
    height: 1.4,
    weight: 150.6,
    habitat: "sea",
    evolutionStage: 3
  },
  {
    id: 366,
    name: "Clamperl",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 52.5,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 367,
    name: "Huntail",
    types: [
      "water"
    ],
    height: 1.7,
    weight: 27,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 368,
    name: "Gorebyss",
    types: [
      "water"
    ],
    height: 1.8,
    weight: 22.6,
    habitat: "sea",
    evolutionStage: 2
  },
  {
    id: 369,
    name: "Relicanth",
    types: [
      "water",
      "rock"
    ],
    height: 1,
    weight: 23.4,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 370,
    name: "Luvdisc",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 8.7,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 371,
    name: "Bagon",
    types: [
      "dragon"
    ],
    height: 0.6,
    weight: 42.1,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 372,
    name: "Shelgon",
    types: [
      "dragon"
    ],
    height: 1.1,
    weight: 110.5,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 373,
    name: "Salamence",
    types: [
      "dragon",
      "flying"
    ],
    height: 1.5,
    weight: 102.6,
    habitat: "rough-terrain",
    evolutionStage: 3
  },
  {
    id: 374,
    name: "Beldum",
    types: [
      "steel",
      "psychic"
    ],
    height: 0.6,
    weight: 95.2,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 375,
    name: "Metang",
    types: [
      "steel",
      "psychic"
    ],
    height: 1.2,
    weight: 202.5,
    habitat: "rough-terrain",
    evolutionStage: 2
  },
  {
    id: 376,
    name: "Metagross",
    types: [
      "steel",
      "psychic"
    ],
    height: 1.6,
    weight: 550,
    habitat: "rough-terrain",
    evolutionStage: 3
  },
  {
    id: 377,
    name: "Regirock",
    types: [
      "rock"
    ],
    height: 1.7,
    weight: 230,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 378,
    name: "Regice",
    types: [
      "ice"
    ],
    height: 1.8,
    weight: 175,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 379,
    name: "Registeel",
    types: [
      "steel"
    ],
    height: 1.9,
    weight: 205,
    habitat: "cave",
    evolutionStage: 1
  },
  {
    id: 380,
    name: "Latias",
    types: [
      "dragon",
      "psychic"
    ],
    height: 1.4,
    weight: 40,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 381,
    name: "Latios",
    types: [
      "dragon",
      "psychic"
    ],
    height: 2,
    weight: 60,
    habitat: "waters-edge",
    evolutionStage: 1
  },
  {
    id: 382,
    name: "Kyogre",
    types: [
      "water"
    ],
    height: 4.5,
    weight: 352,
    habitat: "sea",
    evolutionStage: 1
  },
  {
    id: 383,
    name: "Groudon",
    types: [
      "ground"
    ],
    height: 3.5,
    weight: 950,
    habitat: "rough-terrain",
    evolutionStage: 1
  },
  {
    id: 384,
    name: "Rayquaza",
    types: [
      "dragon",
      "flying"
    ],
    height: 7,
    weight: 206.5,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 385,
    name: "Jirachi",
    types: [
      "steel",
      "psychic"
    ],
    height: 0.3,
    weight: 1.1,
    habitat: "mountain",
    evolutionStage: 1
  },
  {
    id: 386,
    name: "Deoxys-normal",
    types: [
      "psychic"
    ],
    height: 1.7,
    weight: 60.8,
    habitat: "rare",
    evolutionStage: 1
  },
  {
    id: 387,
    name: "Turtwig",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 10.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 388,
    name: "Grotle",
    types: [
      "grass"
    ],
    height: 1.1,
    weight: 97,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 389,
    name: "Torterra",
    types: [
      "grass",
      "ground"
    ],
    height: 2.2,
    weight: 310,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 390,
    name: "Chimchar",
    types: [
      "fire"
    ],
    height: 0.5,
    weight: 6.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 391,
    name: "Monferno",
    types: [
      "fire",
      "fighting"
    ],
    height: 0.9,
    weight: 22,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 392,
    name: "Infernape",
    types: [
      "fire",
      "fighting"
    ],
    height: 1.2,
    weight: 55,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 393,
    name: "Piplup",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 5.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 394,
    name: "Prinplup",
    types: [
      "water"
    ],
    height: 0.8,
    weight: 23,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 395,
    name: "Empoleon",
    types: [
      "water",
      "steel"
    ],
    height: 1.7,
    weight: 84.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 396,
    name: "Starly",
    types: [
      "normal",
      "flying"
    ],
    height: 0.3,
    weight: 2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 397,
    name: "Staravia",
    types: [
      "normal",
      "flying"
    ],
    height: 0.6,
    weight: 15.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 398,
    name: "Staraptor",
    types: [
      "normal",
      "flying"
    ],
    height: 1.2,
    weight: 24.9,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 399,
    name: "Bidoof",
    types: [
      "normal"
    ],
    height: 0.5,
    weight: 20,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 400,
    name: "Bibarel",
    types: [
      "normal",
      "water"
    ],
    height: 1,
    weight: 31.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 401,
    name: "Kricketot",
    types: [
      "bug"
    ],
    height: 0.3,
    weight: 2.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 402,
    name: "Kricketune",
    types: [
      "bug"
    ],
    height: 1,
    weight: 25.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 403,
    name: "Shinx",
    types: [
      "electric"
    ],
    height: 0.5,
    weight: 9.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 404,
    name: "Luxio",
    types: [
      "electric"
    ],
    height: 0.9,
    weight: 30.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 405,
    name: "Luxray",
    types: [
      "electric"
    ],
    height: 1.4,
    weight: 42,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 406,
    name: "Budew",
    types: [
      "grass",
      "poison"
    ],
    height: 0.2,
    weight: 1.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 407,
    name: "Roserade",
    types: [
      "grass",
      "poison"
    ],
    height: 0.9,
    weight: 14.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 408,
    name: "Cranidos",
    types: [
      "rock"
    ],
    height: 0.9,
    weight: 31.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 409,
    name: "Rampardos",
    types: [
      "rock"
    ],
    height: 1.6,
    weight: 102.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 410,
    name: "Shieldon",
    types: [
      "rock",
      "steel"
    ],
    height: 0.5,
    weight: 57,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 411,
    name: "Bastiodon",
    types: [
      "rock",
      "steel"
    ],
    height: 1.3,
    weight: 149.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 412,
    name: "Burmy",
    types: [
      "bug"
    ],
    height: 0.2,
    weight: 3.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 413,
    name: "Wormadam-plant",
    types: [
      "bug",
      "grass"
    ],
    height: 0.5,
    weight: 6.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 414,
    name: "Mothim",
    types: [
      "bug",
      "flying"
    ],
    height: 0.9,
    weight: 23.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 415,
    name: "Combee",
    types: [
      "bug",
      "flying"
    ],
    height: 0.3,
    weight: 5.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 416,
    name: "Vespiquen",
    types: [
      "bug",
      "flying"
    ],
    height: 1.2,
    weight: 38.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 417,
    name: "Pachirisu",
    types: [
      "electric"
    ],
    height: 0.4,
    weight: 3.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 418,
    name: "Buizel",
    types: [
      "water"
    ],
    height: 0.7,
    weight: 29.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 419,
    name: "Floatzel",
    types: [
      "water"
    ],
    height: 1.1,
    weight: 33.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 420,
    name: "Cherubi",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 3.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 421,
    name: "Cherrim",
    types: [
      "grass"
    ],
    height: 0.5,
    weight: 9.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 422,
    name: "Shellos",
    types: [
      "water"
    ],
    height: 0.3,
    weight: 6.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 423,
    name: "Gastrodon",
    types: [
      "water",
      "ground"
    ],
    height: 0.9,
    weight: 29.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 424,
    name: "Ambipom",
    types: [
      "normal"
    ],
    height: 1.2,
    weight: 20.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 425,
    name: "Drifloon",
    types: [
      "ghost",
      "flying"
    ],
    height: 0.4,
    weight: 1.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 426,
    name: "Drifblim",
    types: [
      "ghost",
      "flying"
    ],
    height: 1.2,
    weight: 15,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 427,
    name: "Buneary",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 5.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 428,
    name: "Lopunny",
    types: [
      "normal"
    ],
    height: 1.2,
    weight: 33.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 429,
    name: "Mismagius",
    types: [
      "ghost"
    ],
    height: 0.9,
    weight: 4.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 430,
    name: "Honchkrow",
    types: [
      "dark",
      "flying"
    ],
    height: 0.9,
    weight: 27.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 431,
    name: "Glameow",
    types: [
      "normal"
    ],
    height: 0.5,
    weight: 3.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 432,
    name: "Purugly",
    types: [
      "normal"
    ],
    height: 1,
    weight: 43.8,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 433,
    name: "Chingling",
    types: [
      "psychic"
    ],
    height: 0.2,
    weight: 0.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 434,
    name: "Stunky",
    types: [
      "poison",
      "dark"
    ],
    height: 0.4,
    weight: 19.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 435,
    name: "Skuntank",
    types: [
      "poison",
      "dark"
    ],
    height: 1,
    weight: 38,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 436,
    name: "Bronzor",
    types: [
      "steel",
      "psychic"
    ],
    height: 0.5,
    weight: 60.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 437,
    name: "Bronzong",
    types: [
      "steel",
      "psychic"
    ],
    height: 1.3,
    weight: 187,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 438,
    name: "Bonsly",
    types: [
      "rock"
    ],
    height: 0.5,
    weight: 15,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 439,
    name: "Mime-jr",
    types: [
      "psychic",
      "fairy"
    ],
    height: 0.6,
    weight: 13,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 440,
    name: "Happiny",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 24.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 441,
    name: "Chatot",
    types: [
      "normal",
      "flying"
    ],
    height: 0.5,
    weight: 1.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 442,
    name: "Spiritomb",
    types: [
      "ghost",
      "dark"
    ],
    height: 1,
    weight: 108,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 443,
    name: "Gible",
    types: [
      "dragon",
      "ground"
    ],
    height: 0.7,
    weight: 20.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 444,
    name: "Gabite",
    types: [
      "dragon",
      "ground"
    ],
    height: 1.4,
    weight: 56,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 445,
    name: "Garchomp",
    types: [
      "dragon",
      "ground"
    ],
    height: 1.9,
    weight: 95,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 446,
    name: "Munchlax",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 105,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 447,
    name: "Riolu",
    types: [
      "fighting"
    ],
    height: 0.7,
    weight: 20.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 448,
    name: "Lucario",
    types: [
      "fighting",
      "steel"
    ],
    height: 1.2,
    weight: 54,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 449,
    name: "Hippopotas",
    types: [
      "ground"
    ],
    height: 0.8,
    weight: 49.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 450,
    name: "Hippowdon",
    types: [
      "ground"
    ],
    height: 2,
    weight: 300,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 451,
    name: "Skorupi",
    types: [
      "poison",
      "bug"
    ],
    height: 0.8,
    weight: 12,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 452,
    name: "Drapion",
    types: [
      "poison",
      "dark"
    ],
    height: 1.3,
    weight: 61.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 453,
    name: "Croagunk",
    types: [
      "poison",
      "fighting"
    ],
    height: 0.7,
    weight: 23,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 454,
    name: "Toxicroak",
    types: [
      "poison",
      "fighting"
    ],
    height: 1.3,
    weight: 44.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 455,
    name: "Carnivine",
    types: [
      "grass"
    ],
    height: 1.4,
    weight: 27,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 456,
    name: "Finneon",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 457,
    name: "Lumineon",
    types: [
      "water"
    ],
    height: 1.2,
    weight: 24,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 458,
    name: "Mantyke",
    types: [
      "water",
      "flying"
    ],
    height: 1,
    weight: 65,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 459,
    name: "Snover",
    types: [
      "grass",
      "ice"
    ],
    height: 1,
    weight: 50.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 460,
    name: "Abomasnow",
    types: [
      "grass",
      "ice"
    ],
    height: 2.2,
    weight: 135.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 461,
    name: "Weavile",
    types: [
      "dark",
      "ice"
    ],
    height: 1.1,
    weight: 34,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 462,
    name: "Magnezone",
    types: [
      "electric",
      "steel"
    ],
    height: 1.2,
    weight: 180,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 463,
    name: "Lickilicky",
    types: [
      "normal"
    ],
    height: 1.7,
    weight: 140,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 464,
    name: "Rhyperior",
    types: [
      "ground",
      "rock"
    ],
    height: 2.4,
    weight: 282.8,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 465,
    name: "Tangrowth",
    types: [
      "grass"
    ],
    height: 2,
    weight: 128.6,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 466,
    name: "Electivire",
    types: [
      "electric"
    ],
    height: 1.8,
    weight: 138.6,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 467,
    name: "Magmortar",
    types: [
      "fire"
    ],
    height: 1.6,
    weight: 68,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 468,
    name: "Togekiss",
    types: [
      "fairy",
      "flying"
    ],
    height: 1.5,
    weight: 38,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 469,
    name: "Yanmega",
    types: [
      "bug",
      "flying"
    ],
    height: 1.9,
    weight: 51.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 470,
    name: "Leafeon",
    types: [
      "grass"
    ],
    height: 1,
    weight: 25.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 471,
    name: "Glaceon",
    types: [
      "ice"
    ],
    height: 0.8,
    weight: 25.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 472,
    name: "Gliscor",
    types: [
      "ground",
      "flying"
    ],
    height: 2,
    weight: 42.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 473,
    name: "Mamoswine",
    types: [
      "ice",
      "ground"
    ],
    height: 2.5,
    weight: 291,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 474,
    name: "Porygon-z",
    types: [
      "normal"
    ],
    height: 0.9,
    weight: 34,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 475,
    name: "Gallade",
    types: [
      "psychic",
      "fighting"
    ],
    height: 1.6,
    weight: 52,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 476,
    name: "Probopass",
    types: [
      "rock",
      "steel"
    ],
    height: 1.4,
    weight: 340,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 477,
    name: "Dusknoir",
    types: [
      "ghost"
    ],
    height: 2.2,
    weight: 106.6,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 478,
    name: "Froslass",
    types: [
      "ice",
      "ghost"
    ],
    height: 1.3,
    weight: 26.6,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 479,
    name: "Rotom",
    types: [
      "electric",
      "ghost"
    ],
    height: 0.3,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 480,
    name: "Uxie",
    types: [
      "psychic"
    ],
    height: 0.3,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 481,
    name: "Mesprit",
    types: [
      "psychic"
    ],
    height: 0.3,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 482,
    name: "Azelf",
    types: [
      "psychic"
    ],
    height: 0.3,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 483,
    name: "Dialga",
    types: [
      "steel",
      "dragon"
    ],
    height: 5.4,
    weight: 683,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 484,
    name: "Palkia",
    types: [
      "water",
      "dragon"
    ],
    height: 4.2,
    weight: 336,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 485,
    name: "Heatran",
    types: [
      "fire",
      "steel"
    ],
    height: 1.7,
    weight: 430,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 486,
    name: "Regigigas",
    types: [
      "normal"
    ],
    height: 3.7,
    weight: 420,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 487,
    name: "Giratina-altered",
    types: [
      "ghost",
      "dragon"
    ],
    height: 4.5,
    weight: 750,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 488,
    name: "Cresselia",
    types: [
      "psychic"
    ],
    height: 1.5,
    weight: 85.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 489,
    name: "Phione",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 3.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 490,
    name: "Manaphy",
    types: [
      "water"
    ],
    height: 0.3,
    weight: 1.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 491,
    name: "Darkrai",
    types: [
      "dark"
    ],
    height: 1.5,
    weight: 50.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 492,
    name: "Shaymin-land",
    types: [
      "grass"
    ],
    height: 0.2,
    weight: 2.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 493,
    name: "Arceus",
    types: [
      "normal"
    ],
    height: 3.2,
    weight: 320,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 494,
    name: "Victini",
    types: [
      "psychic",
      "fire"
    ],
    height: 0.4,
    weight: 4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 495,
    name: "Snivy",
    types: [
      "grass"
    ],
    height: 0.6,
    weight: 8.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 496,
    name: "Servine",
    types: [
      "grass"
    ],
    height: 0.8,
    weight: 16,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 497,
    name: "Serperior",
    types: [
      "grass"
    ],
    height: 3.3,
    weight: 63,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 498,
    name: "Tepig",
    types: [
      "fire"
    ],
    height: 0.5,
    weight: 9.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 499,
    name: "Pignite",
    types: [
      "fire",
      "fighting"
    ],
    height: 1,
    weight: 55.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 500,
    name: "Emboar",
    types: [
      "fire",
      "fighting"
    ],
    height: 1.6,
    weight: 150,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 501,
    name: "Oshawott",
    types: [
      "water"
    ],
    height: 0.5,
    weight: 5.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 502,
    name: "Dewott",
    types: [
      "water"
    ],
    height: 0.8,
    weight: 24.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 503,
    name: "Samurott",
    types: [
      "water"
    ],
    height: 1.5,
    weight: 94.6,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 504,
    name: "Patrat",
    types: [
      "normal"
    ],
    height: 0.5,
    weight: 11.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 505,
    name: "Watchog",
    types: [
      "normal"
    ],
    height: 1.1,
    weight: 27,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 506,
    name: "Lillipup",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 4.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 507,
    name: "Herdier",
    types: [
      "normal"
    ],
    height: 0.9,
    weight: 14.7,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 508,
    name: "Stoutland",
    types: [
      "normal"
    ],
    height: 1.2,
    weight: 61,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 509,
    name: "Purrloin",
    types: [
      "dark"
    ],
    height: 0.4,
    weight: 10.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 510,
    name: "Liepard",
    types: [
      "dark"
    ],
    height: 1.1,
    weight: 37.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 511,
    name: "Pansage",
    types: [
      "grass"
    ],
    height: 0.6,
    weight: 10.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 512,
    name: "Simisage",
    types: [
      "grass"
    ],
    height: 1.1,
    weight: 30.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 513,
    name: "Pansear",
    types: [
      "fire"
    ],
    height: 0.6,
    weight: 11,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 514,
    name: "Simisear",
    types: [
      "fire"
    ],
    height: 1,
    weight: 28,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 515,
    name: "Panpour",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 13.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 516,
    name: "Simipour",
    types: [
      "water"
    ],
    height: 1,
    weight: 29,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 517,
    name: "Munna",
    types: [
      "psychic"
    ],
    height: 0.6,
    weight: 23.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 518,
    name: "Musharna",
    types: [
      "psychic"
    ],
    height: 1.1,
    weight: 60.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 519,
    name: "Pidove",
    types: [
      "normal",
      "flying"
    ],
    height: 0.3,
    weight: 2.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 520,
    name: "Tranquill",
    types: [
      "normal",
      "flying"
    ],
    height: 0.6,
    weight: 15,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 521,
    name: "Unfezant",
    types: [
      "normal",
      "flying"
    ],
    height: 1.2,
    weight: 29,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 522,
    name: "Blitzle",
    types: [
      "electric"
    ],
    height: 0.8,
    weight: 29.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 523,
    name: "Zebstrika",
    types: [
      "electric"
    ],
    height: 1.6,
    weight: 79.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 524,
    name: "Roggenrola",
    types: [
      "rock"
    ],
    height: 0.4,
    weight: 18,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 525,
    name: "Boldore",
    types: [
      "rock"
    ],
    height: 0.9,
    weight: 102,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 526,
    name: "Gigalith",
    types: [
      "rock"
    ],
    height: 1.7,
    weight: 260,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 527,
    name: "Woobat",
    types: [
      "psychic",
      "flying"
    ],
    height: 0.4,
    weight: 2.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 528,
    name: "Swoobat",
    types: [
      "psychic",
      "flying"
    ],
    height: 0.9,
    weight: 10.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 529,
    name: "Drilbur",
    types: [
      "ground"
    ],
    height: 0.3,
    weight: 8.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 530,
    name: "Excadrill",
    types: [
      "ground",
      "steel"
    ],
    height: 0.7,
    weight: 40.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 531,
    name: "Audino",
    types: [
      "normal"
    ],
    height: 1.1,
    weight: 31,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 532,
    name: "Timburr",
    types: [
      "fighting"
    ],
    height: 0.6,
    weight: 12.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 533,
    name: "Gurdurr",
    types: [
      "fighting"
    ],
    height: 1.2,
    weight: 40,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 534,
    name: "Conkeldurr",
    types: [
      "fighting"
    ],
    height: 1.4,
    weight: 87,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 535,
    name: "Tympole",
    types: [
      "water"
    ],
    height: 0.5,
    weight: 4.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 536,
    name: "Palpitoad",
    types: [
      "water",
      "ground"
    ],
    height: 0.8,
    weight: 17,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 537,
    name: "Seismitoad",
    types: [
      "water",
      "ground"
    ],
    height: 1.5,
    weight: 62,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 538,
    name: "Throh",
    types: [
      "fighting"
    ],
    height: 1.3,
    weight: 55.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 539,
    name: "Sawk",
    types: [
      "fighting"
    ],
    height: 1.4,
    weight: 51,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 540,
    name: "Sewaddle",
    types: [
      "bug",
      "grass"
    ],
    height: 0.3,
    weight: 2.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 541,
    name: "Swadloon",
    types: [
      "bug",
      "grass"
    ],
    height: 0.5,
    weight: 7.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 542,
    name: "Leavanny",
    types: [
      "bug",
      "grass"
    ],
    height: 1.2,
    weight: 20.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 543,
    name: "Venipede",
    types: [
      "bug",
      "poison"
    ],
    height: 0.4,
    weight: 5.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 544,
    name: "Whirlipede",
    types: [
      "bug",
      "poison"
    ],
    height: 1.2,
    weight: 58.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 545,
    name: "Scolipede",
    types: [
      "bug",
      "poison"
    ],
    height: 2.5,
    weight: 200.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 546,
    name: "Cottonee",
    types: [
      "grass",
      "fairy"
    ],
    height: 0.3,
    weight: 0.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 547,
    name: "Whimsicott",
    types: [
      "grass",
      "fairy"
    ],
    height: 0.7,
    weight: 6.6,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 548,
    name: "Petilil",
    types: [
      "grass"
    ],
    height: 0.5,
    weight: 6.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 549,
    name: "Lilligant",
    types: [
      "grass"
    ],
    height: 1.1,
    weight: 16.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 550,
    name: "Basculin-red-striped",
    types: [
      "water"
    ],
    height: 1,
    weight: 18,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 551,
    name: "Sandile",
    types: [
      "ground",
      "dark"
    ],
    height: 0.7,
    weight: 15.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 552,
    name: "Krokorok",
    types: [
      "ground",
      "dark"
    ],
    height: 1,
    weight: 33.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 553,
    name: "Krookodile",
    types: [
      "ground",
      "dark"
    ],
    height: 1.5,
    weight: 96.3,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 554,
    name: "Darumaka",
    types: [
      "fire"
    ],
    height: 0.6,
    weight: 37.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 555,
    name: "Darmanitan-standard",
    types: [
      "fire"
    ],
    height: 1.3,
    weight: 92.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 556,
    name: "Maractus",
    types: [
      "grass"
    ],
    height: 1,
    weight: 28,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 557,
    name: "Dwebble",
    types: [
      "bug",
      "rock"
    ],
    height: 0.3,
    weight: 14.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 558,
    name: "Crustle",
    types: [
      "bug",
      "rock"
    ],
    height: 1.4,
    weight: 200,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 559,
    name: "Scraggy",
    types: [
      "dark",
      "fighting"
    ],
    height: 0.6,
    weight: 11.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 560,
    name: "Scrafty",
    types: [
      "dark",
      "fighting"
    ],
    height: 1.1,
    weight: 30,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 561,
    name: "Sigilyph",
    types: [
      "psychic",
      "flying"
    ],
    height: 1.4,
    weight: 14,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 562,
    name: "Yamask",
    types: [
      "ghost"
    ],
    height: 0.5,
    weight: 1.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 563,
    name: "Cofagrigus",
    types: [
      "ghost"
    ],
    height: 1.7,
    weight: 76.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 564,
    name: "Tirtouga",
    types: [
      "water",
      "rock"
    ],
    height: 0.7,
    weight: 16.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 565,
    name: "Carracosta",
    types: [
      "water",
      "rock"
    ],
    height: 1.2,
    weight: 81,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 566,
    name: "Archen",
    types: [
      "rock",
      "flying"
    ],
    height: 0.5,
    weight: 9.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 567,
    name: "Archeops",
    types: [
      "rock",
      "flying"
    ],
    height: 1.4,
    weight: 32,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 568,
    name: "Trubbish",
    types: [
      "poison"
    ],
    height: 0.6,
    weight: 31,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 569,
    name: "Garbodor",
    types: [
      "poison"
    ],
    height: 1.9,
    weight: 107.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 570,
    name: "Zorua",
    types: [
      "dark"
    ],
    height: 0.7,
    weight: 12.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 571,
    name: "Zoroark",
    types: [
      "dark"
    ],
    height: 1.6,
    weight: 81.1,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 572,
    name: "Minccino",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 5.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 573,
    name: "Cinccino",
    types: [
      "normal"
    ],
    height: 0.5,
    weight: 7.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 574,
    name: "Gothita",
    types: [
      "psychic"
    ],
    height: 0.4,
    weight: 5.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 575,
    name: "Gothorita",
    types: [
      "psychic"
    ],
    height: 0.7,
    weight: 18,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 576,
    name: "Gothitelle",
    types: [
      "psychic"
    ],
    height: 1.5,
    weight: 44,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 577,
    name: "Solosis",
    types: [
      "psychic"
    ],
    height: 0.3,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 578,
    name: "Duosion",
    types: [
      "psychic"
    ],
    height: 0.6,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 579,
    name: "Reuniclus",
    types: [
      "psychic"
    ],
    height: 1,
    weight: 20.1,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 580,
    name: "Ducklett",
    types: [
      "water",
      "flying"
    ],
    height: 0.5,
    weight: 5.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 581,
    name: "Swanna",
    types: [
      "water",
      "flying"
    ],
    height: 1.3,
    weight: 24.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 582,
    name: "Vanillite",
    types: [
      "ice"
    ],
    height: 0.4,
    weight: 5.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 583,
    name: "Vanillish",
    types: [
      "ice"
    ],
    height: 1.1,
    weight: 41,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 584,
    name: "Vanilluxe",
    types: [
      "ice"
    ],
    height: 1.3,
    weight: 57.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 585,
    name: "Deerling",
    types: [
      "normal",
      "grass"
    ],
    height: 0.6,
    weight: 19.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 586,
    name: "Sawsbuck",
    types: [
      "normal",
      "grass"
    ],
    height: 1.9,
    weight: 92.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 587,
    name: "Emolga",
    types: [
      "electric",
      "flying"
    ],
    height: 0.4,
    weight: 5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 588,
    name: "Karrablast",
    types: [
      "bug"
    ],
    height: 0.5,
    weight: 5.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 589,
    name: "Escavalier",
    types: [
      "bug",
      "steel"
    ],
    height: 1,
    weight: 33,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 590,
    name: "Foongus",
    types: [
      "grass",
      "poison"
    ],
    height: 0.2,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 591,
    name: "Amoonguss",
    types: [
      "grass",
      "poison"
    ],
    height: 0.6,
    weight: 10.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 592,
    name: "Frillish-male",
    types: [
      "water",
      "ghost"
    ],
    height: 1.2,
    weight: 33,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 593,
    name: "Jellicent-male",
    types: [
      "water",
      "ghost"
    ],
    height: 2.2,
    weight: 135,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 594,
    name: "Alomomola",
    types: [
      "water"
    ],
    height: 1.2,
    weight: 31.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 595,
    name: "Joltik",
    types: [
      "bug",
      "electric"
    ],
    height: 0.1,
    weight: 0.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 596,
    name: "Galvantula",
    types: [
      "bug",
      "electric"
    ],
    height: 0.8,
    weight: 14.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 597,
    name: "Ferroseed",
    types: [
      "grass",
      "steel"
    ],
    height: 0.6,
    weight: 18.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 598,
    name: "Ferrothorn",
    types: [
      "grass",
      "steel"
    ],
    height: 1,
    weight: 110,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 599,
    name: "Klink",
    types: [
      "steel"
    ],
    height: 0.3,
    weight: 21,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 600,
    name: "Klang",
    types: [
      "steel"
    ],
    height: 0.6,
    weight: 51,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 601,
    name: "Klinklang",
    types: [
      "steel"
    ],
    height: 0.6,
    weight: 81,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 602,
    name: "Tynamo",
    types: [
      "electric"
    ],
    height: 0.2,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 603,
    name: "Eelektrik",
    types: [
      "electric"
    ],
    height: 1.2,
    weight: 22,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 604,
    name: "Eelektross",
    types: [
      "electric"
    ],
    height: 2.1,
    weight: 80.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 605,
    name: "Elgyem",
    types: [
      "psychic"
    ],
    height: 0.5,
    weight: 9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 606,
    name: "Beheeyem",
    types: [
      "psychic"
    ],
    height: 1,
    weight: 34.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 607,
    name: "Litwick",
    types: [
      "ghost",
      "fire"
    ],
    height: 0.3,
    weight: 3.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 608,
    name: "Lampent",
    types: [
      "ghost",
      "fire"
    ],
    height: 0.6,
    weight: 13,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 609,
    name: "Chandelure",
    types: [
      "ghost",
      "fire"
    ],
    height: 1,
    weight: 34.3,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 610,
    name: "Axew",
    types: [
      "dragon"
    ],
    height: 0.6,
    weight: 18,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 611,
    name: "Fraxure",
    types: [
      "dragon"
    ],
    height: 1,
    weight: 36,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 612,
    name: "Haxorus",
    types: [
      "dragon"
    ],
    height: 1.8,
    weight: 105.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 613,
    name: "Cubchoo",
    types: [
      "ice"
    ],
    height: 0.5,
    weight: 8.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 614,
    name: "Beartic",
    types: [
      "ice"
    ],
    height: 2.6,
    weight: 260,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 615,
    name: "Cryogonal",
    types: [
      "ice"
    ],
    height: 1.1,
    weight: 148,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 616,
    name: "Shelmet",
    types: [
      "bug"
    ],
    height: 0.4,
    weight: 7.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 617,
    name: "Accelgor",
    types: [
      "bug"
    ],
    height: 0.8,
    weight: 25.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 618,
    name: "Stunfisk",
    types: [
      "ground",
      "electric"
    ],
    height: 0.7,
    weight: 11,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 619,
    name: "Mienfoo",
    types: [
      "fighting"
    ],
    height: 0.9,
    weight: 20,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 620,
    name: "Mienshao",
    types: [
      "fighting"
    ],
    height: 1.4,
    weight: 35.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 621,
    name: "Druddigon",
    types: [
      "dragon"
    ],
    height: 1.6,
    weight: 139,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 622,
    name: "Golett",
    types: [
      "ground",
      "ghost"
    ],
    height: 1,
    weight: 92,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 623,
    name: "Golurk",
    types: [
      "ground",
      "ghost"
    ],
    height: 2.8,
    weight: 330,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 624,
    name: "Pawniard",
    types: [
      "dark",
      "steel"
    ],
    height: 0.5,
    weight: 10.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 625,
    name: "Bisharp",
    types: [
      "dark",
      "steel"
    ],
    height: 1.6,
    weight: 70,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 626,
    name: "Bouffalant",
    types: [
      "normal"
    ],
    height: 1.6,
    weight: 94.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 627,
    name: "Rufflet",
    types: [
      "normal",
      "flying"
    ],
    height: 0.5,
    weight: 10.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 628,
    name: "Braviary",
    types: [
      "normal",
      "flying"
    ],
    height: 1.5,
    weight: 41,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 629,
    name: "Vullaby",
    types: [
      "dark",
      "flying"
    ],
    height: 0.5,
    weight: 9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 630,
    name: "Mandibuzz",
    types: [
      "dark",
      "flying"
    ],
    height: 1.2,
    weight: 39.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 631,
    name: "Heatmor",
    types: [
      "fire"
    ],
    height: 1.4,
    weight: 58,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 632,
    name: "Durant",
    types: [
      "bug",
      "steel"
    ],
    height: 0.3,
    weight: 33,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 633,
    name: "Deino",
    types: [
      "dark",
      "dragon"
    ],
    height: 0.8,
    weight: 17.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 634,
    name: "Zweilous",
    types: [
      "dark",
      "dragon"
    ],
    height: 1.4,
    weight: 50,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 635,
    name: "Hydreigon",
    types: [
      "dark",
      "dragon"
    ],
    height: 1.8,
    weight: 160,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 636,
    name: "Larvesta",
    types: [
      "bug",
      "fire"
    ],
    height: 1.1,
    weight: 28.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 637,
    name: "Volcarona",
    types: [
      "bug",
      "fire"
    ],
    height: 1.6,
    weight: 46,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 638,
    name: "Cobalion",
    types: [
      "steel",
      "fighting"
    ],
    height: 2.1,
    weight: 250,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 639,
    name: "Terrakion",
    types: [
      "rock",
      "fighting"
    ],
    height: 1.9,
    weight: 260,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 640,
    name: "Virizion",
    types: [
      "grass",
      "fighting"
    ],
    height: 2,
    weight: 200,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 641,
    name: "Tornadus-incarnate",
    types: [
      "flying"
    ],
    height: 1.5,
    weight: 63,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 642,
    name: "Thundurus-incarnate",
    types: [
      "electric",
      "flying"
    ],
    height: 1.5,
    weight: 61,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 643,
    name: "Reshiram",
    types: [
      "dragon",
      "fire"
    ],
    height: 3.2,
    weight: 330,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 644,
    name: "Zekrom",
    types: [
      "dragon",
      "electric"
    ],
    height: 2.9,
    weight: 345,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 645,
    name: "Landorus-incarnate",
    types: [
      "ground",
      "flying"
    ],
    height: 1.5,
    weight: 68,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 646,
    name: "Kyurem",
    types: [
      "dragon",
      "ice"
    ],
    height: 3,
    weight: 325,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 647,
    name: "Keldeo-ordinary",
    types: [
      "water",
      "fighting"
    ],
    height: 1.4,
    weight: 48.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 648,
    name: "Meloetta-aria",
    types: [
      "normal",
      "psychic"
    ],
    height: 0.6,
    weight: 6.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 649,
    name: "Genesect",
    types: [
      "bug",
      "steel"
    ],
    height: 1.5,
    weight: 82.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 650,
    name: "Chespin",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 651,
    name: "Quilladin",
    types: [
      "grass"
    ],
    height: 0.7,
    weight: 29,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 652,
    name: "Chesnaught",
    types: [
      "grass",
      "fighting"
    ],
    height: 1.6,
    weight: 90,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 653,
    name: "Fennekin",
    types: [
      "fire"
    ],
    height: 0.4,
    weight: 9.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 654,
    name: "Braixen",
    types: [
      "fire"
    ],
    height: 1,
    weight: 14.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 655,
    name: "Delphox",
    types: [
      "fire",
      "psychic"
    ],
    height: 1.5,
    weight: 39,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 656,
    name: "Froakie",
    types: [
      "water"
    ],
    height: 0.3,
    weight: 7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 657,
    name: "Frogadier",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 10.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 658,
    name: "Greninja",
    types: [
      "water",
      "dark"
    ],
    height: 1.5,
    weight: 40,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 659,
    name: "Bunnelby",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 660,
    name: "Diggersby",
    types: [
      "normal",
      "ground"
    ],
    height: 1,
    weight: 42.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 661,
    name: "Fletchling",
    types: [
      "normal",
      "flying"
    ],
    height: 0.3,
    weight: 1.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 662,
    name: "Fletchinder",
    types: [
      "fire",
      "flying"
    ],
    height: 0.7,
    weight: 16,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 663,
    name: "Talonflame",
    types: [
      "fire",
      "flying"
    ],
    height: 1.2,
    weight: 24.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 664,
    name: "Scatterbug",
    types: [
      "bug"
    ],
    height: 0.3,
    weight: 2.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 665,
    name: "Spewpa",
    types: [
      "bug"
    ],
    height: 0.3,
    weight: 8.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 666,
    name: "Vivillon",
    types: [
      "bug",
      "flying"
    ],
    height: 1.2,
    weight: 17,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 667,
    name: "Litleo",
    types: [
      "fire",
      "normal"
    ],
    height: 0.6,
    weight: 13.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 668,
    name: "Pyroar-male",
    types: [
      "fire",
      "normal"
    ],
    height: 1.5,
    weight: 81.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 669,
    name: "Flabebe",
    types: [
      "fairy"
    ],
    height: 0.1,
    weight: 0.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 670,
    name: "Floette",
    types: [
      "fairy"
    ],
    height: 0.2,
    weight: 0.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 671,
    name: "Florges",
    types: [
      "fairy"
    ],
    height: 1.1,
    weight: 10,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 672,
    name: "Skiddo",
    types: [
      "grass"
    ],
    height: 0.9,
    weight: 31,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 673,
    name: "Gogoat",
    types: [
      "grass"
    ],
    height: 1.7,
    weight: 91,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 674,
    name: "Pancham",
    types: [
      "fighting"
    ],
    height: 0.6,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 675,
    name: "Pangoro",
    types: [
      "fighting",
      "dark"
    ],
    height: 2.1,
    weight: 136,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 676,
    name: "Furfrou",
    types: [
      "normal"
    ],
    height: 1.2,
    weight: 28,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 677,
    name: "Espurr",
    types: [
      "psychic"
    ],
    height: 0.3,
    weight: 3.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 678,
    name: "Meowstic-male",
    types: [
      "psychic"
    ],
    height: 0.6,
    weight: 8.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 679,
    name: "Honedge",
    types: [
      "steel",
      "ghost"
    ],
    height: 0.8,
    weight: 2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 680,
    name: "Doublade",
    types: [
      "steel",
      "ghost"
    ],
    height: 0.8,
    weight: 4.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 681,
    name: "Aegislash-shield",
    types: [
      "steel",
      "ghost"
    ],
    height: 1.7,
    weight: 53,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 682,
    name: "Spritzee",
    types: [
      "fairy"
    ],
    height: 0.2,
    weight: 0.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 683,
    name: "Aromatisse",
    types: [
      "fairy"
    ],
    height: 0.8,
    weight: 15.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 684,
    name: "Swirlix",
    types: [
      "fairy"
    ],
    height: 0.4,
    weight: 3.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 685,
    name: "Slurpuff",
    types: [
      "fairy"
    ],
    height: 0.8,
    weight: 5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 686,
    name: "Inkay",
    types: [
      "dark",
      "psychic"
    ],
    height: 0.4,
    weight: 3.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 687,
    name: "Malamar",
    types: [
      "dark",
      "psychic"
    ],
    height: 1.5,
    weight: 47,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 688,
    name: "Binacle",
    types: [
      "rock",
      "water"
    ],
    height: 0.5,
    weight: 31,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 689,
    name: "Barbaracle",
    types: [
      "rock",
      "water"
    ],
    height: 1.3,
    weight: 96,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 690,
    name: "Skrelp",
    types: [
      "poison",
      "water"
    ],
    height: 0.5,
    weight: 7.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 691,
    name: "Dragalge",
    types: [
      "poison",
      "dragon"
    ],
    height: 1.8,
    weight: 81.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 692,
    name: "Clauncher",
    types: [
      "water"
    ],
    height: 0.5,
    weight: 8.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 693,
    name: "Clawitzer",
    types: [
      "water"
    ],
    height: 1.3,
    weight: 35.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 694,
    name: "Helioptile",
    types: [
      "electric",
      "normal"
    ],
    height: 0.5,
    weight: 6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 695,
    name: "Heliolisk",
    types: [
      "electric",
      "normal"
    ],
    height: 1,
    weight: 21,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 696,
    name: "Tyrunt",
    types: [
      "rock",
      "dragon"
    ],
    height: 0.8,
    weight: 26,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 697,
    name: "Tyrantrum",
    types: [
      "rock",
      "dragon"
    ],
    height: 2.5,
    weight: 270,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 698,
    name: "Amaura",
    types: [
      "rock",
      "ice"
    ],
    height: 1.3,
    weight: 25.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 699,
    name: "Aurorus",
    types: [
      "rock",
      "ice"
    ],
    height: 2.7,
    weight: 225,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 700,
    name: "Sylveon",
    types: [
      "fairy"
    ],
    height: 1,
    weight: 23.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 701,
    name: "Hawlucha",
    types: [
      "fighting",
      "flying"
    ],
    height: 0.8,
    weight: 21.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 702,
    name: "Dedenne",
    types: [
      "electric",
      "fairy"
    ],
    height: 0.2,
    weight: 2.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 703,
    name: "Carbink",
    types: [
      "rock",
      "fairy"
    ],
    height: 0.3,
    weight: 5.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 704,
    name: "Goomy",
    types: [
      "dragon"
    ],
    height: 0.3,
    weight: 2.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 705,
    name: "Sliggoo",
    types: [
      "dragon"
    ],
    height: 0.8,
    weight: 17.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 706,
    name: "Goodra",
    types: [
      "dragon"
    ],
    height: 2,
    weight: 150.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 707,
    name: "Klefki",
    types: [
      "steel",
      "fairy"
    ],
    height: 0.2,
    weight: 3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 708,
    name: "Phantump",
    types: [
      "ghost",
      "grass"
    ],
    height: 0.4,
    weight: 7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 709,
    name: "Trevenant",
    types: [
      "ghost",
      "grass"
    ],
    height: 1.5,
    weight: 71,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 710,
    name: "Pumpkaboo-average",
    types: [
      "ghost",
      "grass"
    ],
    height: 0.4,
    weight: 5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 711,
    name: "Gourgeist-average",
    types: [
      "ghost",
      "grass"
    ],
    height: 0.9,
    weight: 12.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 712,
    name: "Bergmite",
    types: [
      "ice"
    ],
    height: 1,
    weight: 99.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 713,
    name: "Avalugg",
    types: [
      "ice"
    ],
    height: 2,
    weight: 505,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 714,
    name: "Noibat",
    types: [
      "flying",
      "dragon"
    ],
    height: 0.5,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 715,
    name: "Noivern",
    types: [
      "flying",
      "dragon"
    ],
    height: 1.5,
    weight: 85,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 716,
    name: "Xerneas",
    types: [
      "fairy"
    ],
    height: 3,
    weight: 215,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 717,
    name: "Yveltal",
    types: [
      "dark",
      "flying"
    ],
    height: 5.8,
    weight: 203,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 718,
    name: "Zygarde-50",
    types: [
      "dragon",
      "ground"
    ],
    height: 5,
    weight: 305,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 719,
    name: "Diancie",
    types: [
      "rock",
      "fairy"
    ],
    height: 0.7,
    weight: 8.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 720,
    name: "Hoopa",
    types: [
      "psychic",
      "ghost"
    ],
    height: 0.5,
    weight: 9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 721,
    name: "Volcanion",
    types: [
      "fire",
      "water"
    ],
    height: 1.7,
    weight: 195,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 722,
    name: "Rowlet",
    types: [
      "grass",
      "flying"
    ],
    height: 0.3,
    weight: 1.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 723,
    name: "Dartrix",
    types: [
      "grass",
      "flying"
    ],
    height: 0.7,
    weight: 16,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 724,
    name: "Decidueye",
    types: [
      "grass",
      "ghost"
    ],
    height: 1.6,
    weight: 36.6,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 725,
    name: "Litten",
    types: [
      "fire"
    ],
    height: 0.4,
    weight: 4.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 726,
    name: "Torracat",
    types: [
      "fire"
    ],
    height: 0.7,
    weight: 25,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 727,
    name: "Incineroar",
    types: [
      "fire",
      "dark"
    ],
    height: 1.8,
    weight: 83,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 728,
    name: "Popplio",
    types: [
      "water"
    ],
    height: 0.4,
    weight: 7.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 729,
    name: "Brionne",
    types: [
      "water"
    ],
    height: 0.6,
    weight: 17.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 730,
    name: "Primarina",
    types: [
      "water",
      "fairy"
    ],
    height: 1.8,
    weight: 44,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 731,
    name: "Pikipek",
    types: [
      "normal",
      "flying"
    ],
    height: 0.3,
    weight: 1.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 732,
    name: "Trumbeak",
    types: [
      "normal",
      "flying"
    ],
    height: 0.6,
    weight: 14.8,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 733,
    name: "Toucannon",
    types: [
      "normal",
      "flying"
    ],
    height: 1.1,
    weight: 26,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 734,
    name: "Yungoos",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 735,
    name: "Gumshoos",
    types: [
      "normal"
    ],
    height: 0.7,
    weight: 14.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 736,
    name: "Grubbin",
    types: [
      "bug"
    ],
    height: 0.4,
    weight: 4.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 737,
    name: "Charjabug",
    types: [
      "bug",
      "electric"
    ],
    height: 0.5,
    weight: 10.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 738,
    name: "Vikavolt",
    types: [
      "bug",
      "electric"
    ],
    height: 1.5,
    weight: 45,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 739,
    name: "Crabrawler",
    types: [
      "fighting"
    ],
    height: 0.6,
    weight: 7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 740,
    name: "Crabominable",
    types: [
      "fighting",
      "ice"
    ],
    height: 1.7,
    weight: 180,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 741,
    name: "Oricorio-baile",
    types: [
      "fire",
      "flying"
    ],
    height: 0.6,
    weight: 3.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 742,
    name: "Cutiefly",
    types: [
      "bug",
      "fairy"
    ],
    height: 0.1,
    weight: 0.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 743,
    name: "Ribombee",
    types: [
      "bug",
      "fairy"
    ],
    height: 0.2,
    weight: 0.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 744,
    name: "Rockruff",
    types: [
      "rock"
    ],
    height: 0.5,
    weight: 9.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 745,
    name: "Lycanroc-midday",
    types: [
      "rock"
    ],
    height: 0.8,
    weight: 25,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 746,
    name: "Wishiwashi-solo",
    types: [
      "water"
    ],
    height: 0.2,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 747,
    name: "Mareanie",
    types: [
      "poison",
      "water"
    ],
    height: 0.4,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 748,
    name: "Toxapex",
    types: [
      "poison",
      "water"
    ],
    height: 0.7,
    weight: 14.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 749,
    name: "Mudbray",
    types: [
      "ground"
    ],
    height: 1,
    weight: 110,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 750,
    name: "Mudsdale",
    types: [
      "ground"
    ],
    height: 2.5,
    weight: 920,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 751,
    name: "Dewpider",
    types: [
      "water",
      "bug"
    ],
    height: 0.3,
    weight: 4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 752,
    name: "Araquanid",
    types: [
      "water",
      "bug"
    ],
    height: 1.8,
    weight: 82,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 753,
    name: "Fomantis",
    types: [
      "grass"
    ],
    height: 0.3,
    weight: 1.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 754,
    name: "Lurantis",
    types: [
      "grass"
    ],
    height: 0.9,
    weight: 18.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 755,
    name: "Morelull",
    types: [
      "grass",
      "fairy"
    ],
    height: 0.2,
    weight: 1.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 756,
    name: "Shiinotic",
    types: [
      "grass",
      "fairy"
    ],
    height: 1,
    weight: 11.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 757,
    name: "Salandit",
    types: [
      "poison",
      "fire"
    ],
    height: 0.6,
    weight: 4.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 758,
    name: "Salazzle",
    types: [
      "poison",
      "fire"
    ],
    height: 1.2,
    weight: 22.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 759,
    name: "Stufful",
    types: [
      "normal",
      "fighting"
    ],
    height: 0.5,
    weight: 6.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 760,
    name: "Bewear",
    types: [
      "normal",
      "fighting"
    ],
    height: 2.1,
    weight: 135,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 761,
    name: "Bounsweet",
    types: [
      "grass"
    ],
    height: 0.3,
    weight: 3.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 762,
    name: "Steenee",
    types: [
      "grass"
    ],
    height: 0.7,
    weight: 8.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 763,
    name: "Tsareena",
    types: [
      "grass"
    ],
    height: 1.2,
    weight: 21.4,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 764,
    name: "Comfey",
    types: [
      "fairy"
    ],
    height: 0.1,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 765,
    name: "Oranguru",
    types: [
      "normal",
      "psychic"
    ],
    height: 1.5,
    weight: 76,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 766,
    name: "Passimian",
    types: [
      "fighting"
    ],
    height: 2,
    weight: 82.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 767,
    name: "Wimpod",
    types: [
      "bug",
      "water"
    ],
    height: 0.5,
    weight: 12,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 768,
    name: "Golisopod",
    types: [
      "bug",
      "water"
    ],
    height: 2,
    weight: 108,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 769,
    name: "Sandygast",
    types: [
      "ghost",
      "ground"
    ],
    height: 0.5,
    weight: 70,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 770,
    name: "Palossand",
    types: [
      "ghost",
      "ground"
    ],
    height: 1.3,
    weight: 250,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 771,
    name: "Pyukumuku",
    types: [
      "water"
    ],
    height: 0.3,
    weight: 1.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 772,
    name: "Type-null",
    types: [
      "normal"
    ],
    height: 1.9,
    weight: 120.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 773,
    name: "Silvally",
    types: [
      "normal"
    ],
    height: 2.3,
    weight: 100.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 774,
    name: "Minior-red-meteor",
    types: [
      "rock",
      "flying"
    ],
    height: 0.3,
    weight: 40,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 775,
    name: "Komala",
    types: [
      "normal"
    ],
    height: 0.4,
    weight: 19.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 776,
    name: "Turtonator",
    types: [
      "fire",
      "dragon"
    ],
    height: 2,
    weight: 212,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 777,
    name: "Togedemaru",
    types: [
      "electric",
      "steel"
    ],
    height: 0.3,
    weight: 3.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 778,
    name: "Mimikyu-disguised",
    types: [
      "ghost",
      "fairy"
    ],
    height: 0.2,
    weight: 0.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 779,
    name: "Bruxish",
    types: [
      "water",
      "psychic"
    ],
    height: 0.9,
    weight: 19,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 780,
    name: "Drampa",
    types: [
      "normal",
      "dragon"
    ],
    height: 3,
    weight: 185,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 781,
    name: "Dhelmise",
    types: [
      "ghost",
      "grass"
    ],
    height: 3.9,
    weight: 210,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 782,
    name: "Jangmo-o",
    types: [
      "dragon"
    ],
    height: 0.6,
    weight: 29.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 783,
    name: "Hakamo-o",
    types: [
      "dragon",
      "fighting"
    ],
    height: 1.2,
    weight: 47,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 784,
    name: "Kommo-o",
    types: [
      "dragon",
      "fighting"
    ],
    height: 1.6,
    weight: 78.2,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 785,
    name: "Tapu-koko",
    types: [
      "electric",
      "fairy"
    ],
    height: 1.8,
    weight: 20.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 786,
    name: "Tapu-lele",
    types: [
      "psychic",
      "fairy"
    ],
    height: 1.2,
    weight: 18.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 787,
    name: "Tapu-bulu",
    types: [
      "grass",
      "fairy"
    ],
    height: 1.9,
    weight: 45.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 788,
    name: "Tapu-fini",
    types: [
      "water",
      "fairy"
    ],
    height: 1.3,
    weight: 21.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 789,
    name: "Cosmog",
    types: [
      "psychic"
    ],
    height: 0.2,
    weight: 0.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 790,
    name: "Cosmoem",
    types: [
      "psychic"
    ],
    height: 0.1,
    weight: 999.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 791,
    name: "Solgaleo",
    types: [
      "psychic",
      "steel"
    ],
    height: 3.4,
    weight: 230,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 792,
    name: "Lunala",
    types: [
      "psychic",
      "ghost"
    ],
    height: 4,
    weight: 120,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 793,
    name: "Nihilego",
    types: [
      "rock",
      "poison"
    ],
    height: 1.2,
    weight: 55.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 794,
    name: "Buzzwole",
    types: [
      "bug",
      "fighting"
    ],
    height: 2.4,
    weight: 333.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 795,
    name: "Pheromosa",
    types: [
      "bug",
      "fighting"
    ],
    height: 1.8,
    weight: 25,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 796,
    name: "Xurkitree",
    types: [
      "electric"
    ],
    height: 3.8,
    weight: 100,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 797,
    name: "Celesteela",
    types: [
      "steel",
      "flying"
    ],
    height: 9.2,
    weight: 999.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 798,
    name: "Kartana",
    types: [
      "grass",
      "steel"
    ],
    height: 0.3,
    weight: 0.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 799,
    name: "Guzzlord",
    types: [
      "dark",
      "dragon"
    ],
    height: 5.5,
    weight: 888,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 800,
    name: "Necrozma",
    types: [
      "psychic"
    ],
    height: 2.4,
    weight: 230,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 801,
    name: "Magearna",
    types: [
      "steel",
      "fairy"
    ],
    height: 1,
    weight: 80.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 802,
    name: "Marshadow",
    types: [
      "fighting",
      "ghost"
    ],
    height: 0.7,
    weight: 22.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 803,
    name: "Poipole",
    types: [
      "poison"
    ],
    height: 0.6,
    weight: 1.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 804,
    name: "Naganadel",
    types: [
      "poison",
      "dragon"
    ],
    height: 3.6,
    weight: 150,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 805,
    name: "Stakataka",
    types: [
      "rock",
      "steel"
    ],
    height: 5.5,
    weight: 820,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 806,
    name: "Blacephalon",
    types: [
      "fire",
      "ghost"
    ],
    height: 1.8,
    weight: 13,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 807,
    name: "Zeraora",
    types: [
      "electric"
    ],
    height: 1.5,
    weight: 44.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 808,
    name: "Meltan",
    types: [
      "steel"
    ],
    height: 0.2,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 809,
    name: "Melmetal",
    types: [
      "steel"
    ],
    height: 2.5,
    weight: 800,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 810,
    name: "Grookey",
    types: [
      "grass"
    ],
    height: 0.3,
    weight: 5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 811,
    name: "Thwackey",
    types: [
      "grass"
    ],
    height: 0.7,
    weight: 14,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 812,
    name: "Rillaboom",
    types: [
      "grass"
    ],
    height: 2.1,
    weight: 90,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 813,
    name: "Scorbunny",
    types: [
      "fire"
    ],
    height: 0.3,
    weight: 4.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 814,
    name: "Raboot",
    types: [
      "fire"
    ],
    height: 0.6,
    weight: 9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 815,
    name: "Cinderace",
    types: [
      "fire"
    ],
    height: 1.4,
    weight: 33,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 816,
    name: "Sobble",
    types: [
      "water"
    ],
    height: 0.3,
    weight: 4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 817,
    name: "Drizzile",
    types: [
      "water"
    ],
    height: 0.7,
    weight: 11.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 818,
    name: "Inteleon",
    types: [
      "water"
    ],
    height: 1.9,
    weight: 45.2,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 819,
    name: "Skwovet",
    types: [
      "normal"
    ],
    height: 0.3,
    weight: 2.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 820,
    name: "Greedent",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 6,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 821,
    name: "Rookidee",
    types: [
      "flying"
    ],
    height: 0.2,
    weight: 1.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 822,
    name: "Corvisquire",
    types: [
      "flying"
    ],
    height: 0.8,
    weight: 16,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 823,
    name: "Corviknight",
    types: [
      "flying",
      "steel"
    ],
    height: 2.2,
    weight: 75,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 824,
    name: "Blipbug",
    types: [
      "bug"
    ],
    height: 0.4,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 825,
    name: "Dottler",
    types: [
      "bug",
      "psychic"
    ],
    height: 0.4,
    weight: 19.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 826,
    name: "Orbeetle",
    types: [
      "bug",
      "psychic"
    ],
    height: 0.4,
    weight: 40.8,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 827,
    name: "Nickit",
    types: [
      "dark"
    ],
    height: 0.6,
    weight: 8.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 828,
    name: "Thievul",
    types: [
      "dark"
    ],
    height: 1.2,
    weight: 19.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 829,
    name: "Gossifleur",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 2.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 830,
    name: "Eldegoss",
    types: [
      "grass"
    ],
    height: 0.5,
    weight: 2.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 831,
    name: "Wooloo",
    types: [
      "normal"
    ],
    height: 0.6,
    weight: 6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 832,
    name: "Dubwool",
    types: [
      "normal"
    ],
    height: 1.3,
    weight: 43,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 833,
    name: "Chewtle",
    types: [
      "water"
    ],
    height: 0.3,
    weight: 8.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 834,
    name: "Drednaw",
    types: [
      "water",
      "rock"
    ],
    height: 1,
    weight: 115.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 835,
    name: "Yamper",
    types: [
      "electric"
    ],
    height: 0.3,
    weight: 13.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 836,
    name: "Boltund",
    types: [
      "electric"
    ],
    height: 1,
    weight: 34,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 837,
    name: "Rolycoly",
    types: [
      "rock"
    ],
    height: 0.3,
    weight: 12,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 838,
    name: "Carkol",
    types: [
      "rock",
      "fire"
    ],
    height: 1.1,
    weight: 78,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 839,
    name: "Coalossal",
    types: [
      "rock",
      "fire"
    ],
    height: 2.8,
    weight: 310.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 840,
    name: "Applin",
    types: [
      "grass",
      "dragon"
    ],
    height: 0.2,
    weight: 0.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 841,
    name: "Flapple",
    types: [
      "grass",
      "dragon"
    ],
    height: 0.3,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 842,
    name: "Appletun",
    types: [
      "grass",
      "dragon"
    ],
    height: 0.4,
    weight: 13,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 843,
    name: "Silicobra",
    types: [
      "ground"
    ],
    height: 2.2,
    weight: 7.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 844,
    name: "Sandaconda",
    types: [
      "ground"
    ],
    height: 3.8,
    weight: 65.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 845,
    name: "Cramorant",
    types: [
      "flying",
      "water"
    ],
    height: 0.8,
    weight: 18,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 846,
    name: "Arrokuda",
    types: [
      "water"
    ],
    height: 0.5,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 847,
    name: "Barraskewda",
    types: [
      "water"
    ],
    height: 1.3,
    weight: 30,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 848,
    name: "Toxel",
    types: [
      "electric",
      "poison"
    ],
    height: 0.4,
    weight: 11,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 849,
    name: "Toxtricity-amped",
    types: [
      "electric",
      "poison"
    ],
    height: 1.6,
    weight: 40,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 850,
    name: "Sizzlipede",
    types: [
      "fire",
      "bug"
    ],
    height: 0.7,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 851,
    name: "Centiskorch",
    types: [
      "fire",
      "bug"
    ],
    height: 3,
    weight: 120,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 852,
    name: "Clobbopus",
    types: [
      "fighting"
    ],
    height: 0.6,
    weight: 4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 853,
    name: "Grapploct",
    types: [
      "fighting"
    ],
    height: 1.6,
    weight: 39,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 854,
    name: "Sinistea",
    types: [
      "ghost"
    ],
    height: 0.1,
    weight: 0.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 855,
    name: "Polteageist",
    types: [
      "ghost"
    ],
    height: 0.2,
    weight: 0.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 856,
    name: "Hatenna",
    types: [
      "psychic"
    ],
    height: 0.4,
    weight: 3.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 857,
    name: "Hattrem",
    types: [
      "psychic"
    ],
    height: 0.6,
    weight: 4.8,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 858,
    name: "Hatterene",
    types: [
      "psychic",
      "fairy"
    ],
    height: 2.1,
    weight: 5.1,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 859,
    name: "Impidimp",
    types: [
      "dark",
      "fairy"
    ],
    height: 0.4,
    weight: 5.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 860,
    name: "Morgrem",
    types: [
      "dark",
      "fairy"
    ],
    height: 0.8,
    weight: 12.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 861,
    name: "Grimmsnarl",
    types: [
      "dark",
      "fairy"
    ],
    height: 1.5,
    weight: 61,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 862,
    name: "Obstagoon",
    types: [
      "dark",
      "normal"
    ],
    height: 1.6,
    weight: 46,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 863,
    name: "Perrserker",
    types: [
      "steel"
    ],
    height: 0.8,
    weight: 28,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 864,
    name: "Cursola",
    types: [
      "ghost"
    ],
    height: 1,
    weight: 0.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 865,
    name: "Sirfetchd",
    types: [
      "fighting"
    ],
    height: 0.8,
    weight: 117,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 866,
    name: "Mr-rime",
    types: [
      "ice",
      "psychic"
    ],
    height: 1.5,
    weight: 58.2,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 867,
    name: "Runerigus",
    types: [
      "ground",
      "ghost"
    ],
    height: 1.6,
    weight: 66.6,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 868,
    name: "Milcery",
    types: [
      "fairy"
    ],
    height: 0.2,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 869,
    name: "Alcremie",
    types: [
      "fairy"
    ],
    height: 0.3,
    weight: 0.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 870,
    name: "Falinks",
    types: [
      "fighting"
    ],
    height: 3,
    weight: 62,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 871,
    name: "Pincurchin",
    types: [
      "electric"
    ],
    height: 0.3,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 872,
    name: "Snom",
    types: [
      "ice",
      "bug"
    ],
    height: 0.3,
    weight: 3.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 873,
    name: "Frosmoth",
    types: [
      "ice",
      "bug"
    ],
    height: 1.3,
    weight: 42,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 874,
    name: "Stonjourner",
    types: [
      "rock"
    ],
    height: 2.5,
    weight: 520,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 875,
    name: "Eiscue-ice",
    types: [
      "ice"
    ],
    height: 1.4,
    weight: 89,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 876,
    name: "Indeedee-male",
    types: [
      "psychic",
      "normal"
    ],
    height: 0.9,
    weight: 28,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 877,
    name: "Morpeko-full-belly",
    types: [
      "electric",
      "dark"
    ],
    height: 0.3,
    weight: 3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 878,
    name: "Cufant",
    types: [
      "steel"
    ],
    height: 1.2,
    weight: 100,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 879,
    name: "Copperajah",
    types: [
      "steel"
    ],
    height: 3,
    weight: 650,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 880,
    name: "Dracozolt",
    types: [
      "electric",
      "dragon"
    ],
    height: 1.8,
    weight: 190,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 881,
    name: "Arctozolt",
    types: [
      "electric",
      "ice"
    ],
    height: 2.3,
    weight: 150,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 882,
    name: "Dracovish",
    types: [
      "water",
      "dragon"
    ],
    height: 2.3,
    weight: 215,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 883,
    name: "Arctovish",
    types: [
      "water",
      "ice"
    ],
    height: 2,
    weight: 175,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 884,
    name: "Duraludon",
    types: [
      "steel",
      "dragon"
    ],
    height: 1.8,
    weight: 40,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 885,
    name: "Dreepy",
    types: [
      "dragon",
      "ghost"
    ],
    height: 0.5,
    weight: 2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 886,
    name: "Drakloak",
    types: [
      "dragon",
      "ghost"
    ],
    height: 1.4,
    weight: 11,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 887,
    name: "Dragapult",
    types: [
      "dragon",
      "ghost"
    ],
    height: 3,
    weight: 50,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 888,
    name: "Zacian",
    types: [
      "fairy"
    ],
    height: 2.8,
    weight: 110,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 889,
    name: "Zamazenta",
    types: [
      "fighting"
    ],
    height: 2.9,
    weight: 210,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 890,
    name: "Eternatus",
    types: [
      "poison",
      "dragon"
    ],
    height: 20,
    weight: 950,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 891,
    name: "Kubfu",
    types: [
      "fighting"
    ],
    height: 0.6,
    weight: 12,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 892,
    name: "Urshifu-single-strike",
    types: [
      "fighting",
      "dark"
    ],
    height: 1.9,
    weight: 105,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 893,
    name: "Zarude",
    types: [
      "dark",
      "grass"
    ],
    height: 1.8,
    weight: 70,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 894,
    name: "Regieleki",
    types: [
      "electric"
    ],
    height: 1.2,
    weight: 145,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 895,
    name: "Regidrago",
    types: [
      "dragon"
    ],
    height: 2.1,
    weight: 200,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 896,
    name: "Glastrier",
    types: [
      "ice"
    ],
    height: 2.2,
    weight: 800,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 897,
    name: "Spectrier",
    types: [
      "ghost"
    ],
    height: 2,
    weight: 44.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 898,
    name: "Calyrex",
    types: [
      "psychic",
      "grass"
    ],
    height: 1.1,
    weight: 7.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 899,
    name: "Wyrdeer",
    types: [
      "normal",
      "psychic"
    ],
    height: 1.8,
    weight: 95.1,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 900,
    name: "Kleavor",
    types: [
      "bug",
      "rock"
    ],
    height: 1.8,
    weight: 89,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 901,
    name: "Ursaluna",
    types: [
      "ground",
      "normal"
    ],
    height: 2.4,
    weight: 290,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 902,
    name: "Basculegion-male",
    types: [
      "water",
      "ghost"
    ],
    height: 3,
    weight: 110,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 903,
    name: "Sneasler",
    types: [
      "fighting",
      "poison"
    ],
    height: 1.3,
    weight: 43,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 904,
    name: "Overqwil",
    types: [
      "dark",
      "poison"
    ],
    height: 2.5,
    weight: 60.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 905,
    name: "Enamorus-incarnate",
    types: [
      "fairy",
      "flying"
    ],
    height: 1.6,
    weight: 48,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 906,
    name: "Sprigatito",
    types: [
      "grass"
    ],
    height: 0.4,
    weight: 4.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 907,
    name: "Floragato",
    types: [
      "grass"
    ],
    height: 0.9,
    weight: 12.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 908,
    name: "Meowscarada",
    types: [
      "grass",
      "dark"
    ],
    height: 1.5,
    weight: 31.2,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 909,
    name: "Fuecoco",
    types: [
      "fire"
    ],
    height: 0.4,
    weight: 9.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 910,
    name: "Crocalor",
    types: [
      "fire"
    ],
    height: 1,
    weight: 30.7,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 911,
    name: "Skeledirge",
    types: [
      "fire",
      "ghost"
    ],
    height: 1.6,
    weight: 326.5,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 912,
    name: "Quaxly",
    types: [
      "water"
    ],
    height: 0.5,
    weight: 6.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 913,
    name: "Quaxwell",
    types: [
      "water"
    ],
    height: 1.2,
    weight: 21.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 914,
    name: "Quaquaval",
    types: [
      "water",
      "fighting"
    ],
    height: 1.8,
    weight: 61.9,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 915,
    name: "Lechonk",
    types: [
      "normal"
    ],
    height: 0.5,
    weight: 10.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 916,
    name: "Oinkologne-male",
    types: [
      "normal"
    ],
    height: 1,
    weight: 120,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 917,
    name: "Tarountula",
    types: [
      "bug"
    ],
    height: 0.3,
    weight: 4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 918,
    name: "Spidops",
    types: [
      "bug"
    ],
    height: 1,
    weight: 16.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 919,
    name: "Nymble",
    types: [
      "bug"
    ],
    height: 0.2,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 920,
    name: "Lokix",
    types: [
      "bug",
      "dark"
    ],
    height: 1,
    weight: 17.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 921,
    name: "Pawmi",
    types: [
      "electric"
    ],
    height: 0.3,
    weight: 2.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 922,
    name: "Pawmo",
    types: [
      "electric",
      "fighting"
    ],
    height: 0.4,
    weight: 6.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 923,
    name: "Pawmot",
    types: [
      "electric",
      "fighting"
    ],
    height: 0.9,
    weight: 41,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 924,
    name: "Tandemaus",
    types: [
      "normal"
    ],
    height: 0.3,
    weight: 1.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 925,
    name: "Maushold-family-of-four",
    types: [
      "normal"
    ],
    height: 0.3,
    weight: 2.3,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 926,
    name: "Fidough",
    types: [
      "fairy"
    ],
    height: 0.3,
    weight: 10.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 927,
    name: "Dachsbun",
    types: [
      "fairy"
    ],
    height: 0.5,
    weight: 14.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 928,
    name: "Smoliv",
    types: [
      "grass",
      "normal"
    ],
    height: 0.3,
    weight: 6.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 929,
    name: "Dolliv",
    types: [
      "grass",
      "normal"
    ],
    height: 0.6,
    weight: 11.9,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 930,
    name: "Arboliva",
    types: [
      "grass",
      "normal"
    ],
    height: 1.4,
    weight: 48.2,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 931,
    name: "Squawkabilly-green-plumage",
    types: [
      "normal",
      "flying"
    ],
    height: 0.6,
    weight: 2.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 932,
    name: "Nacli",
    types: [
      "rock"
    ],
    height: 0.4,
    weight: 16,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 933,
    name: "Naclstack",
    types: [
      "rock"
    ],
    height: 0.6,
    weight: 105,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 934,
    name: "Garganacl",
    types: [
      "rock"
    ],
    height: 2.3,
    weight: 240,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 935,
    name: "Charcadet",
    types: [
      "fire"
    ],
    height: 0.6,
    weight: 10.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 936,
    name: "Armarouge",
    types: [
      "fire",
      "psychic"
    ],
    height: 1.5,
    weight: 85,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 937,
    name: "Ceruledge",
    types: [
      "fire",
      "ghost"
    ],
    height: 1.6,
    weight: 62,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 938,
    name: "Tadbulb",
    types: [
      "electric"
    ],
    height: 0.3,
    weight: 0.4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 939,
    name: "Bellibolt",
    types: [
      "electric"
    ],
    height: 1.2,
    weight: 113,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 940,
    name: "Wattrel",
    types: [
      "electric",
      "flying"
    ],
    height: 0.4,
    weight: 3.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 941,
    name: "Kilowattrel",
    types: [
      "electric",
      "flying"
    ],
    height: 1.4,
    weight: 38.6,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 942,
    name: "Maschiff",
    types: [
      "dark"
    ],
    height: 0.5,
    weight: 16,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 943,
    name: "Mabosstiff",
    types: [
      "dark"
    ],
    height: 1.1,
    weight: 61,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 944,
    name: "Shroodle",
    types: [
      "poison",
      "normal"
    ],
    height: 0.2,
    weight: 0.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 945,
    name: "Grafaiai",
    types: [
      "poison",
      "normal"
    ],
    height: 0.7,
    weight: 27.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 946,
    name: "Bramblin",
    types: [
      "grass",
      "ghost"
    ],
    height: 0.6,
    weight: 0.6,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 947,
    name: "Brambleghast",
    types: [
      "grass",
      "ghost"
    ],
    height: 1.2,
    weight: 6,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 948,
    name: "Toedscool",
    types: [
      "ground",
      "grass"
    ],
    height: 0.9,
    weight: 33,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 949,
    name: "Toedscruel",
    types: [
      "ground",
      "grass"
    ],
    height: 1.9,
    weight: 58,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 950,
    name: "Klawf",
    types: [
      "rock"
    ],
    height: 1.3,
    weight: 79,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 951,
    name: "Capsakid",
    types: [
      "grass"
    ],
    height: 0.3,
    weight: 3,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 952,
    name: "Scovillain",
    types: [
      "grass",
      "fire"
    ],
    height: 0.9,
    weight: 15,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 953,
    name: "Rellor",
    types: [
      "bug"
    ],
    height: 0.2,
    weight: 1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 954,
    name: "Rabsca",
    types: [
      "bug",
      "psychic"
    ],
    height: 0.3,
    weight: 3.5,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 955,
    name: "Flittle",
    types: [
      "psychic"
    ],
    height: 0.2,
    weight: 1.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 956,
    name: "Espathra",
    types: [
      "psychic"
    ],
    height: 1.9,
    weight: 90,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 957,
    name: "Tinkatink",
    types: [
      "fairy",
      "steel"
    ],
    height: 0.4,
    weight: 8.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 958,
    name: "Tinkatuff",
    types: [
      "fairy",
      "steel"
    ],
    height: 0.7,
    weight: 59.1,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 959,
    name: "Tinkaton",
    types: [
      "fairy",
      "steel"
    ],
    height: 0.7,
    weight: 112.8,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 960,
    name: "Wiglett",
    types: [
      "water"
    ],
    height: 1.2,
    weight: 1.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 961,
    name: "Wugtrio",
    types: [
      "water"
    ],
    height: 1.2,
    weight: 5.4,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 962,
    name: "Bombirdier",
    types: [
      "flying",
      "dark"
    ],
    height: 1.5,
    weight: 42.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 963,
    name: "Finizen",
    types: [
      "water"
    ],
    height: 1.3,
    weight: 60.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 964,
    name: "Palafin-zero",
    types: [
      "water"
    ],
    height: 1.3,
    weight: 60.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 965,
    name: "Varoom",
    types: [
      "steel",
      "poison"
    ],
    height: 1,
    weight: 35,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 966,
    name: "Revavroom",
    types: [
      "steel",
      "poison"
    ],
    height: 1.8,
    weight: 120,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 967,
    name: "Cyclizar",
    types: [
      "dragon",
      "normal"
    ],
    height: 1.6,
    weight: 63,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 968,
    name: "Orthworm",
    types: [
      "steel"
    ],
    height: 2.5,
    weight: 310,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 969,
    name: "Glimmet",
    types: [
      "rock",
      "poison"
    ],
    height: 0.7,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 970,
    name: "Glimmora",
    types: [
      "rock",
      "poison"
    ],
    height: 1.5,
    weight: 45,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 971,
    name: "Greavard",
    types: [
      "ghost"
    ],
    height: 0.6,
    weight: 35,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 972,
    name: "Houndstone",
    types: [
      "ghost"
    ],
    height: 2,
    weight: 15,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 973,
    name: "Flamigo",
    types: [
      "flying",
      "fighting"
    ],
    height: 1.6,
    weight: 37,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 974,
    name: "Cetoddle",
    types: [
      "ice"
    ],
    height: 1.2,
    weight: 45,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 975,
    name: "Cetitan",
    types: [
      "ice"
    ],
    height: 4.5,
    weight: 700,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 976,
    name: "Veluza",
    types: [
      "water",
      "psychic"
    ],
    height: 2.5,
    weight: 90,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 977,
    name: "Dondozo",
    types: [
      "water"
    ],
    height: 12,
    weight: 220,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 978,
    name: "Tatsugiri-curly",
    types: [
      "dragon",
      "water"
    ],
    height: 0.3,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 979,
    name: "Annihilape",
    types: [
      "fighting",
      "ghost"
    ],
    height: 1.2,
    weight: 56,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 980,
    name: "Clodsire",
    types: [
      "poison",
      "ground"
    ],
    height: 1.8,
    weight: 223,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 981,
    name: "Farigiraf",
    types: [
      "normal",
      "psychic"
    ],
    height: 3.2,
    weight: 160,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 982,
    name: "Dudunsparce-two-segment",
    types: [
      "normal"
    ],
    height: 3.6,
    weight: 39.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 983,
    name: "Kingambit",
    types: [
      "dark",
      "steel"
    ],
    height: 2,
    weight: 120,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 984,
    name: "Great-tusk",
    types: [
      "ground",
      "fighting"
    ],
    height: 2.2,
    weight: 320,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 985,
    name: "Scream-tail",
    types: [
      "fairy",
      "psychic"
    ],
    height: 1.2,
    weight: 8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 986,
    name: "Brute-bonnet",
    types: [
      "grass",
      "dark"
    ],
    height: 1.2,
    weight: 21,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 987,
    name: "Flutter-mane",
    types: [
      "ghost",
      "fairy"
    ],
    height: 1.4,
    weight: 4,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 988,
    name: "Slither-wing",
    types: [
      "bug",
      "fighting"
    ],
    height: 3.2,
    weight: 92,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 989,
    name: "Sandy-shocks",
    types: [
      "electric",
      "ground"
    ],
    height: 2.3,
    weight: 60,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 990,
    name: "Iron-treads",
    types: [
      "ground",
      "steel"
    ],
    height: 0.9,
    weight: 240,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 991,
    name: "Iron-bundle",
    types: [
      "ice",
      "water"
    ],
    height: 0.6,
    weight: 11,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 992,
    name: "Iron-hands",
    types: [
      "fighting",
      "electric"
    ],
    height: 1.8,
    weight: 380.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 993,
    name: "Iron-jugulis",
    types: [
      "dark",
      "flying"
    ],
    height: 1.3,
    weight: 111,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 994,
    name: "Iron-moth",
    types: [
      "fire",
      "poison"
    ],
    height: 1.2,
    weight: 36,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 995,
    name: "Iron-thorns",
    types: [
      "rock",
      "electric"
    ],
    height: 1.6,
    weight: 303,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 996,
    name: "Frigibax",
    types: [
      "dragon",
      "ice"
    ],
    height: 0.5,
    weight: 17,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 997,
    name: "Arctibax",
    types: [
      "dragon",
      "ice"
    ],
    height: 0.8,
    weight: 30,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 998,
    name: "Baxcalibur",
    types: [
      "dragon",
      "ice"
    ],
    height: 2.1,
    weight: 210,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 999,
    name: "Gimmighoul",
    types: [
      "ghost"
    ],
    height: 0.3,
    weight: 5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1000,
    name: "Gholdengo",
    types: [
      "steel",
      "ghost"
    ],
    height: 1.2,
    weight: 30,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 1001,
    name: "Wo-chien",
    types: [
      "dark",
      "grass"
    ],
    height: 1.5,
    weight: 74.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1002,
    name: "Chien-pao",
    types: [
      "dark",
      "ice"
    ],
    height: 1.9,
    weight: 152.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1003,
    name: "Ting-lu",
    types: [
      "dark",
      "ground"
    ],
    height: 2.7,
    weight: 699.7,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1004,
    name: "Chi-yu",
    types: [
      "dark",
      "fire"
    ],
    height: 0.4,
    weight: 4.9,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1005,
    name: "Roaring-moon",
    types: [
      "dragon",
      "dark"
    ],
    height: 2,
    weight: 380,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1006,
    name: "Iron-valiant",
    types: [
      "fairy",
      "fighting"
    ],
    height: 1.4,
    weight: 35,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1007,
    name: "Koraidon",
    types: [
      "fighting",
      "dragon"
    ],
    height: 2.5,
    weight: 303,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1008,
    name: "Miraidon",
    types: [
      "electric",
      "dragon"
    ],
    height: 3.5,
    weight: 240,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1009,
    name: "Walking-wake",
    types: [
      "water",
      "dragon"
    ],
    height: 3.5,
    weight: 280,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1010,
    name: "Iron-leaves",
    types: [
      "grass",
      "psychic"
    ],
    height: 1.5,
    weight: 125,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1011,
    name: "Dipplin",
    types: [
      "grass",
      "dragon"
    ],
    height: 0.4,
    weight: 9.7,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 1012,
    name: "Poltchageist",
    types: [
      "grass",
      "ghost"
    ],
    height: 0.1,
    weight: 1.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1013,
    name: "Sinistcha",
    types: [
      "grass",
      "ghost"
    ],
    height: 0.2,
    weight: 2.2,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 1014,
    name: "Okidogi",
    types: [
      "poison",
      "fighting"
    ],
    height: 1.8,
    weight: 92.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1015,
    name: "Munkidori",
    types: [
      "poison",
      "psychic"
    ],
    height: 1,
    weight: 12.2,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1016,
    name: "Fezandipiti",
    types: [
      "poison",
      "fairy"
    ],
    height: 1.4,
    weight: 30.1,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1017,
    name: "Ogerpon",
    types: [
      "grass"
    ],
    height: 1.2,
    weight: 39.8,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1018,
    name: "Archaludon",
    types: [
      "steel",
      "dragon"
    ],
    height: 2,
    weight: 60,
    habitat: "unknown",
    evolutionStage: 2
  },
  {
    id: 1019,
    name: "Hydrapple",
    types: [
      "grass",
      "dragon"
    ],
    height: 1.8,
    weight: 93,
    habitat: "unknown",
    evolutionStage: 3
  },
  {
    id: 1020,
    name: "Gouging-fire",
    types: [
      "fire",
      "dragon"
    ],
    height: 3.5,
    weight: 590,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1021,
    name: "Raging-bolt",
    types: [
      "electric",
      "dragon"
    ],
    height: 5.2,
    weight: 480,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1022,
    name: "Iron-boulder",
    types: [
      "rock",
      "psychic"
    ],
    height: 1.5,
    weight: 162.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1023,
    name: "Iron-crown",
    types: [
      "steel",
      "psychic"
    ],
    height: 1.6,
    weight: 156,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1024,
    name: "Terapagos",
    types: [
      "normal"
    ],
    height: 0.2,
    weight: 6.5,
    habitat: "unknown",
    evolutionStage: 1
  },
  {
    id: 1025,
    name: "Pecharunt",
    types: [
      "poison",
      "ghost"
    ],
    height: 0.3,
    weight: 0.3,
    habitat: "unknown",
    evolutionStage: 1
  }
];
