import React from 'react'
import { useSpring, animated, config } from 'react-spring';
import {Parallax, ParallaxLayer,} from '@react-spring/parallax';
import logo from '../logo.svg'
import "./Home.scss";
import MoonIllustration from './MoonIllustration';
import Particles from 'react-particles-js';
import About from './About';
import sparkles from '../draws/Sparkles.svg'
import sparkles1 from '../draws/Sparkles-1.svg'
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import html5 from '../draws/skills/HTML5.svg'
import css3 from '../draws/skills/CSS.svg'
import javascriptlogo from '../draws/skills/JS.svg'
import sass from '../draws/skills/SASS.svg'
import reactjs from '../draws/skills/REACT.svg'

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
            <Parallax config={config.molasses} pages={2.28} >
                <ParallaxLayer factor={1.5} offset= {0} speed={2.5}>
                    <div className="hero">
                        <div className="container-mobile">
                            <ParallaxLayer offset={0.1} speed={1.5}>
                            <div className="text-container">
                                <animated.img className="mylogo" src={logo} alt="myLogo"/>
                                <animated.div className="text" style={translateUP}>
                                    <h3>front-end developer</h3>
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
                <ParallaxLayer factor={1} offset={1} speed={2}> 
                    <img className="sparkle-3" src={sparkles} alt="sparkles"/>
                    <img className="sparkle-4" src={sparkles1} alt="sparkles"/>
                </ParallaxLayer>
                <ParallaxLayer factor={1} offset={1} speed={2.5}>
                    <div className="skills-section">
                        <h2> Skills & knolewedge </h2>
                        <div className="skills">
                            <div className="tecn htmlbox">
                                 <h3> HTML5 </h3>
                                 <img src={html5} alt="html5" />
                            </div>
                            <div className="tecn cssbox">
                                 <h3> CSS3 </h3>
                                 <img src={css3} alt="html5" />
                            </div>
                            <div className="tecn javasbox">
                                 <h3> JavaScript </h3>
                                 <img src={javascriptlogo} alt="html5" />
                            </div>
                            <div className="tecn sassbox">
                                 <h3> SASS </h3>
                                 <img src={sass} alt="html5" />
                            </div>
                            <div className="tecn reactbox">
                                 <h3> ReactJS </h3>
                                 <img src={reactjs} alt="html5" />
                            </div>
                        </div>
                        <div className ="other-technologys">
                            <h3> Other technologys 👨‍💻</h3>
                            <div className="bases-tec">
                                <div className="develop">
                                <h4> Development 🧑‍🚀 </h4>
                                    <ul>
                                        <li> Webpack </li>
                                        <li> WordPress </li>
                                        <li> mySQL </li>
                                    </ul>   
                                </div>
                                <div className="design-sec">
                                    <h4> Design 🎨 </h4>
                                        <ul>
                                            <li> Figma </li>
                                            <li> Adobe XD</li>
                                            <li> Adobe Illustrator </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-contact">
                        <NavLink to="/portfolio"> Portfolio <span> 🚀 </span> </NavLink>
                        <NavLink to="/contact"> Contact <span> 📝 </span> </NavLink>
                    </div>
                    </div>
                    
                </ParallaxLayer>
                <ParallaxLayer factor={1} offset={1.999} speed={2}>
                    <Footer></Footer>
                </ParallaxLayer>
            </Parallax>   
        </main>
    ) 
}