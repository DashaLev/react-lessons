import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";
import {genresReducer} from "./genresReducer";

export const rootReducer = combineReducers({moviesReducer, genresReducer})