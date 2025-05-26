import React from 'react';

const AboutUs = () => {
  const cards = [
    {
      icon: '🐾',
      title: 'A Pet Connection Hub',
      description: 'PetFolio is your digital playground! We connect pet lovers with sellers, bringing wagging tails, purring kitties, and squawking parrots to your fingertips.'
    },
    {
      icon: '🔒',
      title: 'Safe & Trusted',
      description: 'Our mission is to make pet-finding safe and easy. With glowing user ratings and personalized profiles, we ensure every connection is a tail-wagging triumph you can trust.'
    },
    {
      icon: '🎉',
      title: 'Super Fun Vibe',
      description: 'We sprinkle magic into every step! Whether it’s a playful pup for morning jogs or a majestic cat to rule your couch, PetFolio makes the journey downright fun.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Magic',
      description: 'Our whiz-bang AI breed detection acts like a pet detective, helping you find your perfect furry, feathery, or scaly best friend with ease and precision!'
    }
  ];

  return (
    <div className=" bg-[#f4effb] rounded-xl my-16 max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">About PetFolio: Your Pet Adventure Hub!</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#f5f3f7] rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
            <p className="text-base text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-gray-600 mt-8">
        Ready to embark on your pet-tastic adventure? Let’s <span className="text-[#7d56d3] font-semibold">paws</span> and get started!
      </p>
    </div>
  );
};

export default AboutUs;