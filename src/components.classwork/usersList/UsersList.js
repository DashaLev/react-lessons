import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import {UserItem} from "../userItem/UserItem";
import './UserList.css'

export function UsersList() {

    let [usersList, setUsersList] = useState([])

    useEffect(()=> {
        getUsers().then(({data}) => setUsersList(data))
    },[])

    return (
        <div className='user-list-wrap'>
            {
                usersList.map(value => <UserItem key={value.id} item={value}/>)

            }
        </div>
    )
}