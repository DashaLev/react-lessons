import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMovies} from "../../services/movie.service";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import './MoviesList.css'


export const MoviesList = () => {

    let {movies} = useSelector(state => state.moviesReducer)
    let dispatch = useDispatch()
    let {light_theme} = useSelector(state => state.themeReducer)

    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(null)


    useEffect(()=> {
        getMovies(pageNumber).then(({data:{results,total_pages}}) => {
            dispatch({type: 'GET_MOVIES', payload: results})
            setTotalPages(total_pages)
        })
    },[pageNumber])

    console.log(movies);

    return (
       <div className={light_theme ? 'light-theme-bg' : 'dark-theme-bg'}>
               <div className={'movies-list'}>
                   {
                       movies.map(value =>  <MoviesListCard key={value.id} item={value}/>)
                   }
               </div>
               <button
                   onClick={()=> setPageNumber(prevState => prevState + 1)}
                   disabled={pageNumber === totalPages}
                   className={light_theme ? 'more-movies light-button' : 'more-movies dark-button'}
               >More movies</button>
       </div>
    )
}