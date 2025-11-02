import type {JSX} from 'react'

import SearchSection from '../components/SearchSection';

const Main = (): JSX.Element => {
  return (
    <section className='w-full h-auto'>
      <SearchSection />
    </section>
  )
}

export default Main;