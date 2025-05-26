import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rayyan Sohail',
      image: 'src/assets/images/rayyan.jpg',
      text: 'PetFolio helped me find my sweet tabby, Luna! The AI breed detection is amazing, and I love the community vibe.',
    },
    {
      name: 'Sania Amjad',
      image: 'src/assets/images/sania.jpg',
      text: 'Adopting my energetic Beagle, Buddy, was a breeze. The safety features are top-notch—highly recommend!',
    },
    {
      name: 'Ahmad Fawad',
      image: 'src/assets/images/fawad.jpg',
      text: 'I got my colorful parrot, Mango, through PetFolio. The fun process and user ratings made it unforgettable!',
    },
  ];

  return (
    <div className="max-w-6xl rounded-xl mx-auto px-6 py-12 bg-[#f4effb]">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">What Our Pet Lovers Say</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Testimonials Section */}
        <div className="md:w-1/2 bg-[#f5f3f7] rounded-lg p-6">
          <p className="text-purple-700 text-lg mb-2">TESTIMONIAL</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Try PetFolio, You Won’t Go Back!</h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-base text-gray-600">{testimonial.text}</p>
                  <p className="text-gray-800 font-semibold mt-2">— {testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Grid Section */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img src="src/assets/images/female-dog.jpg" alt="Pet 1" className="rounded-lg shadow-md object-cover" />
          <img src="src/assets/images/male-cat.jpg" alt="Pet 2" className="rounded-lg shadow-md object-cover" />
          <img src="src/assets/images/male-dog.jpg" alt="Pet 3" className="rounded-lg shadow-md object-cover" />
          <img src="src/assets/images/female-dog2.jpg" alt="Pet 4" className="rounded-lg shadow-md object-cover" />
          {/* <img src="https://placehold.co/200x200?text=Pet5" alt="Pet 5" className="rounded-lg shadow-md object-cover" />
          <img src="https://placehold.co/200x200?text=Pet6" alt="Pet 6" className="rounded-lg shadow-md object-cover" /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;