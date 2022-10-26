import './_spring-global.scss';
import arrow from '../../../assets/arrow.png';
import wireBentMolds from '../../../assets/formy-giete-z-drutu.png';
import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function  WireBentMolds(props) {
    return (
        <>
        <div className="springs-background">
            <div className="sub-product general-container">
                <div className="spring-nav ">
                    <Link to='/produkty'>
                        <h2 className="spring-nav-back">Produkty</h2>
                    </Link>
                    <img className='spring-nav-img'
                        src={arrow}
                        alt="" 
                    />
                    <h3 className="spring-nav-current">Formy gięte z drutu</h3>
                </div>
                <div className="spring-compression">
                    <div className="left-container">
                        <h2 className="spring-title">Formy gięte z drutu</h2>
                        <h3 className="spring-subtitle">Sprężyny</h3>
                        <p className="spring-text">
                            Sprężyny naciskowe można zamówić po uprzednim złożeniu zamówienia. Dzięki najszerszemu
                            asortymentowi sprężyn naciskowych w różnych rozmiarach, Nobi-Stal zapewnia pełne wsparcie.
                            Wszystkie sprężyny naciskowe są szlifowane od 1,0 mm i produkowane zgodnie z 
                            normami DIN 2089-1 (EN 13906-1) i DIN 2095-2.
                        </p>
                        <HashLink to="/produkty/6#formy-giete-z-drutu"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >
                            <h4 className="read-more">Czytaj Więcej</h4>
                        </HashLink>
                    </div>
                    <div className="right-container">
                        <img className="defer-image is-loaded image-ratio:61 applied-default right-container-img" 
                            src={wireBentMolds}
                            alt="Formy gięte z drutu" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="springs-main-container general-container">
            <h3 id='formy-giete-z-drutu' className="springs-main-container-title">Formy gięte z drutu</h3>
            <h4 className="springs-main-container-subtitle">Formy gięte z drutu</h4>
        </div>
        <Outlet />
    </>
    );
}

export default  WireBentMolds;