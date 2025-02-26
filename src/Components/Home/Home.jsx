import React from 'react';
import "./Home.css";
import Navbar from '../Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home main'>
        <div className='home-sub'>
          <p className='welcome'>Welcome to Our Website</p>
          <p>
            Discover a world of endless possibilities with our innovative platform. 
            We provide top-notch solutions tailored to meet your needs, ensuring efficiency, 
            creativity, and success in every step. Whether you're looking for insightful 
            resources, engaging experiences, or reliable support, we've got you covered.
            Join us today and explore the future with confidence!
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Home;
