import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {type JSX} from 'react'

import Home from './pages/index'
import PageNotFound from './components/PageNotFound'
import OutputSection from './components/OutputSection'

import './App.css'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='poke-search' element={<OutputSection />} />
        </Route>  
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
