import {useEffect} from "react";
import {getGenres} from "../../services/movie.service";
import {useDispatch, useSelector} from "react-redux";
import './GenreBadge.css'
import {getMoviesGenres} from "../../redux/actions";

export const GenreBadge = ({genre_ids}) => {

    let {genres} = useSelector(state => state.genresReducer)
    let dispatch = useDispatch()

    useEffect(() => {
        getGenres().then(({data: {genres}}) => dispatch(getMoviesGenres(genres)))
    }, [dispatch])

    return (
        <div className={'genres-wrap'}>
            {
                genres.map(value => {
                    for(let i=0; i<genre_ids.length;i++) {
                        if (value.id === genre_ids[i]) {
                            return (
                                <div key={value.id}>{value.name}</div>
                            )
                        }
                    }
                    return null
                })
            }
        </div>
    )
}