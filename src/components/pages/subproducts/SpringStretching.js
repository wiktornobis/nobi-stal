import React from 'react';
import { Outlet } from 'react-router-dom';

function SpringStretching(props) {
    return (
        <>
        <div className="springs-compression">
            <div className="left-container">
                <div className="back-nav"></div>
                <h2 className="spring-title">Sprężyny naciągowe</h2>
                <h3 className="spring-subtitle">Sprężyny</h3>
                <p className="spring-text"></p>
            </div>
            <div className="right-container">
              
            </div>
           
        </div>
        <Outlet />
        </>
    );
}

export default SpringStretching;