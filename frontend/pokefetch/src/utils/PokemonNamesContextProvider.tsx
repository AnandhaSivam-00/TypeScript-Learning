import {
  createContext, 
  useState, 
  useEffect, 
  useContext,
  type JSX, 
} from 'react';

import { getAllPokemonNames } from './dataFetchingAndFormatting';
import type { PokeNamesDataType } from '../utils/types';

const PokeNamesContext = createContext({});

const PokeNamesContextProvider = ({ children }: { children: JSX.Element[] }) => {
  const [pokemonNamesData, setPokemonNamesData] = useState<Partial<PokeNamesDataType>>({});

  useEffect(() => {
    const fetchPokemonNames = async () => {
      if(!pokemonNamesData) {
        const pokemonNames: PokeNamesDataType = await getAllPokemonNames();
        setPokemonNamesData(pokemonNames);
      }
    };
    
    fetchPokemonNames();
  }, [])
  
  return (
    <PokeNamesContext.Provider value={pokemonNamesData}>
      {children}
    </PokeNamesContext.Provider>
  )
}

export default PokeNamesContextProvider;

export const usePokeNamesContext = () => useContext(PokeNamesContext);