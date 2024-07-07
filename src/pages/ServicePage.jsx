import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faMapMarkedAlt, faSuitcase, faShieldAlt, faCar, faPassport, faUtensils } from '@fortawesome/free-solid-svg-icons';

const ServicePage = () => {
  return (
    <div className="py-12 px-6 mt-16">
      <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faPlane} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Flight Booking</h3>
            <p className="text-sm text-gray-600">Book your flights to your dream destinations with ease.</p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faHotel} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Hotel Reservations</h3>
            <p className="text-sm text-gray-600">Find the perfect accommodations for your stay.</p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Tour Packages</h3>
            <p className="text-sm text-gray-600">Explore our curated tour packages tailored to your interests.</p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faSuitcase} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Travel Gear</h3>
            <p className="text-sm text-gray-600">Shop our collection of travel essentials and accessories.</p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faShieldAlt} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Travel Insurance</h3>
            <p className="text-sm text-gray-600">Stay protected during your travels with our comprehensive travel insurance plans.</p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faCar} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Car Rentals</h3>
            <p className="text-sm text-gray-600">Rent a car for your convenience and explore your destination at your own pace.</p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faPassport} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Visa Assistance</h3>
            <p className="text-sm text-gray-600">Get assistance with visa applications and requirements for international travel.</p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-6 flex items-center">
          <FontAwesomeIcon icon={faUtensils} className="text-indigo-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Dining Recommendations</h3>
            <p className="text-sm text-gray-600">Discover the best restaurants and dining options at your destination.</p>
          </div>
        </div>
        {/* Add more service cards as needed */}
      </div>
    </div>
  );
};

export default ServicePage;
