import './MovieVideos.css'

export const MovieVideos = ({location: {state}}) => {

    let {key} = state

    return (
          <div>
              <iframe width="520" height="300" src={`https://www.youtube.com/embed/${key}`}
               title="YouTube video player" frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen/>
          </div>
    )

}