import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import các trang
import DashboardPage from './pages/Dashboard.jsx';
import LoginPage from './pages/Login.jsx';
import AddPage from './pages/Add.jsx';
import ListPage from './pages/List.jsx';
import RegisterPage from './pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {  path: "dashboard", index: true, element: <DashboardPage /> },  
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "add", element: <AddPage /> },
      { path: "list", element: <ListPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
