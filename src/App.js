import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Home from "./components/pages/Home";

import './App.scss';
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Products from "./components/pages/products/Products";
import Formularz from "./components/pages/form/Form";
import data from "./components/pages/products/DataProducts";
import Naciskowe from "./components/pages/subproducts/Naciskowe";


function App() {
  const { products } = data

  return (
    <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} exact />   
          <Route path='/kontakt' element={<Contact />} />   
          <Route path='/produkty' element={<Products products={products} />} /> 
          <Route path='/produkty/:title' element={<Naciskowe/>} />    
          <Route path='/formularz' element={<Formularz />} />   
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
