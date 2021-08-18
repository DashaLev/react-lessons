import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";


export function Comments() {
    let [comments, setComments] = useState([])

    useEffect(()=> {
        getComments().then(value => setComments([...value]))
    },[])

    return (
        <>
            <h2>COMMENTS</h2>
            <div className={'comments-box'}>
                <ol>
                    {
                        comments.map(value => <li key={value.id}>{value.name}</li>)
                    }
                </ol>
            </div>
        </>
    )
}