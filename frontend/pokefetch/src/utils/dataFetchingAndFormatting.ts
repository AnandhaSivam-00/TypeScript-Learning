'use server'

import axios from 'axios'

import type {
  ErrorType,
  PokeNamesDataType,
  PokemonDataType,
  SpeciesDataType,
  PokemonDetailsType,
  PokemonStatsType,
} from './types';
import { getRandomNumber } from './helperFunctions';


const errorData: ErrorType = {
  name: "Unknown",
  message: "Unknown error occured",
}

const responseErrorData = (name: string, message: string): ErrorType => {
  return {
    name: name,
    message: message
  }
}

export const getAllPokemonNames = async (): Promise<PokeNamesDataType | ErrorType> => {
  try {
    const response: any = await axios.get(`${import.meta.env.VITE_PROXY_API}tot-count&limit=100000&offset=0`);
    const data: PokeNamesDataType = {
      count: response.data.count,
      results: response.data.results
    }

    return data;
  }
  catch(error) {
    if(axios.isAxiosError(error)) {
      return responseErrorData(error.response?.data.error, error.response?.statusText!);
    }
    else if(error instanceof Error) {
      return responseErrorData(error.name, error.message);
    }
    else {
      return errorData;
    }
  }
}

export const getPokemonDetails = async (name: string): Promise<PokemonDetailsType | ErrorType> => {
  try {
    const pokemonData: PokemonDataType | unknown = await getPokemonData(name);

    // @ts-ignore
    const speciesData: SpeciesDataType | unknown = pokemonData.name === pokemonData.species ?
      await getPokemonSpeciesData(name) : // @ts-ignore
      await getPokemonSpeciesData(pokemonData.species);

    return { // @ts-ignore
      ...pokemonData, // @ts-ignore
      ...speciesData
    };
  }
  catch(error: unknown) {
    if(axios.isAxiosError(error)) {
      return responseErrorData(error.response?.data.error.name, error.response?.data.error.message);
    }
    else if(error instanceof Error) {
      return responseErrorData(error.name, error.message);
    }
    else {
      return errorData;
    }
  }
}

export const getPokemonData = async (name: string): Promise<PokemonDataType | unknown> => {
  const response: any = await axios.get(`${import.meta.env.VITE_PROXY_API}pokemon&name=${name}`);

  const abilities: string[] = response.data.abilities.map((item: any) => item.ability.name);
  const type: string[] = response.data.types.map((item: any) => item.type.name);
  const stats: PokemonStatsType = response.data.stats
    .reduce((entry: any, item: any) => {
      entry[item.stat.name] = item.base_stat;
      return entry;
    }, {} as PokemonStatsType);

  const imgURL: string | undefined = response.data.sprites.front_default !== null ?
    response.data.sprites.front_default : undefined;
  const svgURL: string | undefined = response.data.sprites.front_shiny !== null ?
    response.data.sprites.front_shiny : undefined;
  const gifURL: string | undefined = response.data.sprites.versions["generation-v"]["black-white"].animated.front_default !== null ?
    response.data.sprites.versions["generation-v"]["black-white"].animated.front_default : undefined;

  const pokemonData: PokemonDataType = {
    id: response.data.id,
    name: response.data.name,
    height: response.data.height,
    weight: response.data.weight,
    order: response.data.order,
    base_experience: response.data.base_experience,
    sprites: {
      img: imgURL,
      svg: svgURL,
      gif: gifURL
    },
    type,
    species: response.data.species.name,
    abilities,
    stats
  };

  return pokemonData;
}

export const getPokemonSpeciesData = async (name: string): Promise<SpeciesDataType | unknown> => {
  const response: any = await axios.get(`${import.meta.env.VITE_PROXY_API}pokemon-species&name=${name}`);

  const flavorTexts: string[] = response.data.flavor_text_entries
    .filter((entry: any) => entry.language.name === "en")
    .map((entry: any) => entry.flavor_text.replaceAll("", " "))
  const about: string = flavorTexts[getRandomNumber(flavorTexts.length - 1)]

  const category: string = response.data.genera
    .filter((entry: any) => entry.language.name === "en")
    .map((entry: any) => entry.genus.replace(" Pokémon", ""))[0]

  const speciesData: SpeciesDataType = {
    about,
    color: response.data.color.name,
    gender_rate: response.data.gender_rate,
    category,
    is_legendary: response.data.is_legendary,
    is_mythical: response.data.is_mythical
  }

  return speciesData;
}