import React from 'react';
import './Contac.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, config } from 'react-spring';
import {useForm, ValidationError} from '@formspree/react'
import Footer from './Footer';
import frame from '../draws/Frame-1.jpg';
import pngFooter from '../draws/BG-png.png';

export default function Contact() {
    const [submit, setSubmit] = useForm("xvovdrvz");
    if(submit.succeeded) {
        return <p> Thanks for contact! :) </p>
    }
    return(
        <main id="contact-site">
            <Parallax config={config.molasses} pages={1.15}>
                <ParallaxLayer offset={0} speed={1.2}>
                <div className="black-space-portfolio">
                    <section className ="contact-hero">
                        <img src={pngFooter} alt="pngFooter" />
                        <h3> Contact <span>📝</span> </h3>
                    </section>
                </div> 
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={2.5}>
                    <div className="form-complete">
                        <img className="image-form" src={frame} alt="photo" />
                            <form onSubmit={setSubmit} id="contact" className="contact-form">
                            <h2>Contact me!</h2>
                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" type="text"/>
                            <ValidationError prefix="Name" field="name" errors={submit.errors} />
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email"/>
                            <ValidationError prefix="Email" field="email" errors={submit.errors}/>
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" type="phone"/>
                            <ValidationError prefix="Phone" field="phone" errors={submit.errors} />
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                            <ValidationError prefix="Message" field="message" errors={submit.errors}  />
                            <button type="submit" disabled={submit.submitting}>CONTACT</button>
                            </form>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer factor={1.5} offset={0.99} speed={3}>
                    <Footer></Footer>
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}