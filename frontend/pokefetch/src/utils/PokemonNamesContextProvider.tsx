import {
  createContext, 
  use,
  type JSX, 
} from 'react';

// import ErrorBlock from '../components/ErrorBlock';

import { getAllPokemonNames } from './dataFetchingAndFormatting';
import type { ErrorType, PokeNamesDataType } from '../utils/types';

const PokeNamesContext = createContext({});

// Creating a promise outside the component to avoid the re-rendering and multiple execution of the api calls
// Like rendering happen after the search is mounted
const pokemonPromise = (async (): Promise<PokeNamesDataType> => {
  const pokemonNames: PokeNamesDataType | ErrorType = await getAllPokemonNames();

  if('message' in pokemonNames) {
    throw new Error(pokemonNames.message);
  }

  return pokemonNames;
})()

const PokeNamesContextProvider = ({ children }: { children: JSX.Element[] }) => {
  const pokemonNamesData: PokeNamesDataType = use(pokemonPromise);
  
  return (
    <PokeNamesContext value={pokemonNamesData}>
      {children}
      {/* {error && (
        <ErrorBlock message={error + " - Please refresh the page or try again later."} />
      )} */}
    </PokeNamesContext>
  )
}

export default PokeNamesContextProvider;

export { PokeNamesContext };