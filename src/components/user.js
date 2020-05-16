import React from 'react';
import axios from 'axios';

function User({user}) {
    const deleteUser = ()=> {
        axios.delete(`users/${user.id}`).then(()=> {

        })
    };
    return (

            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={user.avatar} alt="Card image cap" />

                <div className="card-body">
                    <div className="card-header">
                        Name: {user.first_name}
                    </div>
                    <div className="card-header">
                        Last Name:  {user.last_name}
                    </div>
                    <div className="card-header">
                        Email:  {user.email}
                    </div>
                </div>
                <button type="button" className="btn btn-danger" onClick={user.deleteUser}>Delete</button>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-info" >Update</button>
            </div>
    )
}
export default User;
