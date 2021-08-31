import {applyMiddleware, createStore} from "redux";
import {usersReducer} from "../reducers/usersReducer";
import ReduxThunk from "redux-thunk";

export let store = createStore(usersReducer,applyMiddleware(ReduxThunk));