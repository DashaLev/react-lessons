import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMovies} from "../../services/movie.service";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import './MoviesList.css'


export const MoviesList = () => {

    let {movies} = useSelector(state => state.moviesReducer)
    let dispatch = useDispatch()

    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(null)

    useEffect(()=>{
        getMovies(pageNumber).then(({data:{results,total_pages}}) => {
            dispatch({type: 'GET_MOVIES', payload: results})
            setTotalPages(total_pages)
        })
    },[pageNumber,dispatch])

    return (
       <div className={'movies-list-wrap'}>
               <div className={'movies-list'}>
                   {
                       movies.map(value =>  <MoviesListCard key={value.id} item={value}/>)
                   }
               </div>
               <button
                   onClick={()=> setPageNumber(prevState => prevState + 1)}
                   disabled={pageNumber === totalPages}
               >More movies</button>
       </div>
    )
}