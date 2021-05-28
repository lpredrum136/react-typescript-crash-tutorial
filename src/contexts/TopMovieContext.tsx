import axios from 'axios'
import { ReactNode, useReducer, createContext } from 'react'
import { topMovieReducer } from '../reducers/TopMovieReducer'

interface TopMovieContextProps {
  children: ReactNode
}

interface TopMovieContextDefault {
  getTopMovies: () => Promise<void> // or: () => void
}

export const TopMovieContext = createContext<TopMovieContextDefault>({
  getTopMovies: () => Promise.resolve(void 0) // then here it can be () => null or () => {}
})

const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, [])

  const getTopMovies = async () => {
    const topMovies = await Promise.all([
      axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=fe5a9562`)
    ])

    console.log(topMovies)
  }

  const topMovieContextData = {
    getTopMovies
  }

  return (
    <TopMovieContext.Provider value={topMovieContextData}>
      {children}
    </TopMovieContext.Provider>
  )
}

export default TopMovieContextProvider
