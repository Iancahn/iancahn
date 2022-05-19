import React from 'react';

function Hello() {
    return (
        <div className="hello-container" id="hello">
            <div class="row">
                <div class="column">
                    <h1>Hello, I am Ian<span className="greenText">.</span></h1>
                </div>
                <div class="column">
                    <div className="hello-text">
                        <p className="greenText">- Introduction</p>
                        <h2>I am a Front End Web Developer, based in sunny South Africa.</h2>
                        <p>I love the web and the awesome things I get to build on it. I have over 7 years of web design experience, with the past 2 years seriously focusing on improving my Front End Dev Stack. I am available for project work and open to remote work opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hello;