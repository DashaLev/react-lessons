import {Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import PostDetails from "../postDetails/PostDetails";
import './Posts.css'

export default function Posts(props) {
    let {match: {url}} = props;
    let [posts, setPosts] = useState([])

    useEffect(()=> {
        getPosts().then(value => setPosts([...value]))
    },[])

    return (
        <div className={'posts-page'}>
            <div className={'posts-list'}>
                <h2>POSTS</h2>
                <ol>
                    {
                        posts.map(value => <Post key={value.id} item={value}/>)
                    }
                </ol>
            </div>
            <Route path={`${url}/:id`} component={PostDetails} />
        </div>
    )
}