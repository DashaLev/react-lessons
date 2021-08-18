import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";


export function Users() {
    let [users, setUsers] = useState([])

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    },[])

    return (
        <>
            <h2>USERS</h2>
            <div className={'users-box'}>
                <ol>
                    {
                        users.map(value => <li key={value.id}>{value.name}</li>)
                    }
                </ol>
            </div>
        </>
    )
}