import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import LowerNav from "../component/LowerNav";


function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <LowerNav />
    </>
  );
}

export default Layout;
