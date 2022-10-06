import './_products.scss';

function Products() {
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
            </div>
        </>
    );
}

export default Products;