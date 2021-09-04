import './MovieInfo.css'
import {useSelector} from "react-redux";


export const MovieInfo = ({item, movie}) => {

    let {light_theme} = useSelector(state => state.themeReducer)

    return (
      <>
          {
              item &&

              <div className={light_theme === false ? 'movie-list-info color-lg' : 'movie-list-info'}>
                  { item.title.length <= 20 && <h2>{item.title}</h2> }
                  { item.title.length >= 21 && item.title.length <= 22 && <h3>{item.title}</h3> }
                  { item.title.length >= 23 && item.title.length <= 28 && <h4>{item.title}</h4> }
                  { item.title.length >= 29 && item.title.length <= 40 && <h5>{item.title}</h5> }
                  { item.title.length >= 41 && <h6>{item.title}</h6> }
                  <div className={light_theme === false ? 'release_date color-lg' : 'release_date'}>
                      Release: {item.release_date}
                  </div>
                  <div className={'popularity_rating'}>
                      <div>Popularity: {item.popularity}</div>
                      <div>Rating: {item.vote_average} ({item.vote_count})</div>
                  </div>
                  <div className={'overview'}>
                      {item.overview &&
                          <>
                              <span>Movie description:</span><br/><br/>
                              {item.overview}
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

              <div className={'movie-details-info'}>
                  <h1>{movie.title}</h1>
                  {movie.tagline && <h2 className={'tagline'}>"{movie.tagline}"</h2>}
                  <p className={'description'}>{movie.overview}</p>
                  <div className={'rating-block'}>
                      Popularity: <span>{movie.popularity}</span>,
                      Vote average: <span className={movie.vote_average >= 7 ? 'color-green' : 'color-red'}>{movie.vote_average}</span>,
                      Vote count: <span>{movie.vote_count}</span>
                  </div>
                  <div className={'release_budget-info'}>
                      Release date: <span>{movie.release_date} </span>
                      {
                          movie.budget !== 0 && movie.revenue !== 0 &&
                              <>
                                  Budget: <span>${movie.budget} </span>
                                  Revenue: <span className={movie.budget > movie.revenue ? 'color-red' : 'color-green'}>${movie.revenue}</span>
                              </>
                      }
                  </div>
                  <div className={'genre-group'}>
                      Genre:{movie.genres.map(value => <div key={value.id}>{value.name} |</div>)}
                  </div>
                  <div className={'production_countries-group'}>
                      Production countries: {movie.production_countries.map((value,index) => <div key={index}>{value.name}</div>)}
                  </div>
                  <div className={'production_companies-group'}>
                      Production companies:
                            {movie.production_companies.map(value =>
                                  <div key={value.id}>
                                      {
                                          value.logo_path &&
                                          <img src={`http://image.tmdb.org/t/p/w45${value.logo_path}`} alt={'Logo company'}/>
                                      }
                                      <span>{value.name} |</span>
                                  </div>)
                            }
                  </div>
                  <a href={movie.homepage} className={light_theme ? 'link-black' : 'link-light'}>Homepage</a>
              </div>
          }
      </>
  )
}










