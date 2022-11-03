import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Home from "./components/pages/Home";

import './App.scss';
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Products from "./components/pages/products/Products";
import Formularz from "./components/pages/form/Form";
import data from "./components/pages/products/DataProducts";
import SpringCompression from "./components/pages/subproducts/SpringCompression";
import SpringStretching from "./components/pages/subproducts/SpringStretching";
import SpringTorsion from "./components/pages/subproducts/SpringTorsion";
import SpringDiscs from "./components/pages/subproducts/SpringDiscs";
import SpringWave from "./components/pages/subproducts/SpringWave";
import WireBentMolds from "./components/pages/subproducts/ WireBentMolds";
import ScrollToTop from "./ScrollToTop";



function App() {
  const { products } = data

  return (
    <Router>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />   
          <Route path='/kontakt' element={<Contact />} />   
          <Route path='/produkty' element={<Products products={products} />} />
            <Route path='/produkty/1' element={<SpringCompression />} />
            <Route path='/produkty/2' element={<SpringStretching/>} />
            <Route path='/produkty/3' element={<SpringTorsion />} />
            <Route path='/produkty/4' element={<SpringDiscs />} />
            <Route path='/produkty/5' element={<SpringWave />} />
            <Route path='/produkty/6' element={<WireBentMolds />} /> 
          <Route path='/formularz' element={<Formularz />} />   
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
