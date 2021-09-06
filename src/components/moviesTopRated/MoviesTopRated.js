import {useEffect, useState} from "react";
import {getTopRatedMovies} from "../../services/movie.service";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {useSelector} from "react-redux";

export const MoviesTopRated = () => {

    let {light_theme} = useSelector(state => state.themeReducer)
    let [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
      getTopRatedMovies().then(({data:{results}}) => setTopRatedMovies(results))
    },[])

    return (
      <div className={light_theme ? 'light-theme-bg' : 'dark-theme-bg'}>
          <div className={'movies-list'}>
              {
                  topRatedMovies.map(value => <MoviesListCard key={value.id} item={value}/>)
              }
          </div>
      </div>
    )
}
