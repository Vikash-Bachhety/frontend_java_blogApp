import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddNewBlog() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    title: '',
    description: '',
    views: '',
    imageUrl: ''
  });

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      await axios.post(`https://backendjavablogapp-production.up.railway.app/blogs/addBlog`, form);
      navigate("/"); 
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen bg-slate-900 px-4 py-8'>
      <form className='max-w-xl w-full flex flex-col gap-3 border p-6 bg-white shadow-lg rounded-md'>
      <h2 className='text-3xl font-bold text-center text-green-500 mb-6'>Create Blog</h2>

        {/* Title input */}
        <div className='flex flex-col'>
          <label htmlFor="title" className='text-gray-700 font-medium mb-1'>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300'
            placeholder="Enter blog title"
          />
        </div>

        {/* Description input */}
        <div className='flex flex-col'>
          <label htmlFor="description" className='text-gray-700 font-medium mb-1'>Description</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300'
            placeholder="Enter blog description"
          />
        </div>

        {/* Views input */}
        <div className='flex flex-col'>
          <label htmlFor="views" className='text-gray-700 font-medium mb-1'>Views</label>
          <input
            type="number"
            name="views"
            value={form.views}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300'
            placeholder="Enter views"
          />
        </div>

        {/* Image URL input */}
        <div className='flex flex-col'>
          <label htmlFor="imageUrl" className='text-gray-700 font-medium mb-1'>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300'
            placeholder="Enter image URL"
          />
        </div>

        {/* Create button */}
        <button
          type="button"
          className='mt-4 bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300 font-semibold shadow-lg'
          onClick={handleSubmit}
        >
          Create Blog
        </button>

        {/* Back link */}
        <Link
          to="/"
          className='block text-center text-green-500 hover:text-green-600 font-medium mt-4 transition-colors duration-300'
        >
          Back to Home
        </Link>
      </form>
    </div>
  );
}

export default AddNewBlog;
