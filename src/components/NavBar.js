import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss"

export default function NavBar() {
    return(
        <header className="header">
            <div className="container">
            <nav className="navbar">
            <button className="hamburger hamburger--arrow" type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                 </span>
            </button>
                    <ul>
                        <li>
                        <NavLink to="/" exact> Home </NavLink>
                        </li>
                        <li>
                        <NavLink to="/posts"> Blog </NavLink>
                        </li>
                        <li> <a href="">Portfolio</a></li>
                        <li><a href=""> About me</a></li>
                        <li><a href=""> Contact </a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}