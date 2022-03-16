import React from 'react';
import Logo from '../assets/images/logo.jpg';
import ContentWrapper from './ContentWrapper';
import LastProductDetail from './LastProductDetail';
import ContentRowPC from './ContentRowPC';
import NotFound from './NotFound';
import WomenProducts from './WomenProducts';
import MenProducts from './MenProducts'
import UseProductsList from './Hooks/UseProductsList';
import Imagen from './Imagen'

import { faRectangleList, faBell, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Route, Switch } from 'react-router-dom';


function SideBar() {

    const products = UseProductsList('/api/products')




    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={Logo} alt="Play Clothing" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <FontAwesomeIcon icon={faFolderOpen} style={{
                            fontSize: .85 + "rem",
                            marginRight: 0.25 + "rem"
                        }} />
                        <span>Report - Playclothing</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/UltimoProducto">
                        <FontAwesomeIcon icon={faBell} style={{
                            fontSize: .85 + "rem",
                            marginRight: 0.25 + "rem"
                        }} />
                        <span>Último producto</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductosMujer">
                        <FontAwesomeIcon icon={faRectangleList} style={{
                            fontSize: .85 + "rem",
                            marginRight: 0.25 + "rem"
                        }} />
                        <span>Productos Mujer</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ProductosHombre">
                        <FontAwesomeIcon icon={faRectangleList} style={{
                            fontSize: .85 + "rem",
                            marginRight: 0.25 + "rem"
                        }} />
                        <span>Productos Hombre</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/UltimoProducto">
                    <LastProductDetail />
                </Route>
                <Route path="/ContentRowPC">
                    <ContentRowPC />
                </Route>
                <Route path="/ProductosMujer">
                    <WomenProducts />
                </Route>
                <Route path="/ProductosHombre">
                    <MenProducts />
                </Route>
                <Route path="/ProductosHombre">
                    <MenProducts />
                </Route>
                {products.map((product, i) => {
                    return  <Route path={product.imagen} key={i}>
                    <Imagen image={product.imagen} key={i}/>
                </Route>
                })
                }      
                <Route component={NotFound} />

            </Switch>

        </React.Fragment>
    )
}
export default SideBar;