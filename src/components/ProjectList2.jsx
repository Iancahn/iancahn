import React from 'react';
import Project from "./Project";
// important properties
import question from '../img/question-project.jpg';
import notTruth from '../img/not-truth-social-project.jpg';
import toDoList from '../img/todo-list-project.jpg';
// declare constants
const questionAlt = 'Tesla car driving on tar road';
const notTruthAlt = 'Tesla car driving on tar road';
const toDoListAlt = 'Tesla car driving on tar road';


//tesla, google PPC calculator, music app, Google Front End interview questionaire, NotTruth , to do list

function ProjectList2() {
    return (
        <div className="projectlist-container">
            <div className="row2">
                <div className="column3">
                    <div className="project-div">
                        <img className="projectImage" src={question} alt={questionAlt}></img>
                        <Project projecttitle="Google Front Test" projectdescription="I saw a great Google Front-End interview on Youtube. They built a questionaire by connecting to a certain API." stackused="HTML, CSS, Javascript" />
                    </div>
                </div>
                <div className="column3">
                    <div>
                        <img className="projectImage" src={notTruth} alt={notTruthAlt} />
                        <Project projecttitle="NotTruth/Twitter clone" projectdescription="Just like Donald Trump, I built my own Twitter with React. Now I just have to wait for Elon Musk to see it, and then buy it for $40 billion." stackused="HTML, CSS, React" />
                    </div>
                </div>
                <div className="column3">
                    <div>
                        <img className="projectImage" src={toDoList} alt={toDoListAlt} />
                        <Project projecttitle="My fancy to do list app" projectdescription="The old classic to do list. If its not on your dev portfolio, are you actually a dev? This is my own to do list app, that works with local storage." stackused="HTML, CSS, Javascript" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList2;