import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { config } from 'react-spring';
import React, { useState, useEffect } from 'react'
import sanityClient from '../client';
import  './Portfolio.scss'
import Footer from './Footer';
import pngFooter from '../draws/BG-png.png';

export default function Portfolio() {
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"]{
                    title,
                    imageP{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                    date,
                    place,
                    description,
                    projectType,
                    link,
                    repository,
                    tags
             } `).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main id="portfolio">
            <Parallax config={config.molasses} pages={1.4}>
                <ParallaxLayer offset={0} speed = {0.5}>
                <div className="black-space-portfolio">
                    <section className ="portfolio-hero">
                        <img src={pngFooter} alt="pngFooter" />
                        <h3> Portfolio <span>🚀</span> </h3>
                    </section>
                </div> 
                </ParallaxLayer>
                <div className="container-portfolio">
                <ParallaxLayer factor={1.5} offset={0.2} speed = {2} >
                <section className="portfolio-content">
                {projectData && projectData.map((project) => (
                    <article className="cards-portfolio">
                        <div className="card">
                            <img src={project.imageP.asset.url} alt={project.imageP.alt}/>
                            <div className="content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <span> <strong> Finished </strong>: {" "} {new Date(project.date).toLocaleDateString()}</span>
                                <div className="buttons">
                                <button className="site-btn"> <a href={project.link} target="_blank" rel="noopener noreferrer"> View site! </a></button>
                                <button className="git-btn"> <a href={project.repository}> View repo on github! </a></button>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    ))}
                </section>
                </ParallaxLayer>
                </div>
                <ParallaxLayer className="footer-parallax" factor={1.5} offset={0.9999} speed = {1.5}>
                    <Footer></Footer>
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}