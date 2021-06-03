import { useContext } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../stores/auth-context';
// import Sdata from './Sdata'

function Navbar() {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light  ">
                <div className="container">
                    <h2 href="#" className="navbar_brand bold " >M</h2>
                    {/* <button className="navbar-toggler" data-toggle="collapse" data-target="#navbartoggle" >
                        <span className="navbar-toggler-icon "> </span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbartoggle"> */}
                        <ul className="navbar_nav   " >
                            {isLoggedIn && (
                            <li className="nav-item ">
                            <Link to="/home"><a href="#" className="nav-link text-danger">Home</a></Link>
                        </li>

                            )}

                            {isLoggedIn && (
                            <li className="nav-item px-2">
                            <Link to="/bollywood"> <a href="#" className="nav-link text-danger">Movies</a></Link>

                        </li>

                            )}
                            {!isLoggedIn && (
                            <li className="nav-item px-2">
                            <Link to="/authpage" style={{textDecoration:"none"}}>  <button className=" btn_nav nav-link text-light">LogIn</button></Link>
                          </li>

                            )}

                          {isLoggedIn && (
                            <li className="nav-item px-2">
                            <Link to="/" > <button className="log_btn nav-link text-light" onClick={logoutHandler}>Logout</button></Link>
                          </li>

                            )}

                            

                        </ul>


                    </div>
                {/* </div> */}

            </nav>

            {/* main area */}
            
        </div>
    )
}

export default Navbar;
