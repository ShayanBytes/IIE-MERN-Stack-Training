import { useState } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
