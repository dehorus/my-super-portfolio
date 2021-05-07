import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import logo from '../logo.svg'
import "./Home.scss";
import MoonIllustration from './MoonIllustration';
import Particles from 'react-particles-js';
import About from './About';
import Portfolio from './Portfolio';

export default  function Home() {
    const [flip, set] = useState(false)
    const music = useSpring({
        from: {
            transform: "scale(0)",
        },

        to: {
            transform: "scale(1.0)",
        },
        delay: 100,
        config: config.stiff,
    });

    return (
        <>
        <Parallax pages={3} style={ { top: '0', left: '0'} }>
            <main className="home">
                <ParallaxLayer offset= {0} speed={2.5}>
                    <div className="hero">
                        <div className="container-mobile">
                            <ParallaxLayer offset={0.1} speed={1.5}>
                            <div className="text-container">
                                <animated.img className="mylogo" src={logo} alt="myLogo" style={music}/>
                                <animated.div className="text" style={music}>
                                    <h3>True web design</h3>
                                </animated.div>
                            </div>
                            </ParallaxLayer>
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
                </ParallaxLayer>
                <ParallaxLayer offset={0.99} speed = {1.5}>
                    <About></About>
                </ParallaxLayer>
                <ParallaxLayer offset={1.7} speed={2.5}>
                    <Portfolio></Portfolio>
                </ParallaxLayer>
            </main>
        </Parallax>
        </>
    ) 
}