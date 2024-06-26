import { FaRegUserCircle } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoLayersSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
function LowerNav() {
  return (
    <div>
      <nav class="flex items-center justify-between text-[#7A7F97] py-3 px-5 fixed bottom-0 left-0 z-50 w-full shadow-xl-top bg-white lg:hidden">
        <NavLink
          to="/"
          class="active active:text-[#F4AE00] text-[#F4AE00] flex flex-col items-center gap-1"
          aria-current="page"
        >
          <IoMdHome />
          <span class="text-xs capitalize">Home</span>
        </NavLink>
        <NavLink
          to="/all-sweets"
          class="flex flex-col items-center gap-1"
        >
          <IoLayersSharp />
          <span class="text-xs capitalize">All Sweets</span>
        </NavLink>
        <button class="pl-4 w-12 h-12 leading-[48px] text-center rounded-full -mt-12 text-white bg-[#F4AE00] relative after:absolute after:top-3 ltr:after:right-2.5 rtl:after:left-2.5 after:w-2 after:h-2 after:rounded-full after:shadow after:bg-[#FFDB1F]">
          <FaBagShopping />
        </button>
        <NavLink to = "/offers" class="flex flex-col items-center gap-1">
          <IoIosPricetags />
          <span class="text-xs capitalize">Offers</span>
        </NavLink>
        <NavLink to="/login" class="flex flex-col items-center gap-1">
          <FaRegUserCircle />
          <span class="text-xs capitalize">Log in</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default LowerNav;
