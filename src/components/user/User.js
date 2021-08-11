export function User({
        item:{name,username,phone,email,address:{street,suite,city, geo:{lat,lng}}}
    }) {
    return (
        <div>
            <h2>{name}, phone - {phone}</h2>
            <p>{username}, email - {email}</p>
            <p>Address: {city}, {street}, {suite}; Geo: lat: {lat}, lng: {lng}</p>
        </div>
    )
}