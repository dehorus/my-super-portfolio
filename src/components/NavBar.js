import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { debounce } from  '../helpers/Helper';
import "./NavBar.scss";
import LinkeDin from '../draws/LinkeDin.svg';
import CodePen from '../draws/CodePen.svg';
import GitHub from '../draws/Github.svg';
import Instagram from '../draws/Instagram.svg';
import Behance from '../draws/Behance.svg';
import BehanceBlack from '../draws/Behance-black.svg'
import GithubBlack from '../draws/Github-black.svg'
import LinkedinBlack from '../draws/LinkeDin-black.svg'

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0);   
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {     
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    
        setPrevScrollPos(currentScrollPos);
      }, 100);    

      useEffect(() => {     
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    
      }, [prevScrollPos, visible, handleScroll]);

    return(
        <header className="header" style={{ top: visible ? '0' : '-20em' }} >
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
                        <NavLink to="/post"> Blog </NavLink>
                        </li>
                        <li> 
                        <NavLink to="/portfolio"> Portfolio </NavLink>    
                        </li>
                        <li>
                        <NavLink to="/contact"> Contact </NavLink>
                        </li>
                        <h3 className="title-social">My social media. </h3>
                        <div className="icons">
                            <a href=""> <img src={LinkeDin} alt=""/></a>
                            <a href=""> <img src={Instagram} alt=""/></a>
                            <a href=""> <img src={CodePen} alt=""/></a>
                            <a href=""> <img src={GitHub} alt=""/></a>
                            <a href=""> <img src={Behance} alt=""/></a>
                        </div>
                    </ul>
                    <div className="icons-desktop">
                        <a href=""> <img src={LinkedinBlack} alt="linkedin" /></a>
                        <a href=""> <img src={GithubBlack} alt="github" /></a>
                        <a href=""> <img src={BehanceBlack} alt="behance" /></a>
                    </div> 
                </nav>
            </div>
        </header>
    )
}