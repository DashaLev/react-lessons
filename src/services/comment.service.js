
const getComments = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
    )
}

const getComment = (commentId) => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
            .then(value => value.json())
    )
}
const getCommentsByPostId = (postId) => {
    return (
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
    )
}

export {getComments, getComment,getCommentsByPostId}