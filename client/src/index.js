import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './global.css';
import Home from './views/Home/Home';
import Register from './views/Register/Register';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/register',
    element : <Register/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/>);
