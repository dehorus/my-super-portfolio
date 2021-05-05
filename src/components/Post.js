import React, {useState, useEffect} from 'react'
import './Home.scss';
import sanityClient from '../helpers/client'
import { Link } from 'react-router-dom';
import './Post.scss';

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
            <section className="container-mobile">
                <h1>Blog Posts PAGE</h1>
                <h2> WELCOME to my blog</h2>
                <div className="articles">
                    {postData && postData.map((post, index ) => ( 
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
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
        </main>
    );
}