import {useEffect, useState} from "react";
import {getMovie, getMovieVideo} from "../../services/movie.service";
import {PosterPreview} from "../posterPreview/PosterPreview";
import {MovieInfo} from "../movieInfo/MovieInfo";
import {MovieVideos} from "../movieVideos/MovieVideos";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import './MovieDetails.css'
import {useSelector} from "react-redux";

export const MovieDetails = (props) => {
    let {match: {url, params: {id}}} = props;

    let [movie, setMovie] = useState(null)
    let [movieVideo, setMovieVideo] = useState(null)

    let {light_theme} = useSelector(state => state.themeReducer)

    useEffect( ()=> {
        getMovie(id).then(({data}) => setMovie(data))
        getMovieVideo(id).then(({data}) => setMovieVideo(data.results))
    },[id])

    return (
      <div className={light_theme ? 'movies-details-light-theme' : 'movies-details-dark-theme' }>
          { movie &&
              <div className={'poster_info'}>
                  <PosterPreview
                      backdrop_path={movie.backdrop_path}
                      poster_path={movie.poster_path}/>
                  <MovieInfo movie={movie}/>
              </div>
          }
          {
              movieVideo !== null && movieVideo.length !== 0  ?
              <div>
                  <h3 className={'videos-title'}>Movie trailers, behind the scene and others videos</h3>
                  <div className={'video-block-wrap'}>
                      <ol className={'video-links-list'}>
                          {movieVideo.map(value => <Link key={value.id} to={{
                              pathname: url + '/' + value.id,
                              state: value
                          }} className={light_theme ? 'link-light-theme' : 'link-dark-theme'}>{value.name}</Link>)}
                      </ol>
                      <Route path={`${url}/:id`} render={(props) => {
                          return <MovieVideos {...props} />
                      }}/>
                  </div>
              </div> : null
          }
      </div>
  )
}

