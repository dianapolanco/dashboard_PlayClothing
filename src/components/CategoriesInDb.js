import React from "react";
import {Link} from 'react-router-dom';



function CategoriesInDb() {
  return (
  
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-dark text-center">
            Categorias de productos
          </h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
              <Link className="nav-link" to="/ProductosMujer"><div className="card-body text-center text-white">Mujer</div></Link>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
              <Link className="nav-link" to="/ProductosHombre"><div className="card-body text-center text-white">Hombre</div></Link>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
       

  );
}

export default CategoriesInDb;

