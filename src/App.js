import React from 'react'
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/Mainpage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  console.log(Route)
  console.dir(Route)
  return (
    // <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path = "/" element = {<MainPage />} />
          </Routes>
        {/* <MainPage /> */}
        <Footer />
      </div>
    // </BrowserRouter>
    
  );
}

export default App;
