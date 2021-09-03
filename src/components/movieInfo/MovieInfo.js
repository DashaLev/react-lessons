import './MovieInfo.css'


export const MovieInfo = ({item, movie}) => {

    return (
      <>
          {
              item &&
          <div className={'movie-list-info'}>
              <h2>{item.title}</h2>
              Release: {item.release_date}
              <div className={'popularity_rating'}>
                  <div>Popularity: {item.popularity}</div>
                  <div>Rating: {item.vote_average} ({item.vote_count})</div>
              </div>

              {item.overview}
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










