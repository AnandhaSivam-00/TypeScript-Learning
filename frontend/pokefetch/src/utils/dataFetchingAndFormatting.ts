import axios from 'axios'

import type { PokeNamesDataType } from './types'

export const getAllPokemonNames = async () => {
  try {
    const response: any = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    console.log(response)

    return response.data;
  }
  catch(error) {
    console.error(error);
  }
}