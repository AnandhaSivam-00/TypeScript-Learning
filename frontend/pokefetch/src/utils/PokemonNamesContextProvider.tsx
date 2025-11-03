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
    const fetchPokemonNames = async (): Promise<void> => {
      if(pokemonNamesData) {
        const pokemonNames: Awaited<Promise<PokeNamesDataType | undefined>> = await getAllPokemonNames();

        if(pokemonNames !== undefined) {
          setPokemonNamesData(pokemonNames);
        }
      }
    };
    
    fetchPokemonNames();
  }, [])
  
  return (
    <PokeNamesContext value={pokemonNamesData}>
      {children}
    </PokeNamesContext>
  )
}

export default PokeNamesContextProvider;

export const usePokeNamesContext = () => useContext(PokeNamesContext);