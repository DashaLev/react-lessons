import axios from "axios";

const axiosInstance = axios.create({baseURL: " https://jsonplaceholder.typicode.com/users"})

const getUsers = () => {
   return axiosInstance.get('')
}

const getUser = (userId) => {
   return axiosInstance.get(`/${userId}`)
}

export {getUsers, getUser}