export function Post({item:{title,body}}) {

    return (
        <li>
            <h4>{title}</h4>
            <p>{body}</p>
        </li>
    )
}