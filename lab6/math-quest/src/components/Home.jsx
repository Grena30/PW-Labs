import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <section id="home" className="section home">
    <div className="home-content">
      <h2 className="home-title">Welcome to Math-Quest!</h2>
      <p className="home-text">Here, you can learn and practice math courses in a fun and interactive way.</p>
      <a href="#courses" className="home-btn">Start Learning</a>
    </div>
</section>

  );
}

export default Home;