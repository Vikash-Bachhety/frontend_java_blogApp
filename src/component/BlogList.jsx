import React, { useState, useEffect } from 'react';
import Blog from './Blog.jsx';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://backend_java_blogapp.railway.internal/blogs");
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
            // confirm("Are you sure to want to delete ?")
            await axios.delete(`https://backend_java_blogapp.railway.internal/blogs/deleteBlog/${id}`);
            setBlogs(blogs.filter(blog => blog.id !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <div className="blog-list flex flex-wrap justify-center gap-5 w-full">
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    description={blog.description}
                    views={blog.views}
                    imageurl={blog.imageUrl}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default BlogList;
