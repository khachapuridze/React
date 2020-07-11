import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from "./authenticate";

function Login() {
    const history = useHistory();
    const { register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        if ( data.email === localStorage.getItem("email")
            && data.password === localStorage.getItem("password")) {
            localStorage.setItem("is_authenticated","true")

            auth.login(() => {
                history.push("/users");
            });
        }


    };

    const errorBorder = {
        border: '1px solid red'
    };
    return (
        <div className="register-conainer">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationDefault03">Email</label>
                        <input type="text"
                               name="email"
                               className="form-control"
                               style={errors.email && errorBorder}
                               ref={register({ required: true })} />
                        <span className="invalid-feedback-mine">{errors.email && "This field is Required"}</span>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationDefault04">Password</label>
                        <input type="password" name="password"
                               style={errors.password && errorBorder}
                               className="form-control"
                               ref={register({ required: true, minLength: 8})} />
                        <span className="invalid-feedback-mine">{errors.password && "Empty or  Incorrect Password"}</span>
                    </div>
                </div>

                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;