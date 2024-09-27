import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ id, title, description, views, imageurl, handleDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (id)=> {
    navigate(`/update/${id}`)
  }
  return (
    <div className="max-w-sm w-96 bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-3">
        <img className='w-full h-52' src={imageurl} alt="" />
        <h2 className="text-xl text-teal-700 font-semibold my-2 truncate">{title}</h2>
        <p className="text-gray-700 text-base mb-4 line-clamp-4">{description}</p>
        <span className="text-rose-700 text-sm font-semibold">Views: {views}</span>
      </div>
      <div className='flex justify-between w-full pb-2 px-4'>
      <button onClick={()=>{handleEdit(id)}} className='font-solid text-md text-blue-500 hover:bg-blue-600 hover:rounded-md px-3 py-1 hover:text-white'>Edit</button>
      <button onClick={()=>{handleDelete(id)}} className='font-solid text-md text-rose-500 hover:bg-rose-600 hover:rounded-md px-3 py-1 hover:text-white'>Delete</button>
      </div>
    </div>
  );
};

export default Blog;
