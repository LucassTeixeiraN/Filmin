import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App.jsx'
import Home from './pages/Home.jsx'
import TopMovies from './pages/TopMovies.jsx'
import MovieGenre from './pages/MovieGenre.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/topMovies" element={<TopMovies />} />
          <Route path='/movieGenre' element={<MovieGenre />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
