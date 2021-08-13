import './User.css'

export function User({onClickShowPosts,item:{id,name}}) {


    return (
        <div className={'user-item'}>
            {id}. <span>{name}</span>
            <button onClick={() => onClickShowPosts(id,name)}>Show posts</button>
        </div>
    )
}