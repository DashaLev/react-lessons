import avatar from './avatar.png'
import './UserInfo.css'

export const UserInfo = () => {
    return (
        <div className={'user-info-wrap'}>
            <img src={avatar} alt={'Avatar'}/>
            <div>User name</div>
        </div>
    )
}