import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faUserShield} from "@fortawesome/free-solid-svg-icons";

// import logo from '../../assets/nobistal.png';

import HamburgerMenu from "./HamburgerMenu";

import './_nav.scss';

function Nav() {
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
                    <div className="nav_menu_second_column_logo">
                        {/* <p className="logo">{logo}</p> */}
                    </div>
                    <ul className="nav_menu_second_column_menu">
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/'>Strona główna</Link>
                        </li>
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/produkty'>Produkty</Link>
                        </li>
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/formularz'>Formularz</Link>
                        </li>
                        <li className="nav_menu_second_column_menu_link">
                            <Link to='/kontakt'>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;