import {useEffect, useState} from "react";
import {getPostsByUserId} from "../../services/post.service";
import {PostItem} from "../postItem/PostItem";
import './UserItem.css'

export function UserItem({item: {id,name, username, phone, email}}) {

    let [userPosts, setUserPosts] = useState([])

    useEffect(()=> {
        getPostsByUserId(id).then(value => setUserPosts(value))
    },[])


    return (
        <div className='user-item'>
            <h2>User: {name}, phone - {phone}</h2>
            <p>{username}, email - {email}</p>
            <div className='posts-box'>
                {
                    userPosts.map(value =>  <PostItem key={value.id} item={value} userName={name}/>)
                }
            </div>
        </div>
    )
}