import logo from './logo.png'
import {Link} from "react-router-dom";
import {UserInfo} from "../userInfo/UserInfo";
import {useDispatch, useSelector} from "react-redux";
import {setThemeColor} from "../../redux/actions";
import './Header.css'

export const Header = () => {

    let {light_theme} = useSelector(state => state.themeReducer)
    let dispatch = useDispatch()

    const changeThemeColor = (light_theme) => {
        light_theme === false ? dispatch(setThemeColor(true)) : dispatch(setThemeColor(false))
    }

    return (
      <header className={light_theme ? 'light-bg' : 'dark-bg'}>
          <div className={'logo'}>
              <Link to={'/'}>
                  <img src={logo} alt={"Logo"}/>
              </Link>
          </div>
           <ul className={light_theme ? 'menu light-c' : 'menu'}>
               <li> <Link to={'/'} className={light_theme ? '' : 'dark-theme-color'}>movies list</Link> </li>
               <li> <Link to={'/top_rated'} className={light_theme ? '' : 'dark-theme-color'}>20 top rated </Link> </li>
               <li> <Link to={'/upcoming'} className={light_theme ? '' : 'dark-theme-color'}>20 upcoming</Link> </li>
          </ul>
          <button
              onClick={() => changeThemeColor(light_theme)}
              className={light_theme ? 'change-theme-button theme-button-light-bg' : 'change-theme-button theme-button-dark-bg'}
          >Change color</button>
          <UserInfo/>
      </header>
  )
}