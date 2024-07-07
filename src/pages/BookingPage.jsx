import React, { useState } from 'react';

const BookingPage = () => {
  const [tour, setTour] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Tour:', tour);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    alert('Booking submitted successfully!');
  };

  return (
    <div className="py-12 px-6 mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-500">Book Your Tour</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
        <div className="mb-4">
          <label htmlFor="tour" className="block text-gray-700 font-bold mb-2">Select Tour</label>
          <select
            id="tour"
            value={tour}
            onChange={(e) => setTour(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select a tour</option>
            <option value="Eiffel Tower, Paris">Eiffel Tower, Paris</option>
            <option value="Great Wall of China">Great Wall of China</option>
            <option value="Statue of Liberty, New York">Statue of Liberty, New York</option>
            <option value="Sydney Opera House, Sydney">Sydney Opera House, Sydney</option>
            <option value="Colosseum, Rome">Colosseum, Rome</option>
            <option value="Christ the Redeemer, Rio de Janeiro">Christ the Redeemer, Rio de Janeiro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Tour Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors duration-300">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;