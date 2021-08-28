import {someReducer} from "./someReducer";
import {usersReducer} from "./usersReducer";
import {combineReducers} from "redux";

export let rootReducer = combineReducers({someReducer,usersReducer})

