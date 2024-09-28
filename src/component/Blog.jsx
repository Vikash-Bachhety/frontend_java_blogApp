import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Blog = ({ id, title, description, views, imageurl, handleDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="max-w-sm w-96 bg-white shadow-lg rounded-lg overflow-hidden my-6 transition transform hover:scale-105 duration-300">
      {/* Blog Image */}
      <img className="w-full h-52 object-cover" src={imageurl} alt={title} />
      
      {/* Blog Content */}
      <div className="px-6 py-4">
        <h2 className="text-2xl text-teal-700 font-bold mb-2 truncate">{title}</h2>
        <p className="text-gray-700 text-base mb-4 line-clamp-4">{description}</p>
        <span className="text-rose-700 text-sm font-semibold">Views: {views}</span>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-between items-center px-6 pb-4">
        <button
          onClick={() => handleEdit(id)}
          className="flex items-center gap-2 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded transition-colors duration-300"
        >
          <EditIcon /> Edit
        </button>

        <button
          onClick={() => handleDelete(id)}
          className="flex items-center gap-2 text-rose-500 hover:bg-rose-500 hover:text-white px-3 py-1 rounded transition-colors duration-300"
        >
          <DeleteIcon /> Delete
        </button>
      </div>
    </div>
  );
};

export default Blog;
