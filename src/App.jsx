import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx';
import Posts  from './components/Posts.jsx';
import Contact from './components/Contact.jsx'
import Gallery from './components/Gallery.jsx';
import '../style.css';

// The top‑level component assembles the layout pieces
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;