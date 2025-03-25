// import React from 'react'

import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
import hamburger from '../../../assets/icons/hamburger-icon.svg'
import close from '../../../assets/icons/hamburger-close.svg'
import logo from '../../../assets/logo/TARGET-UKMLA.png'
import { useState } from "react"

function Navbar() {
  const [toogleHamburger, setToogleHamburger] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
            <Link className="brand-logo" to="/">
              <h1>
                <img src={logo} alt="logo" />
                {/* <span>TARGET</span> UKMLA */}
              </h1>
            </Link>
            <li className="toggle-btn">
              <div className="navbarToggle-icon">
                <img src={!toogleHamburger ? hamburger : close} onClick={() => setToogleHamburger(prevToogle => !prevToogle)} />
              </div>
            </li>

            <ul className={`header-ul ${toogleHamburger ? 'show' : ''}`} >
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/question-bank">
                  Question Bank</NavLink>
              </li>
              {/* <li>
                <NavLink to="/big-mock">
                  Big Mock</NavLink>
              </li> */}
              <li>
                <NavLink to="/webinar" >
                  Webinars</NavLink>
              </li>
              <li>
                <NavLink to="/mocks">
                  Big Mocks</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">
                  Contact us</NavLink>
              </li>
             
              <li>
                <div className="nav-btn-wrapper-mobile">

                  <NavLink to='/login' className="btn btn-login">Log in</NavLink>
                  <NavLink to='/signup' className="btn btn-sign-up">Sign up</NavLink>
                </div>
              </li>
            </ul>
            <div className="nav-btn-wrapper">

              <NavLink to='/login' className="btn btn-login">Log in</NavLink>
              <NavLink to='/signup' className="btn btn-sign-up">Sign up</NavLink>
            </div>


          </nav>
        </div>
        <div className='progressbar-wrapper'>
          <div className='progressbar-inner-wrapper' style={{ 'width': '30%' }}></div>
        </div>
      </div>

    </>
  )
}

export default Navbar