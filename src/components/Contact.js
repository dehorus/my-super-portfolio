import React from 'react';
import './Contac.scss';
import {useForm, ValidationError} from '@formspree/react'

export default function Contact() {
    const [submit, setSubmit] = useForm("xvovdrvz");
    if(submit.succeeded) {
        return <p> Thanks for contact! :) </p>
    }
    return(
        <>
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
        </>
    )
}