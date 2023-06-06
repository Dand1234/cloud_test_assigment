import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './layout/Layout';
import { StartPage } from './pages/StartPage/StartPage';
import { NamePage } from './pages/NamePage/NamePage';
import { AdvantagePage } from './pages/AdvantagePage/AdvantagePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { FinalPage } from './pages/FinalPage/FinalPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <StartPage/>, 
      },
      {
        path: "name",
        element: <NamePage/>, 
      },
      {
        path: "advantages",
        element: <AdvantagePage/>, 
      },
      {
        path: "about",
        element: <AboutPage/>, 
      },
      {
        path: "final",
        element: <FinalPage/>, 
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);