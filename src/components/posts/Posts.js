import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import {Post} from "../post/Post";


export function Posts() {

    let [posts, setPosts] = useState([])

    useEffect(()=> {
        getPosts().then(value => setPosts(value))
    },[])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}