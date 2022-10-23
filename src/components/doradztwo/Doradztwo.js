import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import img from '../../assets/sprezyny-naciskowe.jpeg';

import './_doradztwo.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function Doradztwo() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section data-aos="fade-up" className="information general-container">
            <div className="information_first_container">
                <FontAwesomeIcon className="information_first_container_icon" icon={faMessage} />
                <h3 className="information_first_container_title">Potrzebujesz doradztwa?</h3>
                <Link to='/formularz'>
                    <h4 className="information_first_container_text">
                        wypełnij formularz
                    </h4>
                </Link>
            </div>
            <div className="information_second_container">
                <h2 data-aos="fade-right" className="information_second_container_title">Produkcja sprężyn oraz sit</h2>
                <p data-aos="fade-right" className="information_second_container_text">
                    Nobi-Stal posiada ogromne doświadczenie i oferuje jedne z największych 
                    na rynku możliwości produkcji sprężyn technicznych, sit preferowanych,
                     tkanych, plecionych oraz cięto ciągnionych 
                </p>
                <img data-aos="fade-left" class="defer-image is-loaded image-ratio:61 applied-default img" src={img} alt="" />
            </div>
        </section>
    );
}

export default Doradztwo;