import './_achievement.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCalendarCheck, faListCheck} from "@fortawesome/free-solid-svg-icons";

function Achievement() {
    return (
        <section className="achievement general-container">
            <h2 className="achievement_title">Dlaczego NOBI-STAL to najlepszy wybór?</h2>
            <div className="achievement_container">
                <div className="achievement_container_first">
                    <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                    <h3 className="achievement_container_first_title">Zaufana marka</h3>
                    <h4 className="achievement_container_first_text">Ponad 10 lat doświadczenia</h4>
                </div>
                <div className="achievement_container_second">
                    <FontAwesomeIcon icon={faListCheck} className="icon" />
                    <h3 className="achievement_container_second_title">Kontrola zapasów</h3>
                    <h4 className="achievement_container_second_text">Sprężyny dostępne od ręki</h4>
                </div>
                <div className="achievement_container_third">
                <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
                    <h3 className="achievement_container_third_title">Terminowość</h3>
                    <h4 className="achievement_container_third_text">Nasze zamówienia realizujemy zgodnie z terminem</h4>
                </div>
            </div>
        </section>
    );
}

export default Achievement;