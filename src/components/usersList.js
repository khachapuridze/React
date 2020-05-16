import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from "./user";
function UsersList() {
    const [users, setUsers] = useState([]);
    const containerStyle= {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };

    const deleteUser = (id)=> {
        axios.delete(`users/${id}`).then(()=> {
            const index = users.findIndex(item => item.id === id)
            const usr = users.slice(0,index)
            setUsers([...usr])
        })
    };

    useEffect(()=> {
        axios.get("users").then(response => {
            setUsers(response.data.data)
        })
    },[]);

    return (
        <div style={containerStyle}>
            {
                users.map( user =>  <User user={user} key={user.id} deleteUser={()=> this.deleteUser(user.id)}/>
                )
            }
        </div>
    );
}

export default UsersList;
