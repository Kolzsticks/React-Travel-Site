import React, { useRef } from 'react';
import Hero from '../components/Hero';
import PopularDestinations from '../components/Popular destinations'; // Fixed the typo in the import


const HomePage = () => {
  // Create a reference for the element you want to scroll to
  const destinationRef = useRef(null);

  // Function to handle the scroll action
  const scrollToDestinations = () => {
    if (destinationRef.current) {
      const offsetTop = destinationRef.current.getBoundingClientRect().top + window.scrollY - 64; // 64px is the height of the navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      <main>
        <Hero onScrollToDestinations={scrollToDestinations} />
        <PopularDestinations ref={destinationRef} />
       
      </main>
    </>
  );
};

export default HomePage;