import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import '../style.css';

// The top‑level component assembles the layout pieces
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;