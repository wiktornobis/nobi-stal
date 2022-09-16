import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />   
        </Routes>
    </Router>
  );
}

export default App;
