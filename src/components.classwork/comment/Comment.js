export function Comment({getCommentDetails,item}) {

    return (
        <div>
            <h4>{item.name} by {item.email}</h4>
            <button onClick={() => getCommentDetails(item)}>Details</button>
        </div>
    )
}