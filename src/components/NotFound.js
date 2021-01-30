import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NotFound extends Component {
    render() {
        return (
           <div className="row">
               <div className="col-md-12 text-center">
                   <h2 className="display-4">Page Not Found</h2>
                   <Link to={`/`}>Go Home</Link>
               </div>
           </div>
        )
    }
}

export default NotFound;