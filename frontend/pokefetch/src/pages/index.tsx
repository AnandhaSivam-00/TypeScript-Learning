import { useEffect, useState, type JSX } from 'react'
import { Outlet, useLocation } from 'react-router'

import PokemonNamesContextProvider from '../utils/PokemonNamesContextProvider';

import { getCurrentTimePeriod } from '../utils/helperFunctions';

import PokeFetchLogoOriginal from '../assets/pokefetch-icon-original.png';
import PokeFetchLogo from '../assets/pokefetch-icon-v1.svg';
import SearchSection from '../components/SearchSection';
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
          <header className='w-full h-auto fixed top-0 px-3 py-2 bg-black/70 backdrop-blur-sm flex flex-row justify-start items-center gap-x-2 md:gap-x-4 shadow-xl'>
            <img
              src={PokeFetchLogo}
              alt='PokéFetch Logo'
              className='w-auto h-7 sm:h-9 md:h-10 object-contain'
            />
            <h3 className='text-foreground! select-none mb-0!'>Poké<span className='text-primary'>Fetch</span></h3>
          </header>
        ) : null
      }

      <div className='w-full h-screen flex flex-col justify-center items-center'>
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
          <section className='w-full h-auto px-3 py-2'>
            <SearchSection />
          </section>

          <Outlet />
        </PokemonNamesContextProvider>
      </div>
      
      <footer className='bg-black-background w-full h-auto px-3 py-2 pt-4 overflow-hidden'>
        <div className='w-full relative bg-transparant z-1'>
          <h5 className='font-semibold!'>BY LITTLE THINKER</h5>
          
          <div className='w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start gap-2 [&>span,a]:text-xs [&>span,a]:text-gray-4'>
            <span>@{new Date().getFullYear()}</span>
            <a href="" target='_blank' className='underline hover:text-black-accent-2'>github.com/AnandhaSivam-00</a>
          </div> 
          
          <a href='https://pokeapi.co/' target='_blank' className='w-full text-[0.5rem] text-black-accent-1 underline hover:text-black-accent-2 mt-1'>Credits: PokéAPI</a>

          <img 
            src={PokeFetchLogoOriginal}
            alt='footer back logo'
            className='w-auto h-full object-cover absolute right-0 bottom-0 z-0 opacity-20 transform translate-x-5 translate-y-5 -rotate-30 pointer-events-none'
          />
        </div>
      </footer>
    </main>
  )
}

export default Home;