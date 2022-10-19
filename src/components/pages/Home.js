import '../../App.scss';

import AboutUs from '../aboutUs/AboutUs';
import Doradztwo from '../doradztwo/Doradztwo';
import Catalog from '../katalog/Catalog';
import Achievement from '../osiagniecia/Achievement';
import ProductsCarousel from '../products/ProductsCarousel';
import Sectors from '../sectors/Sectors';


function Home() {
    return (
        <>
            <AboutUs />
            <Sectors />
            <ProductsCarousel />
            <Doradztwo />
            <Achievement />
            <Catalog />
        </>
    );
}

export default Home;