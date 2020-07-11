import React from 'react';
import {Link} from "react-router-dom";

function User({user,deleteUser}) {
    return (

        <div className="card" style={{width: '18rem'}}>
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
            <button type="button" className="btn btn-danger" onClick={deleteUser}>Delete</button>
            <Link to={"/userDetail/" + user.id}>
                <button type="button" className="btn btn-warning">Detail</button>
            </Link>
            <button type="button" className="btn btn-info" >Update</button>
        </div>
    )
}
export default User;