import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import logo from '../logo.svg'
import "./Home.scss";
import MoonIllustration from './MoonIllustration';
import Particles from 'react-particles-js';
import About from './About';
import Portfolio from './Portfolio';

export default  function Home() {
    const fade = useSpring({
        from: {
            opacity: 0
        },

        to: {
            opacity: 1
        }
    });

    return (
        <main className="home">
            <div className="hero">
            <div className="container-mobile">
                <div className="text-container">
                 <animated.img className="mylogo" src={logo} alt="myLogo" style={fade}/>
                 <div className="text">
                     <h3>Hi! my name is Angel and i'm</h3>
                 </div>
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