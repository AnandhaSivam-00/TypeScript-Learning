import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/index'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='poke-search' element={<h1>Search</h1>} />
        </Route>  
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
