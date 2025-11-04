import axios from 'axios'

import type { 
  ErrorType,
  PokeNamesDataType, 
  PokemonDataType, 
  SpeciesDataType,
  PokemonDetailsType
} from './types';


const errorData: ErrorType = {
  name: "Unknown",
  message: "Unknown error occured",
}

export const getAllPokemonNames = async (): Promise<PokeNamesDataType | undefined> => {
  try {
    const response: any = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data: PokeNamesDataType = {
      count: response.data.count,
      results: response.data.results
    }

    // Dummy data
  //   const data: PokeNamesDataType = {
  //     "count": 1328,
  //     "results": [
  //       {
  //         "name": "bulbasaur",
  //         "url": "https://pokeapi.co/api/v2/pokemon/1/"
  //       },
  //       {
  //         "name": "ivysaur",
  //         "url": "https://pokeapi.co/api/v2/pokemon/2/"
  //       },
  //       {
  //         "name": "venusaur",
  //         "url": "https://pokeapi.co/api/v2/pokemon/3/"
  //       },
  //       {
  //         "name": "charmander",
  //         "url": "https://pokeapi.co/api/v2/pokemon/4/"
  //       },
  //       {
  //         "name": "charmeleon",
  //         "url": "https://pokeapi.co/api/v2/pokemon/5/"
  //       },
  //       {
  //         "name": "charizard",
  //         "url": "https://pokeapi.co/api/v2/pokemon/6/"
  //       },
  //       {
  //         "name": "squirtle",
  //         "url": "https://pokeapi.co/api/v2/pokemon/7/"
  //       },
  //       {
  //         "name": "wartortle",
  //         "url": "https://pokeapi.co/api/v2/pokemon/8/"
  //       },
  //       {
  //         "name": "blastoise",
  //         "url": "https://pokeapi.co/api/v2/pokemon/9/"
  //       },
  //       {
  //         "name": "caterpie",
  //         "url": "https://pokeapi.co/api/v2/pokemon/10/"
  //       },
  //       {
  //         "name": "metapod",
  //         "url": "https://pokeapi.co/api/v2/pokemon/11/"
  //       }
  //     ]
  // }

  //   console.log(data);

    return data;
  }
  catch(error) {
    console.error(error);
    return undefined;
  }
}

export const getPokemonDetails = async (name: string): Promise<PokemonDetailsType | ErrorType> => {
  
  try {
    const pokemonData = await getPokemonData(name);

    if('message' in pokemonData) {
      throw new Error(pokemonData.message);
    }

    const speciesData = pokemonData.name === pokemonData.species ? 
      await getPokemonSpeciesData(name) :
      await getPokemonSpeciesData(pokemonData.species);

    if('message' in speciesData) {
      throw new Error(speciesData.message);
    }

    return {
      ...pokemonData,
      ...speciesData
    };
  }
  catch(error: unknown) {
    if(error instanceof Error || axios.isAxiosError(error)) {
      return {
        name: error.name,
        message: error.message,
      }
    }
    else {
      return errorData;
    }
  }
}

export const getPokemonData = async (name: string): Promise<PokemonDataType | ErrorType> => {
  try {
    const response: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const abilities: string[] = response.data.abilities.map((ability: any) => ability.name);

    const pokemonData: PokemonDataType = {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      order: response.data.order,
      base_experience: response.data.base_experience,
      sprites: {
        img: response.data.sprites.front_default,
        svg: response.data.sprites.front_shiny
      },
      type: response.data.types[0].type.name,
      species: response.data.species.name,
      abilities,
    };

    const pokemonData: PokemonDataType = {
      id: 25,
      name: "pikachu",
      height: 4,
      weight: 60,
      order: 35,
      base_experience: 112,
      sprites: {
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        svg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
      },
      type: "electric",
      species: "pikachu",
      abilities: ["static", "lightning-rod"],
    };

    
    return pokemonData;
  }
  catch(error: unknown) {
    if(error instanceof Error || axios.isAxiosError(error)) {
      return {
        name: error.name,
        message: error.message,
      }
    }
    else {
      return errorData;
    }
  }
}

export const getPokemonSpeciesData = async (name: string): Promise<SpeciesDataType | ErrorType> => {
  console.log(name);
  
  try {
    const response: any = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);

    const about: string = response.data.flavor_text_entries
      .filter((entry: any) => entry.language.name === "en")
      .slice(0, 1)
      .map((entry: any) => entry.flavor_text)

    const speciesData: SpeciesDataType = {
      about,
      color: response.data.color.name,
      gender_rate: response.data.gender_rate,
      is_legendary: response.data.is_legendary,
      is_mythical: response.data.is_mythical
    }

    // const speciesData: SpeciesDataType = {
    //   about:
    //     "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    //   color: "yellow",
    //   gender_rate: 4, // (♀:4 ♂:4) means 50/50 gender ratio
    //   is_legendary: false,
    //   is_mythical: false,
    // };


    return speciesData;
  }
  catch(error) {
    if(error instanceof Error || axios.isAxiosError(error)) {
      return {
        name: error.name,
        message: error.message,
      }
    }
    else {
      return errorData;
    }
  }
}