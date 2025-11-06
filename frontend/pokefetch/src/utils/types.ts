export type ErrorType = {
  name: string;
  message: string;
}

export type PokeNamesDataType = {
  count: number;
  results: {
    name: string;
    url: string;
  }
}

export type PokemonStatsType = {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export type PokemonDataType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  base_experience: number;
  sprites: {
    img: string;
    svg: string;
  },
  type: string[];
  abilities: string[];
  species: string;
  stats: PokemonStatsType;
}

export type SpeciesDataType = {
  about: string;
  color: string;
  gender_rate: number;
  category: string;
  is_legendary: boolean;
  is_mythical: boolean;
}

export type PokemonDetailsType = PokemonDataType & SpeciesDataType;

export type BackdropColorsType = 'black' | 'blue' | 'brown' | 'gray' | 'green' | 'pink' | 'purple' | 'red' | 'white' | 'yellow';

export type PokeTypesColorType =
  'normal' |
  'fighting' |
  'flying' |
  'poison' |
  'ground' |
  'rock' |
  'bug' |
  'ghost' |
  'steel' |
  'fire' |
  'water' |
  'grass' |
  'electric' |
  'psychic' |
  'ice' |
  'dragon' |
  'dark' |
  'fairy' |
  'shadow';
