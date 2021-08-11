import {useEffect, useState} from "react";
import {getCommentsByPostId} from "../../services/comment.service";
import {CommentItem} from "../commentItem/CommentItem";
import './PostItem.css'

export function PostItem({userName,item:{id,title,body}}) {

    let [commentsToPost, setCommentsToPost] = useState([])

    useEffect(()=> {
        getCommentsByPostId(id).then(value => setCommentsToPost(value))
    },[])

    return (
        <div className='post-item'>
            <h3>Post written by {userName} {title}</h3>
            <p>{body}</p>
            <div>
                <h4>Comments to Post "{title}"</h4>
                <div className='comments-box'>
                    {
                        commentsToPost.map(value => <CommentItem key={id} item={value}/>)
                    }
                </div>
            </div>
        </div>
    )
}