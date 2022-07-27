import React from 'react'
import './App.css';

import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/Mainpage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Byte, Caree } from './caseStudies';

function App() {
  console.log(Route)
  console.dir(Route)
  return (
    // <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path = "/" element = {<MainPage />} />
            <Route path = "/byte" element = {<Byte />} />
            <Route path = "/Caree" element = {<Caree />} />
          </Routes>
        {/* <MainPage /> */}
        <Footer />
      </div>
    // </BrowserRouter>
    
  );
}

export default App;
