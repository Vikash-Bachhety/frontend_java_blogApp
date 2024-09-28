import { useNavigate } from 'react-router-dom';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

const Blog = ({ id, title, description, views, imageurl, handleDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="p-3">
        <img className='w-full h-52 object-cover' src={imageurl} alt="" />
        <h2 className="text-xl text-teal-700 font-semibold my-2 truncate">{title}</h2>
        <p className="text-gray-700 text-base mb-4 line-clamp-4">{description}</p>
        <span className="text-rose-700 text-sm font-semibold">Views: {views}</span>
      </div>
      <div className='flex justify-between w-full pb-2 px-4'>
        {/* Edit Button with Pencil Icon */}
        <button 
          onClick={() => handleEdit(id)} 
          className='flex items-center text-md text-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition duration-300'
        >
          <PencilAltIcon className="w-5 h-5 mr-2" />
          Edit
        </button>

        {/* Delete Button with Trash Icon */}
        {/* <button 
          onClick={() => handleDelete(id)} 
          className='flex items-center text-md text-rose-500 hover:bg-rose-600 hover:text-white rounded-md px-3 py-1 transition duration-300'
        >
          <TrashIcon className="w-5 h-5 mr-2" />
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default Blog;
