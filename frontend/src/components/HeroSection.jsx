import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-[#7B43F6] font-semibold text-lg">Pet Me Plzzz!</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Connect, Choose, and Create New Bonds.
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome! PetFolio is your trusted AI-powered platform for buying and selling pets with confidence. Our smart breed recognition ensures accurate listings, making it easier for you to find the perfect companion. Join PetFolio today and connect with pet lovers in a safe, seamless environment.
          </p>
          <div className="flex gap-4">
            <Link to="/discover-pets">
              <button className="bg-[#8856f7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7B43F6] transition shadow-md">
                Discover Pet
              </button>
            </Link>
            
          </div>
        </div>

        {/* Right Image Grid Section */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {/* You can replace these image paths with actual cat images */}
          {/* <div className=" relative h-64 w-full bg-gray-200">

  <img src="src\assets\images\bird.jpg" alt="bird" class="absolute top-0 left-0 w-32 h-auto"/>
       </div> */}
          <div>
            <img src="/assets/images/cat2.jpg" alt="Cat 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <img src="/assets/images/dog1.jpg" alt="Cat 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <img src="/assets/images/dog2.jpg" alt="Cat 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <img src="/assets/images/siamese-cat.webp" alt="Cat 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;