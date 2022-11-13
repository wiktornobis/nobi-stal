import './_productsCarousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {  Link } from "react-router-dom";
 
// import naciagowe from '../../assets/sprezyny-naciagowe.png';
// import faliste from '../../assets/sprezyny-faliste.png';
// import sciskowe from '../../assets/sprezyny-sciskowe.png';
// import formy from '../../assets/formy-giete-z-drutu.png';
// import talerzowe from '../../assets/sprezyny-talerzowe.png';
import { dataCarousel } from './DataCarousel';

import { useEffect } from 'react';

function ProductsCarousel() {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: false,
        adaptiveHeight: false,
        mobileFirst: true, 
        autoplaySpeed: 3500,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",

        responsive: [
            {   
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
          
            },
            {   
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
      
            },
            {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
        }]   
      };
    return (
        <>
            <div className="products_box general-container">
                <h2 className="products_box_title" data-aos="fade-up">Nasze produkty</h2>
                <h3 className="products_box_text" data-aos="fade-up">
                    Posiadamy duże doświadczenie w produkcji, oferujemy możliwość 
                    wykonaniasprężyn na specjalne zamówienie.
                </h3>
            </div>
            <Slider {...settings} className="general-container products">
                <div className="products_container" data-aos="fade-up">
                    {dataCarousel.map((product, index) => (
                                <Link to={`/produkty/${product.id}`}>
                                    <div key={index} className='products_container_product'>  
                                        <img
                                            className='products_container_img'
                                            src={product.img}
                                            alt={product.title}
                                        />
                                        <h3 className='products_container_title'>{product.title}</h3>
                                        <p className='items_container_container_title'>{product.text}</p>
                                    </div>
                                </Link>
                            ))}
                </div>
                {/* <div className="product" data-aos="fade-up">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={naciagowe} alt="sprężyny naciągowe" />
                    <h3 className='items_text'>Spręyny naciągowe</h3>
                    <p className='items_container_title'>Spręyny techniczne</p>
                </div>
                <div className="product" data-aos="fade-up">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={formy} alt="formy gięte z drutu" />
                    <h3 className='items_text'>Formy giętę z drutu</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div>
                <div className="product" data-aos="fade-up">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={sciskowe} alt="sprężyny naciskowe" />
                    <h3 className='items_text'>Spręyny naciskowe</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div>
                <div className="product" data-aos="fade-up">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={faliste} alt="sprężyny faliste" />
                    <h3 className='items_text'>Spręyny faliste</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div>
                <div className="product" data-aos="fade-up">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={talerzowe} alt="sprężyny talerzowe" />
                    <h3 className='items_text'>Spręyny talerzowe</h3>
                    <p className='items_title'>Spręyny techniczne</p>
                </div> */}
                  {/* <div className="items" data-aos="fade-up"> */}
                    
                {/* </div> */}
            </Slider>
        </>
        
    );
}

export default ProductsCarousel;