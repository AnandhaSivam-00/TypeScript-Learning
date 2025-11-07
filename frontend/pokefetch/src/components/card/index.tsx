import {useEffect, useState, lazy, Suspense, type JSX} from 'react'
import { useSearchParams } from 'react-router-dom';

const RoundedPill = lazy(() => import('./RoundedPill'));
const CardTail = lazy(() => import('./CardTail'));
const GenderRenderer = lazy(() => import('./GenderRenderer'));
const StatsTable = lazy(() => import('./StatsTable'));

import ErrorBlock from '../ErrorBlock';
import LoadingState from '../loading/LoadingState';

import { getPokemonDetails } from '../../utils/dataFetchingAndFormatting';
import { changeFirstLetterToUpperCase, removeHypens } from '../../utils/helperFunctions';

import { 
  type ErrorType, 
  type PokemonDetailsType,
  type PokeTypesColorType
} from '../../utils/types';

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
    <section className='w-full h-auto px-2'>
      {isLoading && (
        <LoadingState />
      )}

      {errorMessage && (
        <div className='w-full h-auto flex justify-center items-center px-2'>
          <ErrorBlock message={errorMessage} />
        </div>
      )}

      {pokemonDetails && (
        <Suspense fallback={<LoadingState />}>
          <div className='mx-auto w-full lg:w-[55rem] xl:w-[68rem] h-5xl grid grid-cols-12 border-1 border-gray-5 rounded-md p-2 md:p-4 shadow-xl mb-5'>
            <div className='col-span-12 md:col-span-5 flex flex-col justify-start items-start me-0 md:me-5 lg:me-0'>
                <div className='flex flex-col justify-center items-start gap-y-1'>
                    <h1 className='font-semibold! text-wrap'>{changeFirstLetterToUpperCase(removeHypens(pokemonDetails?.name))} <sup className='align-super text-xs text-gray-2'>#{pokemonDetails?.order}</sup></h1>
                    
                  <div className='flex flex-row flex-wrap justify-start items-center gap-2'>
                    {pokemonDetails.type.map((item, index) => {
                        return (
                          <RoundedPill 
                            key={index}
                            text={changeFirstLetterToUpperCase(item)}
                            color={item as PokeTypesColorType}
                          />
                        )
                    })}
                  </div>
                </div>
                <div className='relative py-5 self-center'>
                  {pokemonDetails.sprites.gif ? (
                    <img 
                      src={pokemonDetails.sprites.gif} 
                      alt={pokemonDetails.name} 
                      className="w-30 h-30 object-contains"
                      loading='eager'
                    />
                  ) : (
                    <img 
                      src={pokemonDetails.sprites.img} 
                      alt={pokemonDetails.name} 
                      className="w-40 h-40 object-cover"
                      loading='eager'
                    />
                    
                  )}
                  <div 
                    className='absolute top-1/2 right-[30%] w-30 h-25'
                  >
                    <div className='w-full h-full bg-white/0 hover:bg-white/50 blur-2xl transform-3d skew-y-10 -skew-x-3 -translate-y-5 -rotate-20 rounded-[3rem]transition-all duration-500 ease-in' />
                  </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-7 flex flex-col justify-start items-start gap-y-10 md:gap-y-7'>
              <div className='w-auto h-auto'>
                <h5 className='font-semibold!'>Story</h5>
                <p className='text-wrap mb-0! text-sm! md:text-xl!'>{pokemonDetails.about}</p>
              </div>

              <div className='w-full h-auto'>
                <h5 className='font-semibold!'>Metrics</h5>
                <div className='w-auto h-auto flex flex-row flex-wrap justify-evenly sm:justify-between md:justify-start items-center gap-x-2 gap-y-2'>
                  <CardTail>
                    <h6>Height</h6>
                    <p>{pokemonDetails.height / 10}m</p>
                  </CardTail>
                  <CardTail>
                    <h6>Weight</h6>
                    <p>{pokemonDetails.weight / 10}kg</p> 
                  </CardTail>
                  <CardTail>
                    <h6>Gender</h6>
                    <GenderRenderer genderRate={pokemonDetails.gender_rate} />
                  </CardTail>
                  <CardTail>
                    <h6>Category</h6>
                    <p>{changeFirstLetterToUpperCase(pokemonDetails.category)}</p> 
                  </CardTail>
                  {/* <CardTail>
                    <h6 className='text-sm! mb-0!'>Abilities</h6>
                    <p className='mb-0! text-xl!'>{pokemonDetails?.abilities?.join(', ')}</p>
                  </CardTail> */}
                </div>
              </div>

              <div className="w-auto h-auto">
                <h5 className='font-semibold!'>Abilities</h5>
                <div className="flex flex-row justify-start items-center gap-3">
                  {pokemonDetails?.abilities.map((item, index) => {
                    return (
                      <span 
                        key={index}
                        className="bg-black px-3 py-1 rounded-md text-xs md:text-sm"
                      >
                        {changeFirstLetterToUpperCase(removeHypens(item))}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="w-full h-auto">
                <h5 className='font-semibold!'>Stats</h5>
                <div className="w-full">
                  {pokemonDetails.stats && (
                    <StatsTable statsData={pokemonDetails.stats} color={pokemonDetails.color}/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      )}
    </section>
  )
}

export default OutputSection;