'use client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy, Suspense, type JSX} from 'react'

const Home = lazy(() => import('./pages/index'));
const OutputSection = lazy(() => import('./components/card'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

import LoadingScreen from './components/loading/LoadingScreen';

import './App.css'

function App(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='poke-search' element={<OutputSection />} />
          </Route>  
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>  
    </Suspense>
  )
}

export default App
