import React from 'react';

import '../../App.scss';
import AboutUs from '../aboutUs/AboutUs';
import Nav from '../nav/Nav';


function Home() {
    return (
        <>
            <Nav />
            <AboutUs />
        </>
    );
}

export default Home;