import {Route, Switch} from "react-router";
import {MovieDetails} from "../movieDetails/MovieDetails";
import {MoviesList} from "../moviesList/MoviesList";
import './Main.css'


export const Main = () => {
   return (
       <main>
           <Switch>
              <Route path={'/movie/:id'} render={(props) => {
                 return <MovieDetails {...props}/>
              }}/>
               <Route exact path={'/'} component={MoviesList}/>
           </Switch>
       </main>
   )
}