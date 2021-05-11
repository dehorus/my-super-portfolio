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


export default function Footer() {
    const parallax = useRef()
    return(
        <footer className="footer">
            <AstroIllustration></AstroIllustration>
            <div className="container-mobile">
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
                            <a href=""> <img src={LinkeDin} alt=""/></a>
                            <a href=""> <img src={Instagram} alt=""/></a>
                            <a href=""> <img src={CodePen} alt=""/></a>
                            <a href=""> <img src={GitHub} alt=""/></a>
                            <a href=""> <img src={Behance} alt=""/></a>
                    </div>
                    </ul>
            </div>
            <p>Made with <strong>ReactJS, Sanity, React-spring</strong></p>
        </footer>
    )
}