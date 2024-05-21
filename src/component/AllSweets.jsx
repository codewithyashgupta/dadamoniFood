import React from "react";
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function AllSweets() {
  return (
    <div className="w-screen h-screen">
      <section className="w-screen">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="font-bold font-xl text-btnTwo">Classic Sweets</h1>
          <div className="flex gap-2 font-2xl">
            <NavLink
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-grey-700" : ""
                }`
              }
            >
              <CiGrid2H className="cursor-pointer text-btnOne " />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-grey-700" : ""
                }`
              }
            >
            <CiGrid41 className="cursor-pointer text-btnOne " />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllSweets;
