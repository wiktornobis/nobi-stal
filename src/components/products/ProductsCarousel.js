import './_productsCarousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

import {  Link } from "react-router-dom";
import naciagowe from '../../assets/sprezyny-naciagowe.png';
import faliste from '../../assets/sprezyny-faliste.png';
import sciskowe from '../../assets/sprezyny-sciskowe.png';
import formy from '../../assets/formy-giete-z-drutu.png';
import talerzowe from '../../assets/sprezyny-talerzowe.png';

import { useTranslation} from 'react-i18next';


import { useEffect } from 'react';

function ProductsCarousel() {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        adaptiveHeight: false,
        mobileFirst: true, 
        autoplaySpeed: 2500,
        centerMode: true,
        infinite: true,
        centerPadding: "200px",
     

        responsive: [
            {   
                breakpoint: 1920,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerPadding: "160px",
                }
            },
            {   
                breakpoint: 1580,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerPadding: "115px",
                }
            },
            {   
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerPadding: "120px",
                }
            },

            {   
                breakpoint: 989,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: "100px",
                }
            },
            {   
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 567,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                },
        }]   
      };
    return (
        <>
            <div className="products_box general-container">
                <h2 className="products_box_title" data-aos="fade-up">{t('carousel.products.title')}</h2>
                <h3 className="products_box_text" data-aos="fade-up">
                    {t('carousel.products.text')}
                </h3>
            </div>
            <Slider {...settings} className="general-container products">
               
                <div className="product" data-aos="fade-up">
                    <Link to='produkty/2'>
                        <img className="defer-image is-loaded image-ratio:61 applied-default" src={naciagowe} alt="sprężyny naciągowe" />
                    </Link>
                    <h3 className='items_text'>Spręyny ściskowe</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div>
             
            
                <div className="product" data-aos="fade-up">
                    <Link to='produkty/6'>
                        <img className="defer-image is-loaded image-ratio:61 applied-default" src={formy} alt="formy gięte z drutu" />
                    </Link>
                    <h3 className='items_text'>Formy giętę z drutu</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div>
            
            
                <div className="product" data-aos="fade-up">
                    <Link to='produkty/1'>
                        <img className="defer-image is-loaded image-ratio:61 applied-default" src={sciskowe} alt="sprężyny naciskowe" />
                    </Link>
                    <h3 className='items_text'>Spręyny naciskowe</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div>
            
                
                <div className="product" data-aos="fade-up">
                    <Link to='produkty/5'>
                        <img className="defer-image is-loaded image-ratio:61 applied-default" src={faliste} alt="sprężyny faliste" />
                    </Link>
                    <h3 className='items_text'>Spręyny faliste</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div>
        
    
                <div className="product" data-aos="fade-up">
                    <Link to='produkty/4'>
                        <img className="defer-image is-loaded image-ratio:61 applied-default" src={talerzowe} alt="sprężyny talerzowe" />
                    </Link>
                    <h3 className='items_text'>Spręyny talerzowe</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div> 

            </Slider>
        </>
        
    );
}

export default ProductsCarousel;