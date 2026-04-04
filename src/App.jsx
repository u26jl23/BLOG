import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx';
import '../style.css';

// The top‑level component assembles the layout pieces
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;