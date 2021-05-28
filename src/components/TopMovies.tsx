import { useContext, useEffect } from 'react'
import { TopMovieContext } from '../contexts/TopMovieContext'

const TopMovies = () => {
  const { getTopMovies } = useContext(TopMovieContext)

  useEffect(() => {
    getTopMovies()
  }, [getTopMovies])

  return <div>Top Movies</div>
}

export default TopMovies
