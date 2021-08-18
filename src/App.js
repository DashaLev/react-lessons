import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";
import './App.css'


function App() {
  return (
    <Router>
        <div className={'links-wrap'}>
            <Link to={'/users-page'}>Users page</Link>
            <Link to={'/posts-page'}>Posts page</Link>
            <Link to={'/comments-page'}>Comments page</Link>
        </div>
        <div className={'page-wrap'}>
            <Switch>
                <Route path={'/users-page'} component={Users}/>
                <Route path={'/posts-page'} component={Posts}/>
                <Route path={'/comments-page'} component={Comments}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
