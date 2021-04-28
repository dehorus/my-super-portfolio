import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";
import LinkeDin from '../draws/LinkeDin.svg';
import CodePen from '../draws/CodePen.svg';
import GitHub from '../draws/Github.svg';
import Instagram from '../draws/Instagram.svg';
import Behance from '../draws/Behance.svg';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    }
    return(
        <header className="header">
            <div className="container">
            <button  onClick={handleToggle} className={`hamburger hamburger--arrow ${open ? "is-active" : ""}`} type="button">
                <span className="hamburger-box">
                    <span className={` hamburger-inner ${open ? "whiteLines" : ""}`} ></span>
                 </span>
            </button>
            <nav className={`navbar ${open ? "active-nav" : ""}`}>
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
                        <div className="icons">
                            <a href=""> <img src={LinkeDin} alt=""/></a>
                            <a href=""> <img src={Instagram} alt=""/></a>
                            <a href=""> <img src={CodePen} alt=""/></a>
                            <a href=""> <img src={GitHub} alt=""/></a>
                            <a href=""> <img src={Behance} alt=""/></a>
                        </div>
                    </ul> 
                </nav>
            </div>
        </header>
    )
}