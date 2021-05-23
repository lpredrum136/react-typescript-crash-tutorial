import { createContext, ReactNode } from 'react'

interface ProgressContextProviderProps {
	children: ReactNode
}

export interface ProgressContextDefault {
	lastTime: string
	status: string
}

export const ProgressContext =
	createContext<ProgressContextDefault | null>(null)

const ProgressContextProvider = ({
	children
}: ProgressContextProviderProps) => {
	const progress = {
		lastTime: '22/5/21',
		status: 'In progress'
	}

	return (
		<ProgressContext.Provider value={progress}>
			{children}
		</ProgressContext.Provider>
	)
}

export default ProgressContextProvider
