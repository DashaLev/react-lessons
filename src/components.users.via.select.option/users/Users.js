import {useEffect, useState} from "react";
import {getUsers} from "../user.service";

export function Users({onChangeReturnID}) {

    let [users, setUsers] = useState([])

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    },[])


    const onSubmitGetUserPosts = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={onSubmitGetUserPosts}>
                <select onChange={onChangeReturnID}>
                    {
                        users.map(value =>  <option key={value.id}>{value.id}. {value.name}</option>)
                    }
                </select>
            </form>
        </>
    )
}