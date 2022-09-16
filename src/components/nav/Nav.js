import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faUserShield} from "@fortawesome/free-solid-svg-icons";

import HamburgerMenu from "./HamburgerMenu";

import './_nav.scss';

function Nav() {
    return (
        <nav className="nav">
            <div className="nav_menu">
                <div className="nav_menu_first_column">
                    <div className="first_container">
                        <p className="first_container_icon"><FontAwesomeIcon icon={faCheckCircle} /></p>
                        <p className="first_container_text">Najwysza jakość</p>
                    </div>
                    <div className="second_container">
                        <p className="second_container_icon"><FontAwesomeIcon icon={faUserShield} /></p>
                        <p className="second_container_text">2-letnia gwarancja</p>
                    </div>
                </div>
                <div className="nav_menu_second_column">
                <HamburgerMenu />
                    <div className="nav_menu_second_column_logo">
                        <p>logo</p>
                    </div>
                    <ul className="nav_menu_second_column_menu">
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/'>Strona główna</Link>
                        </li>
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/produkty'>Produkty</Link>
                        </li>
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/kontakt'>Kontakt</Link>
                        </li>
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/dojazd'>Dojazd</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;