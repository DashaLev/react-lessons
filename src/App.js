import {Users} from "./components.users.via.select.option/users/Users";
import Posts from "./components.users.via.select.option/posts/Posts";
import {useState} from "react";
import {getPostsByUserId} from "./components.users.via.select.option/post.service";
import './App.css'

function App() {

    let [posts, setPosts] = useState(null)

    const onChangeReturnID = (e) => {
        let id = e.target.value.split('.')[0]
        getPostsByUserId(id).then(value => setPosts([...value]))
    }

    return (
        <div className={'wrap'}>
            <Users onChangeReturnID={onChangeReturnID}/>
            <Posts posts={posts}/>
        </div>
  );
}

export default App;
