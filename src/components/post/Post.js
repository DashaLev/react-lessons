import {Link} from "react-router-dom";

export default function Post({item}) {

    return (
        <>
            <li>{item.title}
                <Link to={{pathname:`/posts/${item.id}`,state : item}}>Post details</Link>
            </li>
        </>
    )
}