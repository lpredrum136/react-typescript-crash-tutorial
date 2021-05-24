import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProgressContextProvider from './contexts/ProgressContext'
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvider from './contexts/ThemeContext'
import Movies from './components/Movies'
import MovieContextProvider from './contexts/MovieContext'

function App() {
	return (
		<div>
			<MovieContextProvider>
				<ThemeContextProvider>
					<ProgressContextProvider>
						<Navbar />
						<Movies />
						<ToggleTheme />
					</ProgressContextProvider>
				</ThemeContextProvider>
			</MovieContextProvider>
		</div>
	)
}

export default App
