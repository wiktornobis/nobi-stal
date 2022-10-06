import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faUserShield} from "@fortawesome/free-solid-svg-icons";

// import logo from '../../assets/nobistal.png';

import HamburgerMenu from "./HamburgerMenu";

import './_nav.scss';
import { useState } from "react";

function Nav() {
    const [active, setActive] = useState();
    return (
        <nav className="nav">
            <div className="nav_menu ">
                <div className="nav_menu_first_column">
                    <div className="first_container">
                        {/* <p className="first_container_icon"><FontAwesomeIcon icon={faCheckCircle} /></p> */}
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
                                                ? "nav_menu_second_column_menu_link active_link" 
                                                :"nav_menu_second_column_menu_link"}
                        >
                            <Link to='/'>Strona główna</Link>
                        </li>
                        <li onClick={() => setActive('products')} 
                            className={active === 'products' 
                                                ? "nav_menu_second_column_menu_link active_link" 
                                                : "nav_menu_second_column_menu_link"}
                        >
                            <Link to='/produkty'>Produkty</Link>
                        </li>
                        <li onClick={() => setActive('form')} 
                            className={active === 'form' 
                                                ? "nav_menu_second_column_menu_link active_link" 
                                                : "nav_menu_second_column_menu_link"}
                        >
                            <Link to='/formularz'>Formularz</Link>
                        </li>
                        <li onClick={() => setActive('contact')} 
                            className={active === 'contact' 
                                                ? "nav_menu_second_column_menu_link active_link" 
                                                : "nav_menu_second_column_menu_link"}
                        >
                            <Link to='/kontakt'>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;