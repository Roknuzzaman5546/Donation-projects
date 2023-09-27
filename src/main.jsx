import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Components/Outlet/Outlet';
import Donation from './Components/Donation/Donation';
// import Statistics from './Components/Statistics/Statistics';
import Home from './Components/Home/Home';
import Donat from './Components/Donat/Donat';
import Erroreelement from './Components/Erroreelemnt/Erroreelement';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Erroreelement></Erroreelement>,
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/donat/:id",
        element: <Donat></Donat>,
        loader: () => fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
