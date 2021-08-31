import {addUser, loadUsers} from "../redux/actions";

const fetchUsersWithThunk = () => async (dispatch) => {
    let response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    dispatch(loadUsers(response));
}

const addUserWithThunk = (user) => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: user.name})
    });
    let savedUser = await response.json();
    dispatch(addUser(savedUser));

}

export {fetchUsersWithThunk,addUserWithThunk}