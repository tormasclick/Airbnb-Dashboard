import Layout from '../components/Layout';
import { useState } from 'react';

export default function AirbnbEntry() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      <h2 className="text-3xl font-bold leading-tight text-gray-900 text-center">
        Add New Airbnb Listing
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Listing Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description" className="sr-only">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Listing Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price" className="sr-only">
            Price per Night
          </label>
          <input
            id="price"
            name="price"
            type="number"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Price per Night"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category" className="sr-only">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </Layout>
  );
}
