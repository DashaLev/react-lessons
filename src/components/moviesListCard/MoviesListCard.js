import {Link} from "react-router-dom";
import {PosterPreview} from "../posterPreview/PosterPreview";
import {MovieInfo} from "../movieInfo/MovieInfo";
import {GenreBadge} from "../genreBadge/GenreBadge";
import './MoviesListCard.css'

export const MoviesListCard = ({movies,item}) => {

    return (
      <div className={'movies-list-card-wrap'}>
          <Link to={{pathname: '/movie/' + item.id, state: item, movies}}>
              <PosterPreview poster_path={item.poster_path}/>
              <MovieInfo item={item}/>
              <GenreBadge genre_ids={item.genre_ids}/>
          </Link>
      </div>
  )
}


