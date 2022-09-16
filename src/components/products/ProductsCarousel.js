import './_productsCarousel.scss';
import img from '../../assets/a.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductsCarousel() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3500,
      };
    return (
        <>
            <div className="products_box general-container">
                <h2 className="products_box_title">Nasze produkty</h2>
                <h3 className="products_box_text">
                    Posiadamy duże doświadczenie w produkcji, oferujemy możliwość 
                    wykonaniasprężyn na specjalne zamówienie.
                </h3>
            </div>
            <Slider {...settings} className="general-container products">
                <div className="product">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={img} alt="" />
                </div>
                <div className="product">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={img} alt="" />
                </div>
                <div className="product">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={img} alt="" />
                </div>
                <div className="product">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={img} alt="" />
                </div>
                <div className="product">
                    <img className="defer-image is-loaded image-ratio:61 applied-default" src={img} alt="" />
                </div>
            </Slider>
        </>
        
    );
}

export default ProductsCarousel;