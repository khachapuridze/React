import React from "react";
import Nav from "./components/Nav";
import UsersList from "./components/Users/UsersList";
import Home from "./components/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import UserDetail from "./components/Users/UserDetail";
import ProtectedRoute from "./components/Auth/protected.route";
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute  path="/users" component={UsersList} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/userDetail/:id" component={UserDetail} />
          </Switch>
        </div>
      </Router>

  )
}
axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_BASE_URL : '';
// axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? "https://gorest.co.in/public-api/" : '';

export default App;