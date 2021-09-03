import logo from './logo.png'
import {Link} from "react-router-dom";
import {UserInfo} from "../userInfo/UserInfo";
import './Header.css'

export const Header = () => {
  return (
      <header>
          <div>
              <Link to={'/'}>
                  <img src={logo} alt={"Logo"}/>
              </Link>

          </div>
           <ul className={'menu'}>
               <li> <Link to={'/'}>All movies</Link> </li>
               <li> <Link to={'/top_rated'}>Top rated </Link> </li>
               <li> <Link to={'/popular'}>Popular</Link> </li>
          </ul>
          <UserInfo/>
      </header>
  )
}