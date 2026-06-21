import React, { useContext } from 'react';
import { NavLink,Link } from 'react-router';
import './Navbar.css';
import { AuthContext } from '../../Context/Auth_Context/Auth_Context';

const NavBar = () => {
  const {user,signOutUser} = useContext(AuthContext);
  const getLinkClass = ({ isActive }) =>
    isActive ? 'underline decoration-2 text-primary font-semibold' : '';

  const handleSignOut=()=>{
    signOutUser()
    .then()
    .catch(error=>{
      alert(error);
    })
  }

  const links = (
    <>
      <li>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={getLinkClass}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={getLinkClass}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={getLinkClass}>
          Dashboard
        </NavLink>
      </li>
      {
        user && <>
          <li><NavLink to='/orders' className={getLinkClass}>Orders</NavLink></li>
          <li><NavLink to ='profile' className={getLinkClass}>Profile</NavLink></li>
        </>
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">React-Firebase-Auth-Integration</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onclick={handleSignOut} className="btn btn-neutral mt-4">Sign out</a>
        ) : (
          <Link className='btn btn-neutral mt-4' to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
