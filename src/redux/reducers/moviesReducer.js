const initialState = {movies:[]}

export const moviesReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_MOVIES':
         return {...state, movies:[...action.payload]}
      case 'GET_MORE_MOVIES':
         return {...state, movies:[...state.movies, ...action.payload]}
      default:
         return state
   }
}
