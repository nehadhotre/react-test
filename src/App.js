import React, { Component } from "react";
import {Route,Switch ,Redirect}from "react-router-dom";
import Header from "./components/header/header.jsx";
import Login from "./components/login.jsx";
import Home from "./components/home.jsx";
import Task from "./components/task.jsx";
import User from "./components/user.jsx";
<<<<<<< HEAD
import NewUser from "./components/newuser.jsx"
=======
>>>>>>> d4812f608b796c6f970d3ef6e17fbaf9b40e6016
class App extends Component{
  constructor(){
    super();
  };
  render(){
   return(
<React.Fragment>
  <Header/>
  <Switch>
    <Route path="/"exact component={Login}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/task" exact component={Task}/>
    <Route path="/user" exact component={User}/>
<<<<<<< HEAD
    <Route path="/newuser" exact component={NewUser}/>
=======
>>>>>>> d4812f608b796c6f970d3ef6e17fbaf9b40e6016
  </Switch>
</React.Fragment>
   ) 
  }
}
export default App;