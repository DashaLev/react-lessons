import './MovieInfo.css'
import {useSelector} from "react-redux";
import {MovieInfoPreview} from "./MovieInfoPreview";
import {MovieInfoFullInfo} from "./MovieInfoFullInfo";


export const MovieInfo = ({item, movie}) => {

    let {light_theme} = useSelector(state => state.themeReducer)

    return (
      <>
          {
              item && <MovieInfoPreview item={item} light_theme={light_theme}/>
          }
          {
              movie && <MovieInfoFullInfo movie={movie} light_theme={light_theme}/>
          }
      </>
  )
}










