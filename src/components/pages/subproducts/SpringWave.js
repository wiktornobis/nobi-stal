import './_spring-global.scss';
import arrow from '../../../assets/arrow.png';
import springWave from '../../../assets/sprezyny-faliste.png';
import { Outlet} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useTranslation} from 'react-i18next';

function SpringWave(props) {
    const { t } = useTranslation();
    return (
        <>
        <div className="springs-background">
            <div className="sub-product general-container">
                <div className="spring-nav">
                    <HashLink to='/produkty#produkty'
                       scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                    >
                        <h2 className="spring-nav-back">{t('subProduct.title')}</h2>
                    </HashLink>
                    <img className='spring-nav-img'
                        src={arrow}
                        alt="" 
                    />
                    <h3 className="spring-nav-current">Sprężyny faliste</h3>
                </div>
                <div className="spring-compression">
                    <div className="left-container">
                        <h2 className="spring-title">Sprężyny faliste</h2>
                        <h3 className="spring-subtitle">{t('subProduct.subtitle')}</h3>
                        <p className="spring-text">
                            Sprężyny naciskowe można zamówić po uprzednim złożeniu zamówienia. Dzięki najszerszemu
                            asortymentowi sprężyn naciskowych w różnych rozmiarach, Nobi-Stal zapewnia pełne wsparcie.
                            Wszystkie sprężyny naciskowe są szlifowane od 1,0 mm i produkowane zgodnie z 
                            normami DIN 2089-1 (EN 13906-1) i DIN 2095-2.
                        </p>
                        <HashLink to="/produkty/5#faliste"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >
                            <h4 className="read-more">Czytaj Więcej</h4>
                        </HashLink>
                    </div>
                    <div className="right-container">
                        <img className="defer-image is-loaded image-ratio:61 applied-default right-container-img" 
                            src={springWave}
                            alt="sprężyny faliste" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="springs-main-container general-container">
            <h3 id='faliste' className="springs-main-container-title">Sprężyny faliste</h3>
            <h4 className="springs-main-container-subtitle">Sprężyny faliste</h4>
        </div>
        <Outlet />
    </>
    );
}

export default SpringWave;