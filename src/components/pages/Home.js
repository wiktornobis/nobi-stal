import React from 'react';

import '../../App.scss';
import AboutUs from '../aboutUs/AboutUs';
import Doradztwo from '../doradztwo/Doradztwo';
import Nav from '../nav/Nav';
import ProductsCarousel from '../products/ProductsCarousel';
import Sectors from '../sectors/Sectors';


function Home() {
    return (
        <>
            <Nav />
            <AboutUs />
            <Sectors />
            <ProductsCarousel />
            <Doradztwo />
        </>
    );
}

export default Home;