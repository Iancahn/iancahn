import React from 'react';
// import constants


function Project({ projectimage, projectimagealt, projecttitle, projectdescription, stackused }) {
    return (
        <div className="project" id="projects">
            <img className="ProjectImage" alt={projectimagealt} src={projectimage}></img>
            <h2>{projecttitle}</h2>
            <p>{projectdescription}</p>
            <p className="stack">• {stackused}</p>
        </div>
    );
};

export default Project;