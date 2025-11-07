import type {JSX} from 'react'

import PokemonShadow from '../../assets/pokemon-shadow-mask.png';

const LoadingState = (): JSX.Element => {
  return (
    <div className='w-auto h-auto'>
        <img 
            src={PokemonShadow}
            alt='Pokemon Shadow'
            className='w-20 h-30 mx-auto animate-pulse'
            loading='eager'
        />
        <p className='text-center mt-2 text-xs!'>Fetching Pokemon details...</p>
    </div>
  )
}

export default LoadingState