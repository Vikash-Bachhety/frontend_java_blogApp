import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [form, setForm] = useState({
    title: '',
    description: '',
    views: '',
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://backendjavablogapp-production.up.railway.app/blogs/${id}`);
        setForm(response.data); 
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlog();
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle the update action
  const handleUpdate = async () => {
    try {
      await axios.put(`https://backendjavablogapp-production.up.railway.app/blogs/updateBlog/${id}`, form);
      navigate("/"); 
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen bg-slate-900 px-4'>
      <form className='max-w-xl w-full flex flex-col gap-6 border p-8 bg-white shadow-lg rounded-md'>
        <h2 className='text-3xl font-bold text-center text-blue-500 mb-6'>Update Blog</h2>

        {/* Title input */}
        <div className='flex flex-col'>
          <label htmlFor="title" className='text-gray-700 font-medium mb-1'>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
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
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
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
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
            placeholder="Enter views"
          />
        </div>

        {/* Update button */}
        <button
          type="button"
          className='mt-4 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 font-semibold shadow-lg'
          onClick={handleUpdate}
        >
          Update Blog
        </button>

        {/* Back Link */}
        <Link
          to="/"
          className='block text-center text-blue-500 hover:text-blue-600 font-medium mt-4 transition-colors duration-300'
        >
          Back to Home
        </Link>
      </form>
    </div>
  );
}

export default Update;
