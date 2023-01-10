import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import img from '../../assets/sprezyny-naciskowe.jpeg';

import './_doradztwo.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';

function Doradztwo() {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <section data-aos="fade-up" className="information general-container">
            <div className="information_first_container">
                <FontAwesomeIcon className="information_first_container_icon" icon={faMessage} />
                <h3 className="information_first_container_title">{t('doradztwo.title')}</h3>
                <Link to='/formularz'>
                    <h4 className="information_first_container_text">
                        {t('doradztwo.text')}
                    </h4>
                </Link>
            </div>
            <div className="information_second_container">
                <h2 data-aos="fade-up" className="information_second_container_title">{t('doradztwo.secondTitle')}</h2>
                <p data-aos="fade-up"className="information_second_container_text">
                    {t('doradztwo.secondText')}
                </p>
                <img data-aos="fade-up" class="defer-image is-loaded image-ratio:61 applied-default img" src={img} alt="" />
            </div>
        </section>
    );
}

export default Doradztwo;