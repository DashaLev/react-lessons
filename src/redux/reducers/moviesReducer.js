const initialState = {moviesList:[],moviesTopRated:[],moviesUpcoming:[]}

export const moviesReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_MOVIES_LIST':
         return {...state, moviesList:[...action.payload]}
      case 'GET_NEXT_MOVIES_LIST_PAGE':
         return {...state, moviesList:[...state.moviesList, ...action.payload]}
      case 'GET_TOP_RATED_MOVIES':
         return {...state, moviesTopRated:[...action.payload]}
      case 'GET_UPCOMING_MOVIES':
         return {...state, moviesUpcoming:[...action.payload]}
      default:
         return state
   }
}
