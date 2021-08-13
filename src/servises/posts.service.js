import axios from "axios";

const axiosInstance = axios.create({baseURL: " https://jsonplaceholder.typicode.com"})

const getPostsByUserId = (userId) => {
    return axiosInstance.get(`/users/${userId}/posts`)
}
const getPosts = () => {
    return axiosInstance.get(`/posts`)
}


export {getPostsByUserId,getPosts}
