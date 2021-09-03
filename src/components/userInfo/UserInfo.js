import avatar from './avatar.png'
import './UserInfo.css'

export const UserInfo = () => {
    return (
        <div className={'user-info-wrap'}>
            <div>user name</div>
            <img src={avatar} alt={'Avatar'}/>
        </div>
    )
}