import './UserInfo.css'
import {useSelector} from "react-redux";

export const UserInfo = () => {
    let {light_theme} = useSelector(state => state.themeReducer)

    return (
        <div className={light_theme ? 'user-info-wrap light' : 'user-info-wrap dark'}>
            <div className={'user-full-name'}>User name</div>
            <div className={'user-initial'}>U</div>
        </div>
    )
}