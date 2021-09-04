import logo from './logo.png'
import {Link} from "react-router-dom";
import {UserInfo} from "../userInfo/UserInfo";
import './Header.css'
import {useDispatch, useSelector} from "react-redux";

export const Header = () => {
    let {light_theme} = useSelector(state => state.themeReducer)
    let dispatch = useDispatch()

    const changeThemeColor = (light_theme) => {
        light_theme === false ? dispatch({type:'CHANGE_THEME', payload:true}) : dispatch({type:'CHANGE_THEME', payload:false})
    }
    return (
      <header className={light_theme ? 'light-bg' : 'dark-bg'}>
          <div className={'logo'}>
              <Link to={'/'}>
                  <img src={logo} alt={"Logo"}/>
              </Link>

          </div>
           <ul className={'menu'}>
               <li> <Link to={'/'} className={light_theme ? '' : 'dark-theme-color'}>All movies</Link> </li>
               <li> <Link to={'/top_rated'} className={light_theme ? '' : 'dark-theme-color'}>Top rated </Link> </li>
               <li> <Link to={'/popular'} className={light_theme ? '' : 'dark-theme-color'}>Popular</Link> </li>
          </ul>
          <button
              onClick={() => changeThemeColor(light_theme)}
              className={light_theme ? 'change-theme-button theme-button-light-bg' : 'change-theme-button theme-button-dark-bg'}
          >Change color</button>
          <UserInfo/>
      </header>
  )
}