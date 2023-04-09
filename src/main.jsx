import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Schools from './components/Schools/Schools';
import AddToApply from './components/AddToApply/AddToApply';
import ApplyDetails from './components/ApplyDetails/ApplyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/school',
        element: <Schools></Schools>,
        loader: ()=> fetch('schools.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      // {
      //   path: '/apply/details',
      //   element: <ApplyDetails></ApplyDetails>
      // }
    ]
  },
]);

// const passData = 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
