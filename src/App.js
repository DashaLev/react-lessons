import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers, saveUser} from "./services/user.service";
import {loadUsers} from "./redux/actions";

export default function App() {

    let {users} = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(value => dispatch(loadUsers(value)))
    }, []);

    let onClickAddUser = async (e) => {
        let user = {name: 'John Lennon'}
        await saveUser(dispatch, user);
    };
    return (
        <div>
            {users.map(value => <div>{value.name}</div>)}
        <hr/>
            <button onClick={onClickAddUser}> add user</button>
        </div>
    );
}