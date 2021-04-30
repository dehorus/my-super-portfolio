import React, { useState } from 'react'
import logo from '../logo.svg'
import "./Home.scss";
import MoonIllustration from './MoonIllustration';
import Particles from 'react-particles-js';
import About from './About';
import Portfolio from './Portfolio';

export default  function Home() {
    const [loaded, setLoaded] = useState(false);
    window.onload = function Load() {
        setLoaded(true);
    }
    return (
        <main className="home">
            <div className="hero">
            <div className="container-mobile">
                <div className="text-container">
                 <img className={`mylogo ${loaded ? "appear-left" : ""}`} src={logo} alt="myLogo"/>
                 <h3 className={`${loaded ? "fade-in" : ""}`}>Hi! my name is Angel and i'm a Front-end developer. </h3>
                </div>
            </div>
            <Particles id="particles-js" className="particles-star"
                params={ { 
                    particles: {
                        number: {
                            value: 250,
                            density: {
                                enable: true,
                                value_area: 1000
                            }
                        },
                        color: {
                            value: ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
                        },
                        opacity: {
                            value: 1,
                            anim: {
                                enable: true
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 3
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 0.2
                        }
                        }
                    }
                }
            ></Particles>
            <MoonIllustration contenLoad = {loaded}></MoonIllustration>
            </div>
            <About></About>
        </main>
    ) 
}