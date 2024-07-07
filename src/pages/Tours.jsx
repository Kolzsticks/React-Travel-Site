import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const tours = [
    {
        name: 'Eiffel Tower Tour',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/ab/3e.jpg',
        description: 'Discover the charm and history of Paris with a guided tour of the Eiffel Tower.',
        price: '$120',
    },
    {
        name: 'Great Wall of China Tour',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/91/53/d1.jpg',
        description: 'Experience the majestic Great Wall of China, a marvel of ancient engineering.',
        price: '$150',
    },
    {
        name: 'Machu Picchu Tour',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/5b/eb.jpg',
        description: 'Explore the ancient Incan city of Machu Picchu nestled in the Andes Mountains.',
        price: '$200',
    },
    {
        name: 'Safari in Kenya',
        image: 'https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg',
        description: 'Embark on an exciting safari adventure through Kenya’s stunning landscapes.',
        price: '$250',
    },
    {
        name: 'Sydney Opera House Tour',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/5b/28.jpg',
        description: 'Take a behind-the-scenes tour of the iconic Sydney Opera House.',
        price: '$130',
    },
    {
        name: 'Santorini Sunset Cruise',
        image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
        description: 'Enjoy a breathtaking sunset cruise around the beautiful island of Santorini.',
        price: '$140',
    },
    {
        name: 'New York City Landmarks',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/43/3f/e7.jpg',
        description: 'Visit famous landmarks in New York City, including the Statue of Liberty and Times Square.',
        price: '$110',
    },
    {
        name: 'Rio de Janeiro City Tour',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/d8/90.jpg',
        description: 'Experience the vibrant culture and stunning sights of Rio de Janeiro.',
        price: '$170',
    }
];

const Tours = () => {
    return (
        <div className="py-12 px-6 mt-16">
            <h2 className="text-3xl font-bold text-indigo-500 text-center mb-8">Available Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tours.map((tour, index) => (
                    <div key={index} className="relative bg-white rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
       <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl text-indigo-500 font-bold mb-2">{tour.name}</h3>
                            <p className="text-sm text-gray-600">{tour.description}</p>
                            <p className="text-lg mb-5 font-bold text-indigo-500 mt-2">{tour.price}</p>
                            <Link to="/BookingPage" className=" bg-indigo-500 text-white py-3 px-4 rounded hover:bg-indigo-600 transition duration-300">
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tours;