import React from "react";
import "au-css/dest/index.css"; // Main styles
import "au-css/js/arbitary-values.js"; // Optional for custom utilities
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar/>
        <Home/>
        
    </div>
   
  );
}

export default App;
