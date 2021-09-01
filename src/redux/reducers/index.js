import {combineReducers} from "redux";
import {todoItemReducer} from "./todoItemReducer";
import {todoListReducer} from "./todoListReducer";

export let rootReducer = combineReducers({todoItemReducer, todoListReducer})