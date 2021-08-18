import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";


export function Posts() {
    let [posts, setPosts] = useState([])

    useEffect(()=> {
        getPosts().then(value => setPosts([...value]))
    },[])

    return (
        <>
            <h2>POSTS</h2>
            <div className={'posts-box'}>
                <ol>
                    {
                        posts.map(value => <li key={value.id}>{value.title}</li>)
                    }
                </ol>
            </div>
        </>
    )
}