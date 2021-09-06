import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUpcomingMovies} from "../../services/movie.service";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";

export const MoviesUpcoming = () => {

    let {light_theme} = useSelector(state => state.themeReducer)
    let [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        getUpcomingMovies().then(({data:{results}}) => setUpcomingMovies([...results]))
    },[])

    return (
        <div className={light_theme ? 'light-theme-bg' : 'dark-theme-bg'}>
            <div className={'movies-list'}>
                {
                    upcomingMovies.map(value => <MoviesListCard key={value.id} item={value}/>)
                }
            </div>
        </div>
    )
}