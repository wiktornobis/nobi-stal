import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faUserShield} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { useTranslation} from 'react-i18next';


import HamburgerMenu from "./HamburgerMenu";
import './_nav.scss';

function Nav() {
    const { t, i18n } = useTranslation();
    const [active, setActive] = useState();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }
    
    return (
        <nav className="nav">
            <div className="nav_menu ">
                <div className="nav_menu_first_column">
                    <div className="first_container">
                        <div className="first_container_text">
                            <FontAwesomeIcon icon={faCheckCircle} className="first_container_icon" />
                             Najwysza jakość  
                             <FontAwesomeIcon className="first_container_icon" icon={faUserShield} />
                             2-letnia gwarancja
                        </div>
                    </div>
                </div>
                <div className="nav_menu_second_column">
                <HamburgerMenu />
                    <a href="/">
                        <div className="nav_menu_second_column_logo"></div>
                    </a>
                    <ul className="nav_menu_second_column_menu">
                        <li onClick={() => setActive('home')} 
                            className= {active === 'home' 
                                                ? "nav_menu_second_column_menu_link_active active_link" 
                                                :"nav_menu_second_column_menu_link"}
                        >
                            <Link to='/'>{t('nav.1')}</Link>
                        </li>
                        <li onClick={() => setActive('products')} 
                            className={active === 'products' 
                                                ? "nav_menu_second_column_menu_link_active active_link" 
                                                : "nav_menu_second_column_menu_link"}
                        >
                            <Link to='/produkty'>{t('nav.2')}</Link>
                        </li>
                        <li onClick={() => setActive('form')} 
                            className={active === 'form' 
                                                ? "nav_menu_second_column_menu_link_active active_link" 
                                                : "nav_menu_second_column_menu_link"}
                        >
                            <Link to='/formularz'>{t('nav.3')}</Link>
                        </li>
                        <li onClick={() => setActive('contact')} 
                            className={active === 'contact' 
                                                ? "nav_menu_second_column_menu_link_active active_link" 
                                                : "nav_menu_second_column_menu_link"}
                        >
                            <Link to='/kontakt'>{t('nav.4')}</Link>
                        </li>
                    </ul>
             
                    <div className="language">
              
                        <button onClick={() => handleClick('en')}>
                            English
                        </button>
                        <button onClick={() => handleClick('pl')}>
                            Polish
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;