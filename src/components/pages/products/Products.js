import './_products.scss';

function Products({products}) {
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
                <h3 className="products_main_products_title">Produkty</h3>
                <div className="items">
                    {products.map((products, index) => (
                        <div key={index} className='items_container'>
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
                    <h2 className="information_title">
                        NOBI-STAL
                    </h2>
                    <h3 className="information_text">
                        Nobi-stal jest jednym z największych dostawców sprężyn technicznych
                        dostępnych z magazynu. Dzięki szerokiej gamie produktów wysokiej jakości 
                        dostarczamy sprężyny szybko i po korzystnej cenie.
                        Wieloletnia tradycja i międzynarodowy charakter Grupy sprawia, 
                        że rozwiązania Axtone spełniają wymogi zarówno norm europejskich, 
                        UIC, rosyjskich GOST, jak i chińskich TB/T. Innowacyjność, kompetencje 
                        technologiczne i konstrukcyjne, kilkadziesiąt lat doświadczenia i chęć
                        podążania za stale rosnącymi wymaganiami Klientów stanowią o jakości 
                        oferowanych produktów i rozwiązań
                    </h3>
                    <h3 className="information_text">
                        Ciągle poszerzamy naszą ofertę produktową stając się jeszcze lepszym 
                        partnerem dla naszych Klientów.
                    </h3>
                    <ul className="information_list">
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