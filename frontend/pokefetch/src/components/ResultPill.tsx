import {useEffect, useState, type JSX} from 'react';

type ResultPillProps = {
  searchQueryString: string;
  pokemonNames: {
    name: string;
    url: string;
  }[]
}

const ResultPill = ({ searchQueryString, pokemonNames }: ResultPillProps): JSX.Element => {
  const [filteredPokemonNames, setFilteredPokemonNames] = useState<string[]>([]);

  useEffect(() => {
    const filteredNames: string[] = pokemonNames
      .filter((pokemon) => pokemon.name
        .toLowerCase()
        .startsWith(searchQueryString.toLowerCase()))
        .sort()
        .map((pokemon) => pokemon.name)

    setFilteredPokemonNames(filteredNames);
  }, [searchQueryString])
  
  return (
    <div className='w-full h-auto flex flex-row justify-start items-center flex-wrap border-1 border-gray-5 mt-1 rounded-sm'>
      {filteredPokemonNames && (
        filteredPokemonNames.map((name, index) => {
          return (
            <span
              key={index}
              className="inline bg-black px-1 text-forground rounded-sm text-[0.4rem] m-0.5"
            >
              {name}
            </span>
          )
        })
      )}
    </div>
  )
}

export default ResultPill;