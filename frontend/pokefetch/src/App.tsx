import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Suspense, type JSX} from 'react'

import Home from './pages/index'
import Main from './pages/Main'
import LoadingScreen from './components/LoadingScreen'
import PageNotFound from './components/PageNotFound'

import './App.css'

function App(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='poke-search' element={<Main />} />
          </Route>  
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>  
  )
}

export default App
