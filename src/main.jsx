import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main';
import Home from './pages/Home/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MenSandal from './pages/Mens/MenSandal/Sandal';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menSandal",
        element: <MenSandal></MenSandal>,
      },
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=''>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)