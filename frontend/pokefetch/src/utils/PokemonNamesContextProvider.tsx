import {
  createContext, 
  useState, 
  useEffect, 
  useContext,
  type JSX, 
} from 'react';

import { getAllPokemonNames } from './dataFetchingAndFormatting';
import type { ErrorType, PokeNamesDataType } from '../utils/types';
import ErrorBlock from '../components/ErrorBlock';

const PokeNamesContext = createContext({});

const PokeNamesContextProvider = ({ children }: { children: JSX.Element[] }) => {
  const [pokemonNamesData, setPokemonNamesData] = useState<Partial<PokeNamesDataType>>({});
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      if(pokemonNamesData) {
        const pokemonNames: PokeNamesDataType | ErrorType = await getAllPokemonNames();

        if('message' in pokemonNames) {
          setError(pokemonNames.message);
          return;
        }
        setPokemonNamesData(pokemonNames);
      }
    })();
  }, [])
  
  return (
    <PokeNamesContext value={pokemonNamesData}>
      {children}
      {error && (
        <ErrorBlock message={error + " - Please refresh the page or try again later."} />
      )}
    </PokeNamesContext>
  )
}

export default PokeNamesContextProvider;

export const usePokeNamesContext = () => useContext(PokeNamesContext);