import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const DiscoverPetsPage = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [vaccinatedOnly, setVaccinatedOnly] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 6;

  const fetchPets = async () => {
    setLoading(true);
    try {
      const params = {
        search: searchTerm.trim(),
        type: type !== 'All' ? type : undefined,
        minPrice: minPrice || undefined,
        maxPrice: maxPrice || undefined,
        vaccinated: vaccinatedOnly || undefined,
      };
      const res = await axios.get("https://petfolio-bc78b5df99a2.herokuapp.com/api/pets/discover-pets", { params });
      setPets(res.data);
      setFilteredPets(res.data);
      setCurrentPage(1);
    } catch (err) {
      console.error("Error fetching pets:", err);
      toast.error("Failed to fetch pet listings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets(); // Initial load
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPets();
  };

  const handleReset = () => {
    setSearchTerm('');
    setType('All');
    setMinPrice('');
    setMaxPrice('');
    setVaccinatedOnly(false);
    fetchPets();
  };

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);
  const totalPages = Math.ceil(filteredPets.length / petsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section className="text-center py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-100">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-wide">
          Discover Your Perfect Pet
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Browse a wide selection of adorable pets. Use filters to find your perfect companion.
        </p>

        <form onSubmit={handleSearch} className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <select value={type} onChange={(e) => setType(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 transition hover:shadow-md">
            <option value="All">All Types</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
          </select>
          <input type="text" placeholder="Search by name, breed, etc." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:ring-2 focus:ring-purple-500 transition hover:shadow-md" />
          <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 w-28 focus:ring-2 focus:ring-purple-500 transition hover:shadow-md" />
          <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 w-28 focus:ring-2 focus:ring-purple-500 transition hover:shadow-md" />
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={vaccinatedOnly} onChange={() => setVaccinatedOnly(!vaccinatedOnly)} className="h-5 w-5 border-gray-300 rounded focus:ring-2 focus:ring-purple-500" />
            <span className="text-sm text-gray-700 font-medium">Vaccinated</span>
          </label>
          <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:from-purple-700 hover:to-indigo-700 transition">Search</button>
          <button type="button" onClick={handleReset} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-400 transition">Reset</button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {loading ? (
            Array.from({ length: petsPerPage }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : currentPets.length > 0 ? (
            currentPets.map((pet) => (
              <div key={pet._id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                <img src={pet.images?.[0] || "/no-image.jpg"} alt={pet.name} className="w-full h-64 object-cover object-center rounded-t-2xl" />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-purple-700">{pet.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{pet.gender}, {pet.age} Year{pet.age > 1 ? 's' : ''} Old</p>
                  <p className="text-sm text-gray-500 italic">{pet.breed}</p>
                  <p className="text-purple-500 font-medium">{pet.type}</p>
                  <p className="text-lg font-bold text-purple-800 mb-3">PKR {pet.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 mb-3">📍 {pet.location}</p>
                  <Link to={`/pet/${pet._id}`}>
                    <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-full font-semibold shadow-md hover:from-purple-700 hover:to-indigo-700 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No pets found for your search.</p>
          )}
        </div>

        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button onClick={handlePrevious} className={`px-4 py-2 rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"}`} disabled={currentPage === 1}>Previous</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? "bg-purple-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>{index + 1}</button>
            ))}
            <button onClick={handleNext} className={`px-4 py-2 rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"}`} disabled={currentPage === totalPages}>Next</button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default DiscoverPetsPage;
