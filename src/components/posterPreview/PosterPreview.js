import './PosterPreview.css'

export const PosterPreview = ({poster_path, backdrop_path}) => {
  return (
      <div>
          {
              poster_path && !backdrop_path && <img src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt={'Movie poster'} className={'list-picture'}/>
          }
          {
             backdrop_path && poster_path &&
              <>
                  <img src={`http://image.tmdb.org/t/p/original${backdrop_path}`} alt={'Movie poster'} className={'bg-picture'}/>
                  <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={'Movie poster'}/>
              </>
          }

      </div>
  )
}