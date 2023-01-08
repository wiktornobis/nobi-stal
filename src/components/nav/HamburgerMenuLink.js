import {Link} from "react-router-dom";
import { useTranslation} from 'react-i18next';

function HamburgerMenuLink() {
    const { t } = useTranslation();
    return (
        <div>
            <Link to='/'>
                <div className="items_container">
                    <div className='nav-text'>{t('nav.1')}</div>
                </div>
            </Link>
            <Link to='/produkty'>
                <div className="items_container">                   
                    <div className='nav-text'>{t('nav.2')}</div>
                </div>
            </Link>
            <Link to='/formularz'>
                <div className="items_container">
                    <div className='nav-text'>{t('nav.3')}</div>
                </div>
            </Link>
             <Link to='/kontakt'>
                <div className="items_container">
                    <div className='nav-text'>{t('nav.4')}</div>
                </div>
            </Link>
        </div>
    );
}

export default HamburgerMenuLink;