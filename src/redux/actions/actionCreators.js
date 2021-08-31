import {LOAD_USERS, ADD_USER} from "./actionTypes";

export const loadUsers = (payload) => ({type: LOAD_USERS, payload})
export const addUser = (payload) => ({type: ADD_USER, payload})

