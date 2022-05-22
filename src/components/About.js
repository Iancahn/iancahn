import React from 'react';

function About() {
    return (
        <div className="about-container" id="about">
            <div className="row">
                <div className="column">
                    <div class="about-text">
                        <p className="greenText">- A bit about me</p>
                        <h2>I love taking long walks on the beach. If "on the beach" is a box of chicken nuggets, and "taking long walks" is actually eating <span className="greenText">...</span></h2>
                    </div>
                </div>
                <div class="column">
                    <h2>My Work Experience2</h2>
                    <p>For the past 7 years I have been working for myself building websites for small and medium businesses in and around South Africa. I started learning HTML and CSS way back in 2015, but took the easy route with Wordpress. For the past 2 years I decided to get back into actual web development, and it's safe to say I fell in love writing code and solving actual web problems.</p>
                    <p>I would say my best strengths are that I am naturally curious, a self starter and my extensive background in digital marketing. I believe that my background gives me an edge when it comes to project management, UX/graphic design, Wordpress, Webflow, SEO, PPC and more.</p>
                </div>
            </div>
        </div>
    );
};

export default About;