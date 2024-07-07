import React from 'react';
import Carousel from './Carousel';

const Hero = ({onScrollToDestinations}) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Carousel />
      </div>
      <div className="absolute inset-0 bg-black opacity-30 h-[600px] md:h-[500px] mt-16"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-2xl mb-8">Explore the world with us</p>
        <button onClick={onScrollToDestinations}  className="bg-indigo-600 text-white py-2 px-6 rounded transition-all hover:bg-blue-500">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;