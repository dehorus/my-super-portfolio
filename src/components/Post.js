import React, {useState, useEffect} from 'react'
import './Home.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { useSpring, animated, config } from 'react-spring';
import sanityClient from '../helpers/client'
import { Link } from 'react-router-dom';
import './Post.scss';
import Footer from './Footer';

export default  function Post() {

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                         asset->{
                            _id,
                             url
                        },
                    alt
                 }
             }`
        )
        .then((data) => setPostData(data))
        .catch(console.error);
    }, []);

    return(
        <main className="blog-section">
            <Parallax config={config.molasses} pages={1.45}>
            <ParallaxLayer offset={0} speed = {0.5}>
            <div className="black-space-blog">
                <section className ="direction aurora">
                    <h3> Blog <span>🗒️</span> </h3>
                </section>
            </div> 
            </ParallaxLayer>
            <ParallaxLayer factor={1.5} offset={0.05} speed = {2} >
            <section className="container-mobile">
                <div className="articles">
                    {postData && postData.map((post, index ) => ( 
                    <article>
                        <Link to={"/posts/" + post.slug.current} key={post.slug.current}>
                        <span className="article-post" key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                            className="img-article"/>
                            <span>
                                <h3>{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
            </ParallaxLayer>
            </Parallax>
            <Footer></Footer>
        </main>
    );
}