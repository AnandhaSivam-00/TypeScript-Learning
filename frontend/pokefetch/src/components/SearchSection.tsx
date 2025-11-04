import {useActionState, useState, type JSX} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

import ResultPill from './ResultPill';
import { SearchIcon } from '../assets/Icons'

import { usePokeNamesContext } from '../utils/PokemonNamesContextProvider'
import type { PokeNamesDataType } from '../utils/types';

const SearchSection = (): JSX.Element => {
  const [searchQueryString, setSearchQueryString] = useState<string>('');
  const [showResultPill, setShowResultPill] = useState<boolean>(true);

  const pokemonNames: Partial<PokeNamesDataType> = usePokeNamesContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [error, handleFormAction, _] = useActionState(
    (_: unknown, formData: FormData) => {
      console.log("Form submitted");
      const searchQuery: string | undefined = formData.get('search')?.toString().trim();
      if(searchQuery) {
        navigate(`/poke-search?name=${searchQuery.toLowerCase()}`);
        return null;
      } 
      else {
        return "Please enter a valid Pokémon name or ID.";
      }
    },
    null
  )

  const disableSearchButton: boolean = searchParams.get('name')?.toLowerCase() === searchQueryString?.toLowerCase();

  return (
    <section className='w-full h-auto mb-5 flex flex-col justify-center items-center'>
      <div className='w-full md:w-auto h-auto flex flex-col justify-center items-center gap-1 mb-2'>
        <span className='text-[0.5rem] self-start text-gray-3 mb-1'>
          Total Pokémons available: <span className="hover:text-gray-4/50">{pokemonNames?.count}</span>
        </span>
  
        <form 
          className='relative h-auto mx-auto w-full md:w-[38rem] bg-gray-1 rounded-lg py-1 focus-within:ring-1 focus-within:ring-black-accent-2/50 border-1 border-gray-5 hover:border-gray-2 shadow-lg focus-within:shadow-xl px-2 transition-discrete duration-200'
          action={handleFormAction}
        >
          <input 
            type="text"
            placeholder='Search for a Pokémon' 
            value={searchQueryString}
            name='search'
            className='w-full h-10 py-2 rounded-md focus:outline-none'
            onChange={(event) => {
              setShowResultPill(true);
              setSearchQueryString(event.target.value)
            }}
            required
          />
  
          <button 
            type="submit"
            className={`w-auto h-auto inline absolute right-2 top-2 px-2 py-1.5 rounded-md bg-primary hover:bg-primary/80 font-semibold! disabled:cursor-not-allowed`}
            disabled={disableSearchButton}
          >
            <SearchIcon width='1.25rem' height='1.25rem' />
          </button>
  
          {showResultPill && searchQueryString && pokemonNames && (
            <ResultPill 
              searchQueryString={searchQueryString}
              pokemonNames={pokemonNames?.results!}
              setSearchQueryString={setSearchQueryString}
              setShowResultPill={setShowResultPill}
            />
          )}
        </form>
      </div>
    </section>
  );
}

export default SearchSection;