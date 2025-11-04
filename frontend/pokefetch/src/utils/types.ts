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
  type: string;
  abilities: string[];
  species: string;
}

export type SpeciesDataType = {
  about: string;
  color: string;
  gender_rate: number;
  is_legendary: boolean;
  is_mythical: boolean;
}

export type PokemonDetailsType = PokemonDataType & SpeciesDataType;