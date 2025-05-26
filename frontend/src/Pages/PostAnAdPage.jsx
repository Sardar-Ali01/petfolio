import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addPet, clearPetState } from '../redux/slices/petSlice';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const PostAnAdPage = () => {
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector((state) => state.pet);

  const [formData, setFormData] = useState({
    type: '',
    name: '',
    description: '',
    age: '',
    breed: '',
    price: '',
    location: '',
    gender: '',
    vaccinated: false,
    images: [],
  });

  const [formError, setFormError] = useState('');
  const [predictingBreed, setPredictingBreed] = useState(false);

  const handleChange = async (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, images: files });

      if (files.length > 0) {
        setPredictingBreed(true);
        try {
          const imgData = new FormData();
          imgData.append('file', files[0]);

          const response = await axios.post('http://localhost:8000/predict', imgData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          const predictedBreed = response.data.breed;
          setFormData((prev) => ({ ...prev, breed: predictedBreed }));
          setPredictingBreed(false);
        } catch (err) {
          console.error('Breed prediction failed:', err);
          setPredictingBreed(false);
          toast.error('Failed to predict breed automatically. Please enter manually.');
        }
      }
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.type || !formData.name || !formData.breed || !formData.description ||
      !formData.age || !formData.price || !formData.location || !formData.gender) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (formData.age <= 0) {
      setFormError('Age must be greater than 0.');
      return;
    }

    if (formData.price <= 0) {
      setFormError('Price must be greater than 0.');
      return;
    }

    if (!formData.images || formData.images.length === 0) {
      setFormError('Please upload at least one image.');
      return;
    }

    setFormError('');

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'images') {
        Array.from(formData.images).forEach((file) => data.append('images', file));
      } else {
        data.append(key, formData[key]);
      }
    });

    await dispatch(addPet(data));
  };

  useEffect(() => {
    if (success) {
      setFormData({
        type: '',
        name: '',
        description: '',
        age: '',
        breed: '',
        price: '',
        location: '',
        gender: '',
        vaccinated: false,
        images: [],
      });

      toast.success(success);
      dispatch(clearPetState());
    }

    if (error) {
      toast.error(error);
      dispatch(clearPetState());
    }
  }, [success, error, dispatch]);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section className="text-center py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-100">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 tracking-wide">Add Pet Details</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          {formError && <p className="text-red-600 mb-6 text-center font-medium bg-red-50 p-3 rounded-lg">{formError}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Pet Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
                >
                  <option value="">Select One</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                </select>
              </div>

              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Pet Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Pet Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
                />
              </div>

              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Description</label>
                <textarea
                  name="description"
                  placeholder="Add pet details, health history, vaccination, etc."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Age (in Years)</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter Pet's Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Breed</label>
                <input
                  type="text"
                  name="breed"
                  placeholder="Breed will be predicted automatically"
                  value={formData.breed}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md bg-gray-100"
                  disabled={predictingBreed}
                />
                {predictingBreed && (
                  <p className="text-sm text-gray-600 mt-2 font-medium">Predicting breed, please wait...</p>
                )}
              </div>

              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
                >
                  <option value="">Select One</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Price in PKR"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
                />
              </div>

              <div>
                <label className="block text-left mb-2 font-semibold text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="vaccinated"
                checked={formData.vaccinated}
                onChange={handleChange}
                className="mr-2 h-5 w-5 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              />
              <label className="text-gray-700 font-semibold">Vaccinated</label>
            </div>

            <div className="mb-6">
              <label className="block text-left mb-2 font-semibold text-gray-700">Images</label>
              <input
                type="file"
                name="images"
                onChange={handleChange}
                multiple
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
              />
            </div>

            <button
              type="submit"
              disabled={loading || predictingBreed}
              className={`w-full ${loading || predictingBreed ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'} text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {loading ? 'Uploading...' : 'Add Pet'}
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default PostAnAdPage;