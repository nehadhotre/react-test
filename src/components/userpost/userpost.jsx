import React from "react";
const Userpost =({post})=>{
    return(
        <div className="container">
<<<<<<< HEAD
            <div className="row">
=======
            <div className="row">0
>>>>>>> d4812f608b796c6f970d3ef6e17fbaf9b40e6016
                {
                 post.map(item=>(
                     <div className="col-md-12">
                         <div class="card text-left">
                             <div className="card-body">
                                 <h4 className="card-title">{item.title}</h4>
                                 <p className="card-text">{item.completed}</p>
                             </div>
                         </div>
                     </div>
                 ))
                }
            </div>
        </div>
    )
};
<<<<<<< HEAD
export default Userpost;
=======
export default Userpost
>>>>>>> d4812f608b796c6f970d3ef6e17fbaf9b40e6016
