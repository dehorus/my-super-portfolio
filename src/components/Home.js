import React from 'react';
import logo from '../logo.svg'
import "./Home.scss";
import MoonIllustration from './MoonIllustration';

export default  function Home() {
    return (
        <main className="home">
            <div className="container-mobile">
                <div className="text-container">
                 <img className="mylogo" src={logo} alt="myLogo"/>
                 <h3>Hi! my name is Angel and i'm a Front-end developer. </h3>
                </div>
            </div>
            <MoonIllustration></MoonIllustration>
        </main>
    ) 
}