import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Routes/Home/Home";
import ShowCase from "./components/Routes/Project/ShowCase";
import ContactUs from "./components/Routes/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ShowCase" element={<ShowCase />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
