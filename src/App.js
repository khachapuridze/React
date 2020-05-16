import React from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Register from "./components/register";
import Login from "./components/login";
import ProtectedRoute from "./components/protected.route";
import UsersList from "./components/usersList";
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
              </Switch>
          </div>
      </Router>
  );
}
axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'https://reqres.in/api/' : '';
export default App;
