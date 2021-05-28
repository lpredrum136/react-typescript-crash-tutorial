import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProgressContextProvider from './contexts/ProgressContext'
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvider from './contexts/ThemeContext'
import Movies from './components/Movies'
import MovieContextProvider from './contexts/MovieContext'
import TopMovieContextProvider from './contexts/TopMovieContext'
import TopMovies from './components/TopMovies'

function App() {
  return (
    <div>
      <TopMovieContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <TopMovies />
              <Movies />
              <ToggleTheme />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </TopMovieContextProvider>
    </div>
  )
}

export default App
