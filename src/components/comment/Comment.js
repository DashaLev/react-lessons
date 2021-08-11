
export function Comment({item:{name,email,body}}) {

    return (
        <div>
            <h2>{name} by email - {email}</h2>
            <p>{body}</p>
        </div>
    )
}