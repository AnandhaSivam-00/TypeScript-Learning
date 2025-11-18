import {useEffect, useState, startTransition, type JSX} from 'react';

import { changeFirstLetterToUpperCase } from '../../utils/helperFunctions';

type ResultPillProps = {
  searchQueryString: string;
  pokemonNames: {
    name: string;
    url: string;
  }[],
  setSearchQueryString: (name: string) => void;
  setShowResultPill: (show: boolean) => void;
}

const ResultPill = ({ 
  searchQueryString, 
  pokemonNames,
  setSearchQueryString,
  setShowResultPill
}: ResultPillProps): JSX.Element => {
  const [filteredPokemonNames, setFilteredPokemonNames] = useState<string[]>([]);

  useEffect(() => {
    const filteredNames: string[] = pokemonNames
      .filter((pokemon) => pokemon.name
        .toLowerCase()
        .startsWith(searchQueryString.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 11)
      .map((pokemon) => changeFirstLetterToUpperCase(pokemon.name));

      startTransition(() => {
        setFilteredPokemonNames(filteredNames);
      })
  }, [searchQueryString, pokemonNames])
  
  return (
    <div 
      className='w-full h-auto flex flex-row justify-start items-center flex-wrap border border-gray-5 my-1 p-1 rounded-sm'
    >
      {filteredPokemonNames.length === 0 ? (
        <span className='text-gray-4/70 text-[0.7rem]'>No results found...</span>
      ) : (
        filteredPokemonNames?.map((name, index) => {
          return (
            <>
              {index === 10 ? <span className='text-gray-4 tracking-widest mx-2'>...</span> : (

                <button
                  key={index}
                  type="button"
                  className="w-auto h-auto inline bg-background hover:bg-black border hover:border-black border-gray-5 px-2 -py-1! text-gray-4 rounded-sm text-[0.4rem] sm:text-[0.55rem] md:text-[0.65rem] tracking-widest m-0.5 cursor-pointer shadow-md transition-discrete duration-300 ease-in-out"
                  onClick={() => {
                    setSearchQueryString(name);
                    setShowResultPill(false);
                  }}
                >
                  {name}
                </button>
              )}
            </>
          )
        }) 
      )}
    </div>
  )
}

export default ResultPill;