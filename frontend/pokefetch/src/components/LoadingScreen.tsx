import type {JSX} from 'react'

import PokeFetchLogoOriginal from '../assets/pokefetch-icon-original.png'

const LoadingScreen = (): JSX.Element => {
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center'>
      <img 
        src={PokeFetchLogoOriginal}
        alt='PokeFetch loding logo'
        className='w-auto h-10 object-contain mb-3 opacity-70 animate-spin'
      />
      <h6 className='animate-pulse'>Loading...</h6>
    </section>
  )
}

export default LoadingScreen;