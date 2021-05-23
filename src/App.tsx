import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProgressContextProvider from './contexts/ProgressContext'

function App() {
	return (
		<div>
			<ProgressContextProvider>
				<Navbar />
				<header className='App-header'>Hello world</header>
			</ProgressContextProvider>
		</div>
	)
}

export default App
