import img1 from '../../../assets/sprezyny-sciskowe.png';
import img2 from '../../../assets/sprezyny-naciagowe.png';
import img3 from '../../../assets/sprezyny-skretne.png';
import img4 from '../../../assets/sprezyny-talerzowe.png';
import img5 from '../../../assets/sprezyny-faliste.png';
import img6 from '../../../assets/formy-giete-z-drutu.png';

import './_products.scss';
import {  Link } from "react-router-dom";
import { useTranslation} from 'react-i18next';

function DataProducts() {
    const { t } = useTranslation();
    return (
        <>
            <Link to='/produkty/1'>
                <div className="items_container">
                    <img
                        className='items_container_img'
                        src={img1}
                        alt={t('subpage.productsInformation.productOneTitle')}
                    />
                    <h3 className='items_container_text'>{t('subpage.productsInformation.productOneTitle')}</h3>
                    <p className='items_container_title'>{t('subpage.productsInformation.productSubtitle')}</p>
                </div>
            </Link>
            <Link to='/produkty/2'>
                <div className="items_container">
                    <img
                        className='items_container_img'
                        src={img2}
                        alt={t('subpage.productsInformation.productTwoTitle')}
                    />
                    <h3 className='items_container_text'>{t('subpage.productsInformation.productTwoTitle')}</h3>
                    <p className='items_container_title'>{t('subpage.productsInformation.productSubtitle')}</p>
                </div>
            </Link>
            <Link to='/produkty/3'>
                <div className="items_container">
                    <img
                        className='items_container_img'
                        src={img3}
                        alt={t('subpage.productsInformation.productThreeTitle')}
                    />
                    <h3 className='items_container_text'>{t('subpage.productsInformation.productThreeTitle')}</h3>
                    <p className='items_container_title'>{t('subpage.productsInformation.productSubtitle')}</p>
                </div>
            </Link>
             <Link to='/produkty/4'>
                <div className="items_container">
                    <img
                        className='items_container_img'
                        src={img4}
                        alt={t('subpage.productsInformation.productFourTitle')}
                    />
                    <h3 className='items_container_text'>{t('subpage.productsInformation.productFourTitle')}</h3>
                    <p className='items_container_title'>{t('subpage.productsInformation.productSubtitle')}</p>
                </div>
            </Link>
             <Link to='/produkty/5'>
                <div className="items_container">
                    <img
                        className='items_container_img'
                        src={img5}
                        alt={t('subpage.productsInformation.productFiveTitle')}
                    />
                    <h3 className='items_container_text'>{t('subpage.productsInformation.productFiveTitle')}</h3>
                    <p className='items_container_title'>{t('subpage.productsInformation.productSubtitle')}</p>
                </div>
            </Link>
            <Link to='/produkty/6'>
                <div className="items_container">
                    <img
                        className='items_container_img'
                        src={img6}
                        alt={t('subpage.productsInformation.productSixTitle')}
                    />
                    <h3 className='items_container_text'>{t('subpage.productsInformation.productSixTitle')}</h3>
                    <p className='items_container_title'>{t('subpage.productsInformation.productSubtitleTwo')}</p>
                </div>
            </Link>
        </>
   
    );
}

export default DataProducts;