import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { useSpring, animated, config } from 'react-spring';
import React, { useState, useEffect } from 'react'
import sanityClient from '../helpers/client';
import  './Portfolio.scss'
import Footer from './Footer';

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
        <section id="portfolio">
            <Parallax config={config.molasses} pages={1.16}>
            <div className="container-mobile">
                    <ParallaxLayer factor={1.5} offset={0} speed = {2}>
                        <h1> My portfolio </h1>
                    </ParallaxLayer>
                    <ParallaxLayer factor={1.5} offset={0.05} speed = {1.5} >
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
                                <button> <a href={project.link} target="_blank" rel="noopener noreferrer"> View project</a></button>
                                <button> <a href={project.repository}></a>View repo on GIT!</button>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    ))}
                </section>
                </ParallaxLayer>
                    <ParallaxLayer factor={1} offset={0.9} speed={1.6}>
                        <Footer></Footer>
                    </ParallaxLayer>
            </div>
            </Parallax>
        </section>
    )
}