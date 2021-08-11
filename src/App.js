import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";
import {UsersList} from "./components.classwork/usersList/UsersList";


function App() {
  return (
    <>
        <div>
            Users:
            <Users/>
            <br/>
            Posts:
            <Posts/>
            <br/>
            Comments:
            <Comments/>
        </div>
        <UsersList/>
    </>
  );
}

export default App;
