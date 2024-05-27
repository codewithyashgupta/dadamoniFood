import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import Home from "./component/Home.jsx";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Offers from "./component/Offers.jsx";
import AllSweets from "./component/AllSweets.jsx";
import Cart from "./component/Cart.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/all-sweets" element={<AllSweets />} />
      <Route path="" element={Cart} />
      <Route path="/offers" element={<Offers />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
