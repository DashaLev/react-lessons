export function Post({item:{title,body}}) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}