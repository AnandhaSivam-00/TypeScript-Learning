import axios from 'axios'

import type { PokeNamesDataType } from './types';

export const getAllPokemonNames = async (): Promise<PokeNamesDataType> => {
  try {
    const response: any = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data: PokeNamesDataType = {
      count: response.data.count,
      results: response.data.results
    }

    return data;
  }
  catch(error) {
    console.error(error);
  }
}