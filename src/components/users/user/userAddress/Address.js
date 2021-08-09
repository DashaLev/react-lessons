import UserAddressGeo from "./Geo/Geo";

export default function Address({address:{street,suite, city, zipcode, geo}}) {
    return (
        <div>
            Address: {street}, {suite}, {city}, {zipcode}, <UserAddressGeo geo={geo}/>
        </div>
    )
}