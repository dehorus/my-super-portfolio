import React from 'react';
import './Contac.scss';

export default function Contact() {
    return(
        <>
            <form action="" className="contact-form">
                <h2>Contact me!</h2>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text"/>
                <label htmlFor="email">Email:</label>
                <input name="email" type="email"/>
                <label htmlFor="phone">Phone</label>
                <input name="phone" type="phone"/>
                <label htmlFor="message">Message</label>
                <input name="message" type="text"/>
                <button type="submit">CONTACT</button>
            </form>
        </>
    )
}