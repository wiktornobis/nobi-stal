import './_achievement.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCalendarCheck, faListCheck} from "@fortawesome/free-solid-svg-icons";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';

function Achievement() {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <section className="achievement general-container">
            <h2 className="achievement_title">{t('achievement.title')}</h2>
            <div className="achievement_container">
                    <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                    <FontAwesomeIcon icon={faListCheck} className="icon" />
                    <FontAwesomeIcon icon={faCalendarCheck} className="icon" />          
                    <h3 className="achievement_title">{t('achievement.text1')}</h3>
                    <h3 className="achievement_title">{t('achievement.text2')}</h3>
                    <h3 className="achievement_title">{t('achievement.text3')}</h3>
                    <h4 className="achievement_text">{t('achievement.text4')}</h4>
                    <h4 className="achievement_text">{t('achievement.text5')}</h4>
                    <h4 className="achievement_text">{t('achievement.text6')}</h4>
            </div>
        </section>
    );
}

export default Achievement;