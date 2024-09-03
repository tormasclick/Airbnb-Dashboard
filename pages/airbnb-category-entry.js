import Layout from '../components/Layout';
import { useState } from 'react';

export default function AirbnbCategoryEntry() {
  const [categories, setCategories] = useState(['Apartment', 'Cottage']);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <Layout>
      <h2 className="text-3xl font-bold leading-tight text-gray-900 text-center">
        Manage Categories
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleAddCategory}>
        <div>
          <label htmlFor="category" className="sr-only">
            Category Name
          </label>
          <input
            id="category"
            name="category"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
          >
            Add Category
          </button>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold leading-tight text-gray-900">
          Existing Categories
        </h3>
        <ul className="mt-4 space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="bg-white px-4 py-2 border border-gray-300 rounded-md"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
