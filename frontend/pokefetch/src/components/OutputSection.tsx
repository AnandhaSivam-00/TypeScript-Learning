import {useEffect, useState, type JSX} from 'react'
import { useSearchParams } from 'react-router-dom';

import ErrorBlock from './ErrorBlock';
import LoadingState from './LoadingState';

import { getPokemonDetails } from '../utils/dataFetchingAndFormatting';

import { type ErrorType, type PokemonDetailsType } from '../utils/types';

const OutputSection = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsType | null>(null);

  const [searchParams] = useSearchParams();
  const pokemonName = searchParams.get('name');


  useEffect(() => {
    if(!pokemonName) {
      setIsLoading(false);
      setErrorMessage(null);
      setPokemonDetails(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setPokemonDetails(null);

    (async () => {
      const result: PokemonDetailsType | ErrorType = await getPokemonDetails(pokemonName);

      if('message' in result) {
        setErrorMessage(result.message);
        setIsLoading(false);
        return;
      }

      setPokemonDetails(result);
      setIsLoading(false);
    })();

  }, [pokemonName]);

  return (
    <section className='w-full h-auto'>
      {isLoading && (
        <LoadingState />
      )}

      {errorMessage && (
        <div className='w-full h-auto flex justify-center items-center px-2'>
          <ErrorBlock message='This is an error message. jkvb;ovfjbgslcnergbcxvnergvsdifvblerigndfnberkdfvb;df' />
        </div>
      )}

      {pokemonDetails && (
        <p>{pokemonDetails.name}</p>
      )}
    </section>
  )
}

export default OutputSection;