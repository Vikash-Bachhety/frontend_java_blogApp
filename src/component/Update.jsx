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
    <div className='flex justify-center items-center w-full h-screen bg-gray-50'>
      <form className='max-w-xl w-full flex flex-col gap-4 border p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-semibold mb-4 text-center font-bold text-blue-500'>Update Blog</h2>

        {/* Title input */}
        <label htmlFor="title" className='text-gray-700 font-medium'>Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Enter blog title"
        />

        {/* Description input */}
        <label htmlFor="description" className='text-gray-700 font-medium'>Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInputChange}
          className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Enter blog description"
        />

        {/* Views input */}
        <label htmlFor="views" className='text-gray-700 font-medium'>Views</label>
        <input
          type="number"
          name="views"
          value={form.views}
          onChange={handleInputChange}
          className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Enter views"
        />

        {/* Update button */}
        <button
          type="button"
          className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link className='font-semibold text-slate-500 mx-auto' to={"/"}>Back</Link>
      </form>
    </div>
  );
}

export default Update;
