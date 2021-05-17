import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';

import AstroIllustration from './AstroIllustration';
import "./NavBar.scss";
import './Footer.scss';

import LinkeDin from '../draws/LinkeDin.svg';
import CodePen from '../draws/CodePen.svg';
import GitHub from '../draws/Github.svg';
import Instagram from '../draws/Instagram.svg';
import Behance from '../draws/Behance.svg';

import pngFooter from '../draws/BG-png.png';

export default function Footer() {
    return(
        <footer className="footer">
            <img className="footerpng" src={pngFooter} alt="svgFooter" />
            <AstroIllustration></AstroIllustration>
            <div className="container-links">
                <ul>
                    <li>
                        <NavLink to="/" exact> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts"> Blog </NavLink>
                    </li>
                    <li>   <a href="#portflio">Portfolio</a>  </li>
                    <li>   <a href="#about"> About me</a>  </li>
                    <li>   <a href="#contact"> Contact </a>    </li>
                    <div className="icons">
                            <a href="https://www.linkedin.com/in/angelruiz95/" target="_blank"> <img src={LinkeDin} alt=""/></a>
                            <a href="https://www.instagram.com/angelus_dev/" target="_blank"> <img src={Instagram} alt=""/></a>
                            <a href="https://codepen.io/_josueangel" target="_blank"> <img src={CodePen} alt=""/></a>
                            <a href="https://github.com/dehorus" target="_blank"> <img src={GitHub} alt=""/></a>
                            <a href="https://www.behance.net/angelruiz12" target="_blank"> <img src={Behance} alt=""/></a>
                    </div>
                    <p>Made with <strong>ReactJS, Sanity, React-spring</strong></p>
                    </ul>
            </div>
        </footer>
    )
}