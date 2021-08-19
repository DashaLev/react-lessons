import {Post} from "../post/Post";

const Posts = ({posts}) => {

    return (
        <>
            { posts &&
                <div>
                    <h3>Posts User Id - {posts[0].userId}</h3>
                    <ol>
                        {posts.map(value => <Post key={value.id} item={value}/>)}
                    </ol>
                </div>
            }
        </>
    )
}

export default Posts