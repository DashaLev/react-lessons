import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";
import {genresReducer} from "./genresReducer";
import {themeReducer} from "./themeReducer";


export const rootReducer = combineReducers({moviesReducer, genresReducer, themeReducer})