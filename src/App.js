import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addNewUser, getUsersByFetch} from "./services/user.service";
import {addUserToStore, fetchUsers} from "./redux/actions";


function App() {

    let {users} = useSelector(state => state.usersReducer)
    let dispatch = useDispatch()

    useEffect(() => {
        getUsersByFetch().then(value => dispatch(fetchUsers(value)))
    },[dispatch])

    const onSubmitAddUser = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let email = e.target.email.value
        let user = {name, email}
        addNewUser(user).then(value => dispatch(addUserToStore(value)))
    }

    return (
        <div>
            <form onSubmit={onSubmitAddUser}>
                <input type="text" name={'name'} placeholder={'Name'} />
                <input type="email" name={'email'} placeholder={'Email'}/>
                <button>Add user</button>
            </form>
            <ol>
                {
                    users.map((value, index)=> <li key={index}>{value.name}</li>)
                }
            </ol>
        </div>
  );
}

export default App;
