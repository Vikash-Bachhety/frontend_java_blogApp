import React, { useState, useEffect } from 'react';
import Blog from './Blog.jsx';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://backendjavablogapp-production.up.railway.app/blogs/");
        const data = response.data.reverse();
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
  };

  return (
    <div className="blog-list flex flex-wrap justify-center gap-10 w-full">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          views={blog.views}
          imageurl={blog.imageUrl}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default BlogList;
