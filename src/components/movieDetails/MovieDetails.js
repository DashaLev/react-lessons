import {useEffect, useState} from "react";
import {getMovie, getMovieVideo} from "../../services/movie.service";
import {PosterPreview} from "../posterPreview/PosterPreview";
import {MovieInfo} from "../movieInfo/MovieInfo";
import {MovieVideos} from "../movieVideos/MovieVideos";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import './MovieDetails.css'

export const MovieDetails = (props) => {
    let {match: {url, params: {id}}} = props;

    let [movie, setMovie] = useState(null)
    let [movieVideo, setMovieVideo] = useState(null)

    useEffect( ()=> {
        getMovie(id).then(({data}) => setMovie(data))
        getMovieVideo(id).then(({data}) => setMovieVideo(data.results))
    },[id])

    return (
      <div>
          { movie &&
              <>
                  <PosterPreview
                      backdrop_path={movie.backdrop_path}
                      poster_path={movie.poster_path}/>
                  <MovieInfo movie={movie}/>
              </>
          }
          {
              movieVideo &&
              <div className={'video-block-wrap'}>
                  <ol className={'video-links-list'}>
                      {movieVideo.map(value => <Link key={value.id} to={{
                          pathname: url + '/' + value.id,
                          state: value
                      }}>{value.name}</Link>)}
                  </ol>
                  <Route path={`${url}/:id`} render={(props) => {
                      return <MovieVideos {...props} />
                  }}/>
              </div>
          }

      </div>
  )
}

