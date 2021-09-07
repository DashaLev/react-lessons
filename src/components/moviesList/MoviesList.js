import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFirstPageMovies, getMovies} from "../../services/movie.service";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import './MoviesList.css'
import {getMoreMoviesListPage, getMoviesList} from "../../redux/actions";
import {Loader} from "../loader/Loader";

export const MoviesList = () => {

    let {moviesList} = useSelector(state => state.moviesReducer)
    let {light_theme} = useSelector(state => state.themeReducer)

    let dispatch = useDispatch()

    let [pageNumber, setPageNumber] = useState(2)
    let [totalPages, setTotalPages] = useState(null)

    useEffect(()=> {
        getFirstPageMovies().then(({data:{results ,total_pages}}) => {
            dispatch(getMoviesList(results))
            setTotalPages(total_pages)
        })
    },[dispatch])

    const getMoreMovies = (pageNumber) => {
        getMovies(pageNumber).then(({data:{results}}) => {
            dispatch(getMoreMoviesListPage(results))
        })
    }

    return (
        <>
           { moviesList.length === 0 ? <Loader/> :
           <div className={light_theme ? 'light-theme-bg' : 'dark-theme-bg'}>
               <div className={'movies-list'}>
                   {
                       moviesList.map(value => <MoviesListCard key={value.id} item={value} movies={moviesList}/>)
                   }
               </div>
               <button
                   onClick={()=> {
                       setPageNumber(prevState => prevState + 1)
                       getMoreMovies(pageNumber)
                   }}
                   disabled={pageNumber === totalPages}
                   className={light_theme ? 'more-movies light-button' : 'more-movies dark-button'}
               >More movies</button>
           </div> }
        </>
    )
}