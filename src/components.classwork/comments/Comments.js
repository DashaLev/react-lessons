import {useEffect, useState} from "react";
import {getComments} from "../../servises/comments.service";
import {Comment} from "../comment/Comment";
import './Comments.css'

export function Comments() {
    let [comments, setComments] = useState([])
    let [comment, setComment] = useState(null)

    useEffect(()=> {
        getComments().then(value => setComments([...value]))
    },[])

    const getCommentDetails = (item) => {
        setComment({...item})
    }

    return (
        <>
            <h2>COMMENTS</h2>
            <div className={'comments-box'}>
                <div>
                    {
                        comments.map(value => <Comment key={value.id} item={value} getCommentDetails={getCommentDetails}/>)
                    }
                </div>
                    {
                        comment &&
                        <div className={'comments-details'}>
                            <p>Comment text: {comment.body}</p>
                            <p>ID - {comment.id}; Post Id - {comment.postId}</p>
                        </div>
                    }
            </div>
        </>
    )
}