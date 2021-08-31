import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import { useAuth0, User } from '@auth0/auth0-react';

//Component: NavBar
//Navigational top bar the redirects user to three different links
//Navigational bar is not complete and links can be adjusted

export const Navbar = () => {

    const { user, isAuthenticated, logout } = useAuth0();
    function test(){
      user.name = "hi";
    }

    return (
        <div>
        <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-links">Users</Link>
            </li>
          </ul>
          <div className="dropdown">
            <div className="dropbtn">
            <i class="fas fa-user fa-fw fa-lg"></i>{user.name}

            </div>
            <div className="dropdown-content">
            <a href="/Profile">Profile</a>
            <a href="/Profile"></a>

            <a href="">Reviews</a>
            <a href="/">Home</a>
            <a className="logout-btn" onClick={() => logout()}>Logout</a>
            <a className="logout-btn" onClick={() => test()}>test</a>

            </div>
          </div>
          </div>
        </nav>
            
        </div>
    )
}
export default Navbar;
