import React from "react";
import "au-css/dest/index.css"; // Main styles
import "au-css/js/arbitary-values.js"; // Optional for custom utilities
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
      <Navbar/>
        <Home/>
        <Footer/>
        
    </div>
   
  );
}

export default App;
