import React from "react";
import Features from "./components/Features";
import Header from "./components/Header";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      
       <Routes>
        <Route path="/Ai" element={<Features/>}/>

       </Routes>
        
      
        
        
    </div>
  );
}

export default App;
