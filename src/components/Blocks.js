import React from 'react';

function Blocks() {
    return (
        <div className="blocks-container">
            <div className="row">
                <div className="column3">
                    <div className="block">
                        <h3 className="block-title">Website Designer</h3>
                        <p className="block-text">180 Projects Completed</p>
                    </div>
                </div>
                <div className="column3">
                    <div className="block">
                        <h3 className="block-title">Front End Developer</h3>
                        <p className="block-text">10 Projects Completed</p>
                    </div>
                </div>
                <div className="column3">
                    <div className="block">
                        <h3 className="block-title">BlockChain Developer</h3>
                        <p className="block-text">6 Projects Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blocks;