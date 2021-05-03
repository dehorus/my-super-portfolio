import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import logo from '../logo.svg'
import "./Home.scss";
import MoonIllustration from './MoonIllustration';
import Particles from 'react-particles-js';
import About from './About';
import Portfolio from './Portfolio';
import SanityClientConstructor from '@sanity/client';

export default  function Home() {
    const fade = useSpring({
        from: {
            opacity: 0
        },

        to: {
            opacity: 1
        }
    });

    const fadeText = useSpring({
        from: {
            opacity: 0,
            transform: "scale(1.1)",
        },

        to: {
            opacity: 1,
            transform: "scale(1.0)",
        }
    });

    return (
        <main className="home">
            <div className="hero">
            <div className="container-mobile">
                <div className="text-container">
                 <animated.img className="mylogo" src={logo} alt="myLogo" style={fade}/>
                 <animated.div className="text" style={fadeText}>
                     <h3 >Hi! my name is Angel and i'm a </h3>
                     <div id="flip">
                         <div> <span> Developer </span></div>
                         <div> <span> Disigner </span></div>
                         <div> <span> Geek :) </span></div>
                     </div>
                 </animated.div>
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
            <MoonIllustration></MoonIllustration>
            </div>
            <About></About>
        </main>
    ) 
}