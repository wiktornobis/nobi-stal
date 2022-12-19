import './_products.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {  Link } from "react-router-dom";

import { useTranslation} from 'react-i18next';

function Products({products}) {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <>
            <div className="products_main">
                <div className="products_main_container general-container">
                    <h2 className="products_main_container_title">{t('subpage.products.title')}</h2>
                    <h3 className="products_main_container_text">{t('subpage.products.text')}</h3>
                </div>
            </div>
            <div className="products_main_products general-container">
                <h3 id='produkty' className="products_main_products_title" data-aos="fade-up">Produkty</h3>
                <div className="items" data-aos="fade-up">
                    {products.map((products, index) => (
                        <Link to={`/produkty/${products.id}`}>
                            <div key={index} className='items_container'>  
                                <img
                                    className='items_container_img'
                                    src={products.img}
                                    alt={products.title}
                                />
                                <h3 className='items_container_text'>{t(`${products.title}`)}</h3>
                                <p className='items_container_title'>{products.text}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="information">
                    <h2 className="information_title" data-aos="fade-up">{t('subpage.productsInformation.title')} </h2>
                    <h3 className="information_text" data-aos="fade-up">{t('subpage.productsInformation.text1')}</h3>
                    <h3 className="information_text" data-aos="fade-up">{t('subpage.productsInformation.text2')}</h3>
                    <ul className="information_list" data-aos="fade-up">
                        <li>{t('subpage.productsInformation.list1')}</li>
                        <li>{t('subpage.productsInformation.list2')}</li>
                        <li>{t('subpage.productsInformation.list3')}</li>
                        <li>{t('subpage.productsInformation.list4')}</li>
                        <li>{t('subpage.productsInformation.list5')}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products;