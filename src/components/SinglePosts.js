import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../helpers/client.js'
import imgageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import './SinglePosts.scss';
import Footer from './Footer.js';
import BehanceBlack from '../draws/Behance-black.svg'
import GithubBlack from '../draws/Github-black.svg'
import LinkedinBlack from '../draws/LinkeDin-black.svg'

const builder = imgageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
export default function SinglePosts() {
    const [singlePost, setSinglePost] = useState(null);
    const  { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset-> {
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error)
    }, [slug]);

    if(!singlePost) return <div> Loading...</div>;

    return(
        <main id="single-post">
            <article>
                <header className="header-hero">
                    <img className="img-hero" src={singlePost.mainImage.asset.url} alt={singlePost.title} />
                </header>
                <div className="container-single">
                    <h1>{singlePost.title}</h1>
                    <div className="block-content">
                        <BlockContent blocks={singlePost.body} projectId="pvztv1by" dataset="production" />
                    </div>
                    <div>
                        <hr />
                        <div className="author-section">
                            <img className="author-img" src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
                            <div className="author-text">
                                <span> Author </span>
                                <span className="name-author">{singlePost.name}</span>
                            </div>
                            <div className="redes-sociales">
                                <a href="https://www.linkedin.com/in/angelruiz95/" target="_blank"> <img src={LinkedinBlack} alt="linkedin" /></a>
                                <a href="https://github.com/dehorus" target="_blank"> <img src={GithubBlack} alt="github" target="_blank"/></a>
                                <a href="https://www.behance.net/angelruiz12" target="_blank"> <img src={BehanceBlack} alt="behance"target="_blank" /></a>
                            </div>
                        </div>
                     </div>
                </div>
            </article>
            <Footer></Footer>
        </main>
    );
}