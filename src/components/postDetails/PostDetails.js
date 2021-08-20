import './PostDetails.css'

export default function PostDetails(props) {

    let {location:{state}} = props

    return (
        <div className={'post-details-wrap'}>
            <h4>{state.title}</h4>
            <p>User id - {state.userId}, post id - {state.id}</p>
            <p>{state.body}</p>
        </div>
    )
}