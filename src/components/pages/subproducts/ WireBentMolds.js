import './_spring-global.scss';
import { Outlet } from "react-router-dom";


function  WireBentMolds(props) {
    return (
        <>
        <div className="wire-bent">
            <div className="left-container">
                <div className="back-nav"></div>
                <h2 className="wire-bent-title">Formy gięte z drutu</h2>
                <h3 className="wire-bent-subtitle">Sprężyny</h3>
                <p className="wire-bent-text"></p>
            </div>
            <div className="right-container">
              
            </div>
           
        </div>
        <Outlet />
        </>
    );
}

export default  WireBentMolds;