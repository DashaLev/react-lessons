import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import './App.css'

export default function App() {
    return (
        <Router>
            <div className={'links-wrap'}>
                <Link to={'/home'}>Start page</Link>
                <Link to={'/users'}>Users page</Link>
                <Link to={'/posts'}>Posts page</Link>
            </div>
            <div>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
            </div>
        </Router>
    );
}
