import UserAddressGeo from "./addressGeo/AddressGeo";

export default function UserAddress({address:{street,suite, city, zipcode, geo}}) {
    return (
        <div>
            Address: {street}, {suite}, {city}, {zipcode}, <UserAddressGeo geo={geo}/>
        </div>
    )
}