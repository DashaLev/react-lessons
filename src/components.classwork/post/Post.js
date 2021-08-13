
export function Post({getPostDetails,item}) {

    return (
        <div>
            <h3>{item.title}</h3>
            <button onClick={() => getPostDetails(item)}>Details</button>
        </div>
    )
}