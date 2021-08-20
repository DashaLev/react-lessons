import {Route} from "react-router-dom";
import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/users.service";
import UserDetails from "../userDetails/UserDetails";


export default function Users(props) {
    let {match: {url}} = props;
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value] ));
    }, [])
    return (
        <div>

            {users.map(value => <User  item={value} key={value.id}/>)}
            <hr/>

            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props} />
            }}/>

        </div>
    );
}