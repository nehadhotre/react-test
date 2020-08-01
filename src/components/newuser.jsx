import  React, { Component } from "react";
import {Link} from "react-router-dom";
class NewUser extends Component{
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
                 <button type="button" className="btn btn-info bt-sm">save password</button>



<button type="button" className="btn btn-info btn-sm" style={{marginTop:"10px"}}><Link to="/login">Logout</Link></button>

                 </div>
                
            </div>
            
            
        )
    }
}
export default NewUser;