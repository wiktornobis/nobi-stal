import { Link } from "react-router-dom";

import './_nav.scss';

function Nav() {
    return (
        <nav className="nav">
            {/* <HamburgerMenu /> */}
            <div className="nav_menu">
                <div className="nav_menu_first_column">
                    <div className="first_container">
                        <p className="first_container_icon">1</p>
                        <p className="first_container_text">Najwysza jakość</p>
                    </div>
                    <div className="second_container">
                        <p className="second_container_icon">2</p>
                        <p className="second_container_text">2-letnia gwarancja</p>
                    </div>
                </div>
                <ul className="nav_menu_second_column">
                    <div className="nav_menu_second_column">
                        <p>logo</p>
                    </div>
                    <li className="nav_menu_second_column_text">
                        <Link to='/'>Strona główna</Link>
                    </li>
                    <li className="nav_menu_second_column_text">
                        <Link to='/produkty'>Produkty</Link>
                    </li>
                    <li className="nav_menu_second_column_text">
                        <Link to='/kontakt'>Kontakt</Link>
                    </li>
                    <li className="nav_menu_second_column_text">
                        <Link to='/dojazd'>Dojazd</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;