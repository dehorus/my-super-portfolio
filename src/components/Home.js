import React from 'react'
import { useSpring, animated, config } from 'react-spring';
import {Parallax, ParallaxLayer,} from '@react-spring/parallax';
import logo from '../logo.svg'
import "./Home.scss";
import MoonIllustration from './MoonIllustration';
import Particles from 'react-particles-js';
import About from './About';
import { NavLink } from 'react-router-dom';
import sparkles from '../draws/Sparkles.svg'
import sparkles1 from '../draws/Sparkles-1.svg'
import Footer from './Footer';

export default  function Home() {
   
    const translateUP = useSpring({
        from: {
            transform: "translateY(2em)",
            opacity: 0
        },

        to: {
            transform: "translateY(0)",
            opacity: 1
        },
        delay: 1000,
        config: config.wobbly,
    });

    return (
        <main className="home">
            <Parallax config={config.molasses} pages={2.280} >
                <ParallaxLayer factor={1.5} offset= {0} speed={2.5}>
                    <div className="hero">
                        <div className="container-mobile">
                            <ParallaxLayer offset={0.1} speed={1.5}>
                            <div className="text-container">
                                <animated.img className="mylogo" src={logo} alt="myLogo"/>
                                <animated.div className="text" style={translateUP}>
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
                <ParallaxLayer factor={1} offset={0.999} speed={2}> 
                    <img className="sparkle-1" src={sparkles} alt="sparkles"/>
                    <img className="sparkle-2" src={sparkles1} alt="sparkles"/>
                </ParallaxLayer>
                <ParallaxLayer factor={1.5}  offset={0.9} speed = {1.5}>
                    <About></About>
                </ParallaxLayer>
                <ParallaxLayer factor={1} offset={0.99} speed={2}> 
                    <img className="sparkle-3" src={sparkles} alt="sparkles"/>
                    <img className="sparkle-4" src={sparkles1} alt="sparkles"/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.2}>
                    <div className="black-space">
                    <section className ="direction aurora">
                        <NavLink to="/portfolio"> Portfolio <span>🚀</span> </NavLink>
                    </section>
                    </div>  
                </ParallaxLayer>
                <ParallaxLayer factor={1} offset={1.999} speed={2.5}>
                    <Footer></Footer>
                </ParallaxLayer>
            </Parallax>
        </main>
    ) 
}