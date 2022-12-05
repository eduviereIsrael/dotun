import React from 'react'
import './App.css';

import { StateContext } from './StateContext';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/Mainpage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Byte, Caree, Zapmedx } from './caseStudies';
import WrapScroll from './WrapScrroll';
import { About } from './Pages';
import { useParams } from 'react-router-dom';

function App() {

  let params =useParams();
  console.log(params)

  return (
    // <BrowserRouter>
    <StateContext>
      <WrapScroll>
        <div className="App">
          <Header />
            <Routes>
              <Route path = "/" element = {<MainPage />} />
              <Route path = "/about" element = {<About />} />
              <Route path = "/byte" element = {<Byte />} />
              <Route path = "/caree" element = {<Caree />} />
              <Route path = "/zapmedx" element = {<Zapmedx />} />
            </Routes>
          {/* <MainPage /> */}
          <Footer />
        </div>
      </WrapScroll>
      
    </StateContext>

    // </BrowserRouter>
    
  );
}

export default App;
