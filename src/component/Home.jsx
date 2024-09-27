import React from 'react'
import BlogList from './BlogList'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate = useNavigate();
    const handleAddBlog = ()=> {
        navigate("/addnew")
    }

    return (
        <div className='bg-slate-900 flex flex-wrap w-full min-h-screen justify-center items-center pt-10 px-14'>
                <h1 className="w-4/5 text-6xl text-teal-300 font-semibold mb-4">Blog's Collection</h1>
                <button onClick={handleAddBlog} className='px-4 py-2 text-white rounded-md bg-green-600 font-semibold'>New Blog</button>
            <BlogList />
        </div>
    )
}

export default Home