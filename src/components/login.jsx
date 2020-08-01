import React,{Component} from "react";
import {Link} from "react-router-dom";
import "../components/login.css";
class Login extends Component{
render(){
    return(
        <div className="container">
           <form action="action_page.php">

<div className="container">
  <label for="uname"><b>Username</b></label>
  <input type="text" placeholder="Enter Username" name="uname" required/>

  <label for="psw"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw" required/>

<<<<<<< HEAD
  {/* <button type="button" class="btn btn-dark btn-md" ><Link to="/home">Login</Link></button> */}
=======
  <button type="button" class="btn btn-dark btn-md" ><Link to="/home">Login</Link></button>
>>>>>>> d4812f608b796c6f970d3ef6e17fbaf9b40e6016
     
</div>


<div className="container" style={{backgroundColor:"#f1f1f1"}}>
  <span className="password"><Link to="/home">Login</Link></span>
</div>
</form>
        </div>
    )
}
}
export default Login;