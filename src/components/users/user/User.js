import Address from "./userAddress/Address";
import './User.css'

export default function User({item:{name, username, email, address, phone, website}}) {
    return (
        <div className='user-item'>
            <h2>{name}, phone:{phone}</h2>
            <h3>{username}, email:{email}, website:{website}</h3>
            <div>
                {
                    <Address address={address}/>
                }
            </div>
        </div>
    )
}