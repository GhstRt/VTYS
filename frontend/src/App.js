
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Seyahat from './components/pages/Seyahat';
import Ai from './components/pages/Ai';
import PlaceDetail from './components/pages/PlaceDetail';
//import Place from '../../server/models/place';

function App() {
  return (
    <>
      <Router>
       <Navbar />
        <Routes>
          
          <Route path='/' exact Component ={Home} />
          <Route path='/:id' element={<PlaceDetail />} />
          <Route path='/seyahat' exact Component ={Seyahat} />
          <Route path='/ai' exact Component ={Ai} />
        </Routes>
      </Router>
    
      </>
  );
}

export default App;
