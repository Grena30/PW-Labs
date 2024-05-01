import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import './css/App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Courses />
    </div>
  );
}

export default App;
