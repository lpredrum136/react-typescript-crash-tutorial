import { TopMovieActionType } from './types'

const { GET_TOP_MOVIES } = TopMovieActionType

export interface TopMovie {
  title: string
  rating: string
}

type TopMovieAction = {
  type: typeof GET_TOP_MOVIES // neu de string se mat bot check case type safe o duoi
  payload: TopMovie[]
}

export const topMovieReducer = (state: TopMovie[], action: TopMovieAction) => {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return action.payload

    default:
      return state
  }
}
