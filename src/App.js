import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUserWithThunk, fetchUsersWithThunk} from "./services/user.service";


export default function App() {

    let {users} = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersWithThunk());
    }, []);

    let onClickAddUser = (e) => {
        let user = {name: 'Paul McCartney'}
        dispatch(addUserWithThunk(user));
    };
    return (
        <div>
            {users.map(value => <div>{value.name}</div>)}
        <hr/>
            <button onClick={onClickAddUser}> add user</button>
        </div>
    );
}