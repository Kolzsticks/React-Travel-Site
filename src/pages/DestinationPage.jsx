import React from 'react';

const DestinationPage = () => {
  const destinations = [
    { name: 'Paris', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg', description: 'Explore the City of Love and discover its rich history, culture, and world-renowned landmarks like the Eiffel Tower and Notre-Dame Cathedral.' },
    { name: 'New York', image: 'https://image.cnbcfm.com/api/v1/image/106268734-1574876711571gettyimages-1059614218.jpeg?v=1576856860&w=717&h=403&ffmt=webp&vtcrop=y', description: 'Discover the Big Apple with its bustling streets, iconic skyscrapers, diverse culture, and famous attractions like Times Square and Central Park.' },
    { name: 'Tokyo', image: 'https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_640,c_limit/tokyoGettyImages-1031467664.jpeg', description: 'Experience the Bustling Metropolis of Tokyo, a city that blends traditional culture with modern innovations and offers endless entertainment and culinary delights.' },
    { name: 'Sydney', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/640px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg', description: 'Enjoy the Iconic Landmarks of Sydney, from the stunning Opera House to the beautiful beaches and vibrant harbor life.' },
    { name: 'London', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg', description: 'Explore the rich history and modern attractions of London, including Buckingham Palace, the British Museum, and the vibrant West End theater district.' },
    { name: 'Dubai', image: 'https://i.natgeofe.com/n/483e77f7-f52b-432a-a0f5-d9cd1489a95a/madinat-jumeirah-dubai-uae.jpg?w=748&h=510', description: 'Explore the modern marvels of Dubai, from the towering Burj Khalifa to the luxurious shopping malls and stunning desert landscapes.' }
  ];

  return (
    <div className="py-12 px-6 mt-16">
      <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">All Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="relative bg-white rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-indigo-500">{destination.name}</h3>
              <p className="text-sm text-gray-600">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;