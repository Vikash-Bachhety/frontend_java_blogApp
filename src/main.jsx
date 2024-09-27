import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Update from './component/Update.jsx'
import Home from './component/Home.jsx'
import AddNewBlog from './component/AddNewBlog.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/addnew",
        element: <AddNewBlog />
      },
      {
        path:"/update/:id",
        element:<Update />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
