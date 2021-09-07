import {useEffect} from "react";
import {getTopRatedMovies} from "../../services/movie.service";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesTopRated} from "../../redux/actions";
import {Loader} from "../loader/Loader";


export const MoviesTopRated = () => {

    let {light_theme} = useSelector(state => state.themeReducer)
    let {moviesTopRated} = useSelector(state => state.moviesReducer)

    let dispatch = useDispatch()

    useEffect(() => {
      getTopRatedMovies().then(({data:{results}}) => {
          dispatch(getMoviesTopRated(results))
          dispatch({type:"LOADING_STATUS", payload:false})
      })
    },[dispatch])

    return (
        <>
          { moviesTopRated.length === 0 ? <Loader/> :
          <div className={light_theme ? 'light-theme-bg' : 'dark-theme-bg'}>
              <div className={'movies-list'}>
                  {
                      moviesTopRated.map(value => <MoviesListCard key={value.id} item={value}/>)
                  }
              </div>
          </div> }
        </>
    )
}
