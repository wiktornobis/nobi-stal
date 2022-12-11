import React, {useState} from 'react';
import './_hamburgerMenu.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import { SidebarData } from "./SidebarData";
import { useTranslation} from 'react-i18next';

import anglia from '../../assets/flaga_w_brytanii.jpeg';
import polska from '../../assets/flaga_polska.jpg';

function HamburgerMenu() {
    const { i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to='#' className='navbar__menu'>
                    <FontAwesomeIcon  icon={faBars} onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' 
                                    : 'nav-menu'}>
                <ul className="navbar__menu--items"onClick={showSidebar}>
                      <div className="language-mobile">
                        <button onClick={() => handleClick('pl')}>
                            <img src={polska} alt="język polski" className="flag"/>
                        </button>
                        <button onClick={() => handleClick('en')}>
                            <img src={anglia} alt="język angielski" className="flag" />
                        </button>
                    </div>
                    <li className="navbar__toggle">
                        <Link to='#' className='navbar__toggle--icon'>
                            <FontAwesomeIcon icon={faXmark} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default HamburgerMenu;