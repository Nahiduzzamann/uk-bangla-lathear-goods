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
import MenJackets from './pages/Mens/LeatherJacket/LeatherJacket';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/Contact/Contact';
import MissionAndWaste from './pages/Mission&Waste/Mission&Waste';
import LadiesShoe from './pages/Ladies/Shoes/LadiesShoe';
import LadiesBag from './pages/Ladies/Bag/LadiesBag';
import CardHolder from './pages/Others/CardHolder/CardHolder';
import CorporateGifts from './pages/Others/CorporateGifts/CorporateGifts';
import PassportCover from './pages/Others/PassportCover/PassportCover';


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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/mission",
        element: <MissionAndWaste></MissionAndWaste>,
      },
      {
        path: "/menSandals",
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
        path: "/menWallets",
        element: <MenWallet></MenWallet>,
      },
      {
        path: "/menBelts",
        element: <MenBelt></MenBelt>,
      },
      {
        path: "/menJackets",
        element: <MenJackets></MenJackets>,
      },
      {
        path: "/ladiesShoe",
        element: <LadiesShoe></LadiesShoe>,
      },
      {
        path: "/ladiesBag",
        element: <LadiesBag></LadiesBag>
      },
      {
        path: "/cardHolder",
        element: <CardHolder></CardHolder>
      },
      {
        path: "/corporateGifts",
        element: <CorporateGifts></CorporateGifts>
      },
      {
        path: "/passportCover",
        element: <PassportCover></PassportCover>
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