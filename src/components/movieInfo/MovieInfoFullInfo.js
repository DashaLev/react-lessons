export const MovieInfoFullInfo = ({light_theme, movie}) => {
  return (
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
              Production countries: {movie.production_countries.map((value,index) => <div key={index}>{value.name} |</div>)}
          </div>
          <div className={'production_companies-group'}>
              Production companies:
                  {
                      movie.production_companies.map(value =>
                      <div key={value.id}>
                          { value.logo_path && <img src={`http://image.tmdb.org/t/p/w45${value.logo_path}`} alt={'Logo company'}/> }
                          <span>{value.name} |</span>
                      </div>)
                  }
          </div>
          <a href={movie.homepage} className={light_theme ? 'link-black' : 'link-light'}>Homepage</a>
      </div>
  )
}