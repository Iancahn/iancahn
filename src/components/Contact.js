import React from 'react';
// import Icons
import mail from '../img/envelope-icon.png';
import github from '../img/github-icon.png';
import linkedin from '../img/linkedin-icon.png';

function Contact() {
    return (
        <div className="contact-container" id="contacts">
            <div className="row">
                <div className="column">
                    <div class="about-text">
                        <p className="greenText">- Have a project for me?</p>
                        <h2>Get in touch with me to setup a Zoom/Teams/Discord Meeting.</h2>
                    </div>
                </div>
                <div class="column">
                    <div className="socials"></div>
                    <h2>Contact Information:</h2>
                    {/* mail/ github/ linkedin */}
                    <a href="mailto:hello@iancahn.com" target="_blank"><img className="social-icons" src={mail}></img></a>
                    <a href="https://github.com/Iancahn" target="_blank"><img className="social-icons" src={github}></img></a>
                    <a href="https://www.linkedin.com/in/ian-cahn-801328184/" target="_blank"><img className="social-icons" src={linkedin}></img></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;