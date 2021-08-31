import {createStore} from "redux";
import {usersReducer} from "../reducers/usersReducer";

export let store = createStore(usersReducer);