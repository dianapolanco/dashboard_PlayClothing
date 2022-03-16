import React from 'react';
import imagenFondo from '../assets/images/404.jpg';
import {Link} from 'react-router-dom';

function NotFound(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <Link to="/"><img className="mx-auto d-block" width="100%" src={imagenFondo} alt=" Page not found "/></Link>
        </div>
        
    )
}


export default NotFound;