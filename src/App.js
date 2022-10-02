import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import './App.scss';
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />   
          <Route path='/kontakt' element={<Contact />} />   
        </Routes>
    </Router>
  );
}

export default App;
