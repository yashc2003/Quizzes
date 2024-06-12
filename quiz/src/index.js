import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from "./componant/home"
const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Home/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <RouterProvider router={router} />
     
  </>
);