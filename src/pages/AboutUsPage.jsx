import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const AboutUsPage = () => {
  return (
    <div className="py-12 px-6 mt-16">
      <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">About Us</h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <FontAwesomeIcon icon={faPlane} className="text-indigo-500 text-6xl" />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our travel website! We are passionate about helping you explore the world and create unforgettable memories. Our mission is to provide you with exceptional travel experiences, whether you're planning a weekend getaway or a once-in-a-lifetime adventure.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At our travel agency, we believe in personalized service and attention to detail. Our team of travel experts is dedicated to crafting custom itineraries tailored to your preferences and ensuring every aspect of your trip is seamless and enjoyable.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Whether you're dreaming of relaxing on a tropical beach, exploring historic landmarks, or embarking on a thrilling outdoor adventure, we're here to make your travel dreams a reality. Let us help you plan your next unforgettable journey!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              Our vision is to be the leading travel agency that provides top-notch travel services and experiences that exceed our clients' expectations. We aim to create a world where travel is accessible, enjoyable, and enriching for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to inspire and facilitate unforgettable travel experiences that create lasting memories. We are committed to offering personalized services, expert advice, and seamless travel arrangements to ensure our clients have the best possible travel experiences.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-indigo-500 mb-4 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <img src="https://littleconstruction.net/wp-content/uploads/2019/04/person-placeholder-male-5-300x300.jpg" alt="Team Member 1" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h4 className="text-xl font-bold text-gray-800">John Doe</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img src="https://aevi-insurance.be/wp-content/uploads/pic-perso-03-600x600.jpg" alt="Team Member 2" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h4 className="text-xl font-bold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <img src="https://thehuboncanal.org/wp-content/uploads/2016/11/FEMALE-PERSON-PLACEHOLDER.jpg" alt="Team Member 3" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h4 className="text-xl font-bold text-gray-800">Alice Johnson</h4>
              <p className="text-gray-600">Travel Consultant</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
