import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProgressContextProvider from './contexts/ProgressContext'
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
	return (
		<div>
			<ThemeContextProvider>
				<ProgressContextProvider>
					<Navbar />
					<header className='App-header'>Hello world</header>
					<ToggleTheme />
				</ProgressContextProvider>
			</ThemeContextProvider>
		</div>
	)
}

export default App
