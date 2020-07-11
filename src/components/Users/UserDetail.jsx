import React, {useEffect, useState} from 'react';

import axios from "axios";
function UserDetail(props) {
    const token = process.env.REACT_APP_ACESS_TOKEN


    const [user, setUser] = useState("");
    useEffect(()=> {
       console.log(process.env.REACT_APP_BASE_URL,"loc")
        console.log(props.match.params.id,"loc")
        axios.get(`users/${props.match.params.id}?access-token=${token}`).then(response => {
            setUser(response.data.result)
        })
    },[]);
    return (
        <div>
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
            </div>
        </div>
    )
}

export default UserDetail;