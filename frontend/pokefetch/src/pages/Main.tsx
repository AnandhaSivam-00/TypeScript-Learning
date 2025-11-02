import type {JSX} from 'react'

import SearchSection from '../components/SearchSection';
import OutputSeaction from '../components/OutputSection';

const Main = (): JSX.Element => {
  return (
    <section className='w-full h-auto px-3 py-2'>
      <SearchSection />
      <OutputSeaction />
    </section>
  )
}

export default Main;