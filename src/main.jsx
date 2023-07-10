import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main';
import Home from './pages/Home/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MenSandal from './pages/Mens/MenSandal/Sandal';
import MenCasual from './pages/Mens/Casual/Casual';
import MenFormal from './pages/Mens/FormalShoe/FormalShoe';
import MenWallet from './pages/Mens/Wallet/Wallet';
import MenBelt from './pages/Mens/MenBelt/MenBelt';


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
      {
        path: "/menCasual",
        element: <MenCasual></MenCasual>,
      },
      {
        path: "/menFormal",
        element: <MenFormal></MenFormal>,
      },
      {
        path: "/menWallet",
        element: <MenWallet></MenWallet>,
      },
      {
        path: "/menBelt",
        element: <MenBelt></MenBelt>,
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