import {ADD_USER, FETCH_USERS} from "./index";


export const fetchUsers = (value) => ({type:FETCH_USERS,payload:value})
export const addUserToStore = (value) => ({type:ADD_USER,payload:value})