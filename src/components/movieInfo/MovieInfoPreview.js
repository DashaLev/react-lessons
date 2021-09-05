export const MovieInfoPreview = ({light_theme,item}) => {
  return (
      <div className={light_theme ? 'movie-list-info color-lg' : 'movie-list-info color-dr'}>
          { item.title.length <= 20 && <h2>{item.title}</h2> }
          { item.title.length >= 21 && item.title.length <= 22 && <h3>{item.title}</h3> }
          { item.title.length >= 23 && item.title.length <= 28 && <h4>{item.title}</h4> }
          { item.title.length >= 29 && item.title.length <= 40 && <h5>{item.title}</h5> }
          { item.title.length >= 41 && <h6>{item.title}</h6> }
          <div className={light_theme ? 'release_date color-lg' : 'release_date color-dr'}>
              Release: {item.release_date}
          </div>
          <div className={'popularity_rating'}>
              <div>Popularity: {item.popularity}</div>
              <div>Rating: {item.vote_average} ({item.vote_count})</div>
          </div>
          <div className={'overview'}>
              {
                  item.overview && <><span>Movie description:</span><br/><br/>{item.overview}</>
              }
              {
                  !item.overview && <><span>Movie description:</span><br/><br/>No description:(</>
              }
          </div>
      </div>
  )
}