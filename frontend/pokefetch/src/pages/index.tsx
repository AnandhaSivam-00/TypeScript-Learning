import { lazy, useEffect, useState, type JSX } from 'react'
import { Outlet, useLocation } from 'react-router'

const SearchSection = lazy(() => import('../components/search'));
const Footer = lazy(() => import('../components/Footer'))

import PokemonNamesContextProvider from '../utils/PokemonNamesContextProvider';

import { getCurrentTimePeriod } from '../utils/helperFunctions';

import PokeFetchLogo from '../assets/pokefetch-icon-v1.svg';
// import PokeFetchLogo from '../assets/pokefetch-icon-v2.svg';
// import PokeFetchLogo from '../assets/pokefetch-icon-v3.svg';

const Home = (): JSX.Element => {
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const [greetingMessage, setGreetingMessage] = useState<string>("morning");
  
  const currentPath: string = useLocation().pathname;

  useEffect(() => {
    if(currentPath === '/') {
      setSearchFocus(false);
    }
    else {
      setSearchFocus(true);
    }

    setGreetingMessage(getCurrentTimePeriod())
  }, [currentPath])
  
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center relative'>
      
      {searchFocus ? (
          <header className='z-10 w-full h-auto fixed top-0 px-3 py-2 bg-black/70 backdrop-blur-sm flex flex-row justify-start items-center gap-x-2 md:gap-x-4 shadow-xl'>
            <img
              src={PokeFetchLogo}
              alt='PokéFetch Logo'
              className='w-auto h-7 sm:h-9 md:h-10 object-contain'
            />
            <h3 className='text-foreground! select-none mb-0!'>Poké<span className='text-primary'>Fetch</span></h3>
          </header>
        ) : null
      }

      <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        {searchFocus ? null : (
            <section className='w-full h-auto flex flex-col sm:flex-row justify-center items-center gap-3 my-5'>
              <img 
                src={PokeFetchLogo}
                alt='PokéFetch Logo'
                className='w-auto h-15 sm:h-9 md:sm-11 object-contain'
              />
              <h1 className='font-normal! text-black-accent-1! mb-0! text-center'>Good {greetingMessage}, 
                <span className='text-primary'> bro</span>
              </h1>
            </section>
          )
        }

        <PokemonNamesContextProvider>
          <section className={`w-full h-auto px-3 py-2 ${searchFocus ? 'mt-20' : ''}`}>
            <SearchSection />
          </section>

          <Outlet />
        </PokemonNamesContextProvider>
      </div>
      
      <Footer />
    </main>
  )
}

export default Home;