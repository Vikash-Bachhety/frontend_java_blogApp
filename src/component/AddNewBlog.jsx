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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`https://backendjavablogapp-production.up.railway.app/blogs/addBlog`, form);
      navigate("/"); 
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-50'>
      <form className='max-w-xl w-full flex flex-col gap-4 border p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-semibold mb-4 text-center font-bold text-green-500'>Create Blog</h2>

        <label htmlFor="title" className='text-gray-700 font-medium'>Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Enter blog title"
        />

        <label htmlFor="description" className='text-gray-700 font-medium'>Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInputChange}
          className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Enter blog description"
        />

        <label htmlFor="views" className='text-gray-700 font-medium'>Views</label>
        <input
          type="number"
          name="views"
          value={form.views}
          onChange={handleInputChange}
          className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Enter views"
        />

        <label htmlFor="imageUrl" className='text-gray-700 font-medium'>Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleInputChange}
          className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Enter image URL"
        />

        <button
          type="button"
          className='mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300'
          onClick={handleSubmit}
        >
          Create
        </button>
        <Link className='font-semibold text-slate-500 mx-auto' to={"/"}>Back</Link>
      </form>
    </div>
  );
}

export default AddNewBlog;
