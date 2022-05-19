import React from 'react';
// import images
import bootstrap from '../img/bootstrap-icon.png';
import tailwind from '../img/tailwind-icon.png';
import nextjs from '../img/nextjs-icon.png';
import mysql from '../img/mysql-icon.png';

// nodejs/ nextJS/ bootstrap / 

function IconList2() {
    return (
        <div className="icon-container">
            <div className="row">
                <div className="column4">
                    <div>
                        <img src={nextjs} alt="Just a NextJS icon"></img>
                    </div>
                </div>
                <div className="column4">
                    <div>
                        <img src={tailwind} alt="Just a Tailwind icon"></img>
                    </div>
                </div>
                <div className="column4">
                    <div>
                        <img src={bootstrap} alt="Just a BootStrap icon"></img>
                    </div>
                </div>
                <div className="column4">
                    <div>
                        <img src={mysql} alt="Just a MySQL icon"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconList2;