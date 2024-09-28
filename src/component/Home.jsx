import React from 'react';
import BlogList from './BlogList';
import { useNavigate } from 'react-router-dom';
// Import Material UI icon for button
import AddIcon from '@mui/icons-material/Add';

function Home() {
    const navigate = useNavigate();

    const handleAddBlog = () => {
        navigate("/addnew");
    };

    return (
        <div className='bg-slate-900 flex flex-col w-full min-h-screen justify-center items-center pt-10 px-6 lg:px-14'>
            {/* Heading with more emphasis and responsive text size */}
            <h1 className="w-full lg:w-4/5 text-5xl lg:text-6xl text-teal-300 font-bold text-center mb-8 tracking-wide">
                Blog's Collection
            </h1>

            {/* Button styled with Material UI Icon */}
            <button 
                onClick={handleAddBlog}
                className='flex items-center justify-center gap-2 px-5 py-3 text-white rounded-lg bg-green-600 font-medium text-lg lg:text-xl hover:bg-green-700 transition-all duration-300 ease-in-out shadow-lg'
            >
                <AddIcon /> 
                New Blog
            </button>

            {/* BlogList Component */}
            <div className="w-full lg:w-11/12 mt-10">
                <BlogList />
            </div>
        </div>
    );
}

export default Home;
