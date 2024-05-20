import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Logo from "./../assets/logo.jpg";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    
    <>
      <header className="sticky top-0 z-10 p-4 mb-2 bg-white shadow-xs z-1">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center justify-between w-full gap-5 xl:gap-8 lg:justify-start lg:w-fit">
            <a href="/" className="active router-link-exact-active header-logo">
              <img src={Logo} alt="" className="w-64" />
            </a>
          </div>
          <nav className="items-center justify-center hidden gap-6 lg:flex">
            {/* {navItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.name}
          </Link>
        ))} */}
            <NavLink to="/" className="text-sm font-semibold capitalize active" href="/">
              Home
            </NavLink>
            <NavLink to="/all-sweets" className="text-sm font-semibold capitalize" href="/allsweets">
              All Sweets
            </NavLink>
            <NavLink to="/offers" className="text-sm font-semibold capitalize" href="/offers">
              Offers
            </NavLink>
          </nav>
          <div className="flex flex-col items-center justify-end w-full gap-3 mt-4 lg:flex-row lg:w-fit lg:mt-0">
            <form className="header-search-group group flex items-center justify-center border border-solid gap-2 px-2 w-full lg:w-52 h-8 rounded-3xl transition border-[#EFF0F6]  focus-within:bg-white focus-within:border-red-900 bg-slate-200">
              <button
                type="submit"
                className="header-search-submit bg-slate-200"
              >
                <CiSearch />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full text-xs outline-none appearance-none header-search-field placeholder:font-normal placeholder:text-paragraph text-heading bg-slate-200 focus-within:bg-white "
              />
              <button
                type="button"
                className="invisible transition header-search-button group-focus-within:visible bg-slate-200 focus-within:bg-white"
              >
                <IoIosClose />
              </button>
            </form>
            <button className="hidden lg:flex items-center justify-center gap-1.5 w-fit rounded-3xl capitalize text-sm font-medium h-8 px-3 transition text-white bg-heading ">
              <FaBagShopping />
              <span>₹0.00</span>
            </button>
            <a
              href="/login"
              className="items-center justify-center hidden h-8 gap-1 px-3 text-sm font-medium text-white capitalize transition lg:flex w-fit rounded-3xl bg-btnTwo"
            >
              <FaRegUserCircle className="lab lab-profile-circle" />
              <span className="whitespace-nowrap">Log In</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
