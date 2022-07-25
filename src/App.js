import React from 'react'
import './App.css';

import MainPage from './MainPage/Mainpage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
