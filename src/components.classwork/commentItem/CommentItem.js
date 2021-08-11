import './CommentItem.css'

export function CommentItem({item:{name,body}}) {

    return (
        <div className='comment-item'>
            <h5>{name}</h5>
            <p>{body}</p>
        </div>

    )
}