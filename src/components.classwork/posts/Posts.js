import {useEffect, useState} from "react";
import {getPosts} from "../../servises/posts.service";
import {Post} from "../post/Post";
import './Posts.css'

export function Posts() {
    let [posts, setPosts] = useState([])
    let [post, setPost] = useState(null)

    useEffect(()=> {
        getPosts().then(({data}) => setPosts([...data]))
    },[])

    const getPostDetails = (item) => {
        setPost({...item})
    }

    return (
        <>
        <h2>POSTS</h2>
        <div className={'posts-box'}>
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value} getPostDetails={getPostDetails}/>)
                }
            </div>
                {
                    post &&
                    <div className={'posts-details'}>
                            <p>Post text: {post.body}</p>
                            <p>Id- {post.id}; User Id - {post.userId}</p>
                    </div>
                }
        </div>
        </>
    )
}