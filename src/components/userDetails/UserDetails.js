import {useEffect, useState} from "react";
import {getUser} from "../../services/users.service";


export default function UserDetails(props) {
    let {match: {params: {id}}} = props;
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    }, [id]);

  return (
      <div>
          <h4>{user.name}</h4>
          <p>Phone - {user.phone}, email - {user.email}, username - {user.username}, website - {user.username}</p>
      </div>
  )
}