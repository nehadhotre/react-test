import  React, { Component } from "react";
<<<<<<< HEAD
import {Link} from "react-router-dom";
class User extends Component{
    render(){
        return(
            <div className="container"  style={{margin:"5%"}}>
             <div className="row">
                 <div className="col-md-4">
                     <input type="text" className="form-control" placeholder="Username"/>
                     <input type="text" className="form-control" placeholder="Password"/>
                     
                 </div>
                 </div>
                 <div className="col-md-2" style={{marginTop:"10%"}}>
                 

 <button type="button" className="btn btn-dark btn-md" ><Link to="/newuser">change paasword</Link></button>

<button type="button" className="btn btn-dark btn-sm" style={{marginTop:"10px"}}><Link to="/login">Logout</Link></button>

                 </div>
                
            </div>
            
            
=======
class User extends Component{
    render(){
        return(
            <div className="container">
    
            </div>
>>>>>>> d4812f608b796c6f970d3ef6e17fbaf9b40e6016
        )
    }
}
export default User;