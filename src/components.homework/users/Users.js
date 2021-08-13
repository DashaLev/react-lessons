import {useEffect, useState} from "react";
import {getUsers} from "../../servises/user.service";
import {User} from "../user/User";
import './Users.css'
import {getPostsByUserId} from "../../servises/posts.service";
import {Post} from "../post/Post";

export function Users() {

    let [users, setUsers] = useState([])
    let [posts, setPosts] = useState(null)

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    },[])

    const onClickShowPosts = (id) => {
        return (
            getPostsByUserId(id).then(({data})=> setPosts([...data]))
        )
    }
    return (
        <div className={'users-list_user-posts'}>
            <div className={'users-list'}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        onClickShowPosts={onClickShowPosts}
                    />)
                }
            </div>
            { posts &&
            <div className={'user-posts'}>
                <h3>Posts list User id №{posts[0].userId}</h3>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
            }
        </div>
    )
}