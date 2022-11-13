import './_achievement.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCalendarCheck, faListCheck} from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function Achievement() {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <section className="achievement general-container">
            <h2 className="achievement_title">Dlaczego NOBI-STAL to najlepszy wybór?</h2>
            <div className="achievement_container">
                    <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                    <FontAwesomeIcon icon={faListCheck} className="icon" />
                    <FontAwesomeIcon icon={faCalendarCheck} className="icon" />          
                    <h3 className="achievement_title">Zaufana marka</h3>
                    <h3 className="achievement_title">Kontrola zapasów</h3>
                    <h3 className="achievement_title">Terminowość</h3>
                    <h4 className="achievement_text">Ponad 10 lat doświadczenia</h4>
                    <h4 className="achievement_text">Sprężyny dostępne od ręki</h4>
                    <h4 className="achievement_text">Nasze zamówienia realizujemy zgodnie z terminem</h4>
            </div>
        </section>
    );
}

export default Achievement;