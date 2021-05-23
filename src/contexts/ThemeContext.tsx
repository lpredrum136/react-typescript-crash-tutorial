import { PropTypes } from '@material-ui/core'
import { createContext, ReactNode, useState } from 'react'

interface ThemeContextProps {
	children: ReactNode
}

export interface ThemeContextDefault {
	theme: PropTypes.Color
	toggleTheme: (theme: PropTypes.Color) => void
}

export const ThemeContext = createContext<ThemeContextDefault | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
	const defaultTheme: PropTypes.Color = 'primary'

	const [theme, setTheme] = useState<PropTypes.Color>(defaultTheme)

	const toggleTheme = (theme: PropTypes.Color) => setTheme(theme)

	const themeContextData = { theme, toggleTheme }

	return (
		<ThemeContext.Provider value={themeContextData}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
