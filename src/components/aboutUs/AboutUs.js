import './_aboutUs.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useTranslation} from 'react-i18next';
import { useEffect } from 'react';

function AboutUs() {
    const { t } = useTranslation();

    
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <section className="about general-container">
            <h2 className="about_title">{t('about.title')}</h2>
            <h3 className="about_text">{t('about.text')}</h3>
            <h2 className="about_sectors" data-aos="fade-up">{t('about.sectors')}</h2>
        </section>
    );
}

export default AboutUs;