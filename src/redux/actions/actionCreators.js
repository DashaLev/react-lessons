import {CHANGE_THEME, GET_GENRES, GET_NEXT_MOVIES_LIST_PAGE, GET_MOVIES_LIST, GET_TOP_RATED_MOVIES, GET_UPCOMING_MOVIES} from "./actionTypes";

export const getMoviesList = (payload) => ({type: GET_MOVIES_LIST, payload})
export const getMoreMoviesListPage = (payload) => ({type:GET_NEXT_MOVIES_LIST_PAGE, payload})
export const getMoviesGenres = (payload) => ({type:GET_GENRES, payload})
export const setThemeColor = (payload) => ({type:CHANGE_THEME, payload})
export const getMoviesTopRated = (payload) => ({type:GET_TOP_RATED_MOVIES, payload})
export const getMoviesUpcoming = (payload) => ({type:GET_UPCOMING_MOVIES, payload})


