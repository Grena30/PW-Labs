import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
