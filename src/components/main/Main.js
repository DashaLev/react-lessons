import {Route, Switch} from "react-router";
import {MovieDetails} from "../movieDetails/MovieDetails";
import {MoviesList} from "../moviesList/MoviesList";
import {MoviesTopRated} from "../moviesTopRated/MoviesTopRated";
import {MoviesUpcoming} from "../moviesUpcoming/MoviesUpcoming";


export const Main = () => {
   return (
       <main>
           <Switch>
              <Route path={'/movie/:id'} render={(props) => {
                 return <MovieDetails {...props}/>
              }}/>
               <Route exact path={'/'} component={MoviesList}/>
               <Route path={'/top_rated'} component={MoviesTopRated}/>
               <Route path={'/upcoming'} component={MoviesUpcoming}/>
           </Switch>
       </main>
   )
}