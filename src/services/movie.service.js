import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{
        Authorization :"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGY1Y2NlMDUzYmJiYjkwODJkYjI0MDVmNjUzODgzZiIsInN1YiI6IjYxMzA4ZGFmZmJlMzZmMDA2NWM0MmNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k5QKdjIbKYrigEki4bEGzAoGyRnpSz6K8XhCUL76BPs"
    }
})
const getFirstPageMovies = async () =>  await axiosInstance.get(`/discover/movie`)
const getMovies = async (pageNumber) =>  await axiosInstance.get(`/discover/movie?page=${pageNumber}`)

const getMovie = async (id) =>  await axiosInstance.get(`/movie/${id}`)

const getGenres = async () =>  await axiosInstance.get(`/genre/movie/list`)

const getMovieVideo = async (id) =>  await axiosInstance.get(`/movie/${id}/videos`)
const getTopRatedMovies = async () =>  await axiosInstance.get(`/movie/top_rated`)
const getUpcomingMovies = async () =>  await axiosInstance.get(`/movie/upcoming`)

export {getFirstPageMovies,getMovies, getMovie, getGenres,getMovieVideo, getTopRatedMovies,getUpcomingMovies}

