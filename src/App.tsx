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
import { Grid } from '@material-ui/core'

function App() {
	return (
		<div>
			<TopMovieContextProvider>
				<MovieContextProvider>
					<ThemeContextProvider>
						<ProgressContextProvider>
							<Navbar />
							<Grid container spacing={1}>
								<Grid item xs={4}>
									<TopMovies />
								</Grid>
								<Grid item xs={8}>
									<Movies />
								</Grid>
							</Grid>
							<ToggleTheme />
						</ProgressContextProvider>
					</ThemeContextProvider>
				</MovieContextProvider>
			</TopMovieContextProvider>
		</div>
	)
}

export default App
