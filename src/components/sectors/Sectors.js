import './_sectors.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/maszynybudowlane.jpg'
import img2 from '../../assets/maszynyrolnicze.jpg'
import img3 from '../../assets/gornictwo.jpg'
import { useEffect } from 'react';

import { useTranslation} from 'react-i18next';

function Sectors() {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <section className="sectors" data-aos="fade-up">
            <div className="sectors_article">
                <img class="defer-image is-loaded image-ratio:61 applied-default" src={img1} alt="" />
                <h3 className="sectors_article_title">{t('sectors.industry1')}</h3>
            </div>
            <div className="sectors_article">
                <img class="defer-image is-loaded image-ratio:61 applied-default" src={img2} alt="" />
                <h3 className="sectors_article_title">{t('sectors.industry2')}</h3>
            </div>
            <div className="sectors_article">
                <img class="defer-image is-loaded image-ratio:61 applied-default" src={img3} alt="" />
                <h3 className="sectors_article_title">{t('sectors.industry3')}</h3>
            </div>
        </section>
    );
}

export default Sectors;