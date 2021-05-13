import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../helpers/client.js'
import imgageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

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
            <article className="container-single">
                <header className="header-hero">
                    <img className="img-hero" src={singlePost.mainImage.asset.url} alt={singlePost.title} />
                </header>
                <div>
                    <h1>{singlePost.title}</h1>
                    <div className="block-content">
                        <BlockContent blocks={singlePost.body} projectId="pvztv1by" dataset="production" />
                    </div>
                </div>
                <div>
                    <img className="author-img" src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
                    <span>{singlePost.name}</span>
                </div>
            </article>
        </main>
    );
}