import React from 'react';
import contactme from '../assets/image/contactme.jpg';
import "./contact.css"

const Contact = () => {
    return (
        <section id="contact">
        <h1>Contact Me</h1>
        <div class="container">
            <div class="half-width leftside">
                <img src={contactme} alt=""/>
            </div>
            <div class="half-width rightside">
                <h3>Get in touch</h3>
                <div class="contactbox">
                    <input class="contact" type="text" placeholder="Name"/>
                    <input class="contact" type="email" placeholder="Email"/>
                </div>
                <div>
                    <input class="contact project" type="text" placeholder="Project"/>
                </div>
                <div>
                    <textarea class="contact project" name="" id="" cols="30" rows="10"
                        placeholder="Message"></textarea>
                </div>
                <input class="button" type="button" value="Send Message"/>
            </div>
        </div>
    </section>
    );
};

export default Contact;