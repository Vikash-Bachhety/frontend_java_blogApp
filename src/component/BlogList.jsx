import React, { useState, useEffect } from 'react';
// import Blog from './Blog.jsx';
import axios from 'axios';
import {DeleteIcon, PencilAltIcon} from '@mui/icons-material/Delete';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://backendjavablogapp-production.up.railway.app/blogs/");
                const data = response.data;
                console.log(data);
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://backendjavablogapp-production.up.railway.app/blogs/deleteBlog/${id}`);
            setBlogs(blogs.filter(blog => blog.id !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/update/${id}`);
      };

    return (
        <div className="blog-list flex flex-wrap justify-center gap-8 mt-8 w-full">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="bg-white p-5 rounded-lg shadow-lg w-full sm:w-80 transform transition duration-500 hover:scale-105"
                >
                    {/* Blog Image */}
                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />

                    {/* Blog Details */}
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                    <p className="text-gray-700 mb-4">{blog.description}</p>

                    {/* Blog Footer with Views */}
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Views: {blog.views}</span>
                    </div>
                    <div className='flex justify-between w-full pb-2 px-4'>
                        <button
                            onClick={() => handleEdit(id)}
                            className='flex items-center text-md text-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition duration-300'
                        >
                            <PencilAltIcon className="w-5 h-5 mr-2" />
                            Edit
                        </button>

                        {/* Delete Button with Icon */}
                        <button
                            onClick={() => handleDelete(blog.id)}
                            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                        >
                            <DeleteIcon className="mr-1" /> Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
