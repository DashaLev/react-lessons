import {CHANGE_THEME, GET_GENRES, GET_MORE_MOVIES, GET_MOVIES} from "./actionTypes";

export const getMoviesList = (payload) => ({type: GET_MOVIES, payload})
export const getMoreMoviesPage = (payload) => ({type:GET_MORE_MOVIES, payload})
export const getMoviesGenres = (payload) => ({type:GET_GENRES, payload})
export const setThemeColor = (payload) => ({type:CHANGE_THEME, payload})
