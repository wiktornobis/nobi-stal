import './_products.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Products({products}) {
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className="products_main">
                <div className="products_main_container general-container">
                    <h2 className="products_main_container_title">
                        Wszystkie produkty firmy Nobi-Stal są dostępne po uprzednim zamówieniu.  
                    </h2>
                    <h3 className="products_main_container_text">
                    NOBI-STAL specjalizuje się w produkcji sprężyn technicznych zarówno 
                    w dużych ilościach jak i w pojedynczych zamówieniach.
                    W przypadku sprężyn specjalnych Nobi-Stal ma możliwość 
                    produkcji na specjalne zamówienie klienta.
                    </h3>
                    
                </div>
            </div>
            <div className="products_main_products general-container">
                <h3 id='produkty' className="products_main_products_title" data-aos="fade-up">Produkty</h3>
                <div className="items" data-aos="fade-up">
                    {products.map((products, index) => (
                            <div key={index} className='items_container' onClick={() => {
                                navigate(`/produkty/${products.id}`)
                            }}>  
                                <img
                                    className='items_container_img'
                                    src={products.img}
                                    alt={products.title}
                                />
                                <h3 className='items_container_text'>{products.title}</h3>
                                <p className='items_container_title'>{products.text}</p>
                            </div>
                      
                    ))}
                </div>
                <div className="information">
                    <h2 className="information_title" data-aos="fade-up">
                        NOBI-STAL
                    </h2>
                    <h3 className="information_text" data-aos="fade-up">
                        Nobi-stal jest jednym z największych dostawców sprężyn technicznych
                        dostępnych z magazynu. Dzięki szerokiej gamie produktów wysokiej jakości 
                        dostarczamy sprężyny szybko i po korzystnej cenie.
                        Wieloletnia tradycja i międzynarodowy charakter firmy sprawia, 
                        że rozwiązania Nobi-Stal spełniają wymogi zarówno norm europejskich, 
                        UIC, rosyjskich GOST, jak i chińskich TB/T. Innowacyjność, kompetencje 
                        technologiczne i konstrukcyjne, kilkadziesiąt lat doświadczenia i chęć
                        podążania za stale rosnącymi wymaganiami Klientów stanowią o jakości 
                        oferowanych produktów i rozwiązań
                    </h3>
                    <h3 className="information_text" data-aos="fade-up">
                        Ciągle poszerzamy naszą ofertę produktową stając się jeszcze lepszym 
                        partnerem dla naszych Klientów.
                    </h3>
                    <ul className="information_list" data-aos="fade-up">
                        <li>Szybka dostawa Katalog sprężyn i standardowych części</li>
                        <li>Dostawa prototypów</li>
                        <li>Stopniowe ceny sprężyn standardowych</li>
                        <li>Najwyższa jakość</li>
                        <li>Guaranteed quality delivery according DIN / NEN / ISO0</li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products;