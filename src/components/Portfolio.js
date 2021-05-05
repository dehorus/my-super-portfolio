import React, { useState, useEffect } from 'react'
import sanityClient from '../helpers/client';

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
        <section>
            <div className="container">
                <h1> My portfolio </h1>
                <section className="portfolio-content">
                {projectData && projectData.map((project) => (
                    <article className="cards-portfolio">         
                        <div className="card">
                            <img src={project.imageP.asset.url} alt={project.imageP.alt}/>
                            <div className="content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <span> <strong> Finished </strong>: {" "} {new Date(project.date).toLocaleDateString()}</span>
                                <button> <a href={project.link} target="_blank" rel="noopener noreferrer"> View project</a></button>
                                <button> <a href={project.repository}></a>View repo on GIT!</button>
                            </div>
                        </div>
                    </article>
                    ))}
                </section>
            </div>
        </section>
    )
}