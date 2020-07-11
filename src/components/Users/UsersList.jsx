import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from "./User";
function UsersList() {
    const token = process.env.REACT_APP_ACESS_TOKEN
    const [users, setUsers] = useState([]);
    const [usersMeta, setUsersMeta] = useState({});
    const containerStyle= {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };

    const deleteUser = (id)=> {
        axios.delete(`users/${id}?access-token=${token}`).then(()=> {
            const index = users.findIndex(item => item.id === id)
            users.splice(index,1)
            setUsers([...users])
        })
    };

    useEffect(()=> {
        axios.get(`users?access-token=${token}`).then(response => {
            setUsers(response.data.result);
            setUsersMeta(response.data._meta);

        })
    },[]);

    return (
        <div>
            <div>
                <h5>Total</h5>
                <span>{usersMeta.totalCount}</span>
                <h5>Message</h5>
                <span>{usersMeta.message}</span>
            </div>
            <div style={containerStyle}>
                {
                    users.map( user =>  <User user={user} key={user.id} deleteUser={()=> deleteUser(user.id)}/>
                    )
                }
            </div>

        </div>
    );
}

export default UsersList;