import './MovieInfo.css'


export const MovieInfo = ({item, movie}) => {

    return (
      <>
          {
              item &&
          <div className={'movie-list-info'}>
              {
                  item.title.length <= 20 && <h2>{item.title}</h2>
              }
              {
                  item.title.length >= 21 && item.title.length <= 22 && <h3>{item.title}</h3>
              }
              {
                  item.title.length >= 23 && item.title.length <= 28 && <h4>{item.title}</h4>
              }
              {
                  item.title.length >= 29 && item.title.length <= 40 && <h5>{item.title}</h5>
              }
              {
                  item.title.length >= 41 && <h6>{item.title}</h6>
              }
              <div className={'release_date'}>Release: {item.release_date}</div>
              <div className={'popularity_rating'}>
                  <div>Popularity: {item.popularity}</div>
                  <div>Rating: {item.vote_average} ({item.vote_count})</div>
              </div>
              <div className={'overview'}>
                  {item.overview &&
                      <>
                          <span>Movie description:</span><br/><br/>
                          {item.overview.split('.')[0]} {item.overview.split('. ')[1]}...
                      </>
                  }
                  {!item.overview &&
                  <>
                      <span>Movie description:</span><br/><br/>
                     No description:(
                  </>
                  }
              </div>
          </div>
          }
          {
              movie &&
              <div>
                  <h1>{movie.title}</h1>
                  <h2>{movie.tagline}</h2>
                  <p>{movie.overview}</p>
                  <a href={movie.homepage}>Homepage</a>
                  <div>
                      Popularity:{movie.popularity}, Vote average:{movie.vote_average}, Vote count:{movie.vote_count}
                      Release date: {movie.release_date}
                      Genre:{movie.genres.map(value => <div key={value.id}>{value.name}</div>)}
                      Production countries: {movie.production_countries.map((value,index) => <div key={index}>{value.name}</div>)}
                      Production companies: {movie.production_companies.map(value =>
                                                          <div key={value.id}>
                                                              <h6>{value.name}</h6>
                                                              {value.logo_path &&
                                                              <img src={`http://image.tmdb.org/t/p/w45${value.logo_path}`} alt={'Logo company'}/>}
                                                          </div>)}
                  </div>
              </div>
          }
      </>
  )
}










