import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import './App.scss';
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} exact />   
          <Route path='/kontakt' element={<Contact />} />   
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
