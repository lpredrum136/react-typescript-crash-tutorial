import { List, ListItem, ListItemText } from '@material-ui/core'
import { useContext, useEffect } from 'react'
import { TopMovieContext } from '../contexts/TopMovieContext'

const TopMovies = () => {
  const { topMovies, getTopMovies } = useContext(TopMovieContext)

  useEffect(() => {
    getTopMovies()
  }, [getTopMovies])

  return (
    <List>
      <ListItem button>
        <ListItemText />
      </ListItem>
    </List>
  )
}

export default TopMovies
