
const getPosts = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
    )
}

const getPost = (postId) => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(value => value.json())
    )
}

const getPostsByUserId = (userId) => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
    )
}
export {getPosts, getPost,getPostsByUserId}
