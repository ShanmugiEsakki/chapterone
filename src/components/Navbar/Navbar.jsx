import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-5 fs-12 ls-2'><b>chapter one</b></span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><b>Home</b></Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><b>about</b></Link>
            </li>
            <li className='nav-item'>
              <Link to = "Login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><b>Login</b></Link>
            </li>
            <li className='nav-item'>
              <Link to = "Signup" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><b>Signup</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar