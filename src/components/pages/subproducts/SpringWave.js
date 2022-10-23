import './_spring-global.scss';
import { Outlet } from "react-router-dom";


function SpringWave(props) {
    return (
        <>
        <div className="springs-wave">
            <div className="left-container">
                <div className="back-nav"></div>
                <h2 className="spring-title">Sprężyny faliste</h2>
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

export default SpringWave;