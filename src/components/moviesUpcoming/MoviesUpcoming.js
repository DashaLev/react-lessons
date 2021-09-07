import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUpcomingMovies} from "../../services/movie.service";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {getMoviesUpcoming} from "../../redux/actions";
import {Loader} from "../loader/Loader";

export const MoviesUpcoming = () => {

    let {light_theme} = useSelector(state => state.themeReducer)
    let {moviesUpcoming} = useSelector(state => state.moviesReducer)

    let dispatch = useDispatch()

    useEffect(() => {
        getUpcomingMovies().then(({data:{results}}) => {
            dispatch(getMoviesUpcoming(results))
            dispatch({type:"LOADING_STATUS", payload:false})
        })
    },[dispatch])

    return (
        <>
            { moviesUpcoming.length === 0 ? <Loader/> :
            <div className={light_theme ? 'light-theme-bg' : 'dark-theme-bg'}>
                <div className={'movies-list'}>
                    {
                        moviesUpcoming.map(value => <MoviesListCard key={value.id} item={value}/>)
                    }
                </div>
            </div> }
        </>
    )
}