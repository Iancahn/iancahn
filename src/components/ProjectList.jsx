import React from 'react';
import Project from "./Project";
// important properties
import tesla from '../img/tesla-project.jpg';
import ppc from '../img/PPC-calculator-project.jpg';
import music from '../img/music-player-project.jpg';
// declare constants
const teslaAlt = 'Tesla car driving on tar road';
const ppcAlt = 'a Handmade Google Icon';
const toDoAlt = 'a notepad with pen next to it';


//tesla, google PPC calculator, to do list, music app, Google Front End interview questionaire, NotTruth

function ProjectList() {
    return (
        <div className="projectlist-container">
            <div className="row2">
                <div className="column3">
                    <div className="project-div">
                        <img className="projectImage" src={tesla} alt={teslaAlt}></img>
                        <Project projecttitle="Tesla Home Clone" projectdescription="To further improve my UX skills, I rebuilt the new Tesla homepage with basic HTML, CSS and Vanilla Javascript." stackused="HTML, CSS, Javascript" />
                    </div>
                </div>
                <div className="column3">
                    <div>
                        <img className="projectImage" src={ppc} alt={ppcAlt} />
                        <Project projecttitle="PayPerClick Calculator" projectdescription="I built a PPC calculator that connects with the Google Keyword Planner Api, so I can calculate marketing ROI for certain keywords and clients." stackused="HTML, CSS, Javascript" />
                    </div>
                </div>
                <div className="column3">
                    <div>
                        <img className="projectImage" src={music} alt={toDoAlt} />
                        <Project projecttitle="Magical Music Player" projectdescription="I built a music player with React, to show the music I am currently listen to. Now if Spotify isn't working correctly, I can use my very own music player." stackused="HTML, CSS, React" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;