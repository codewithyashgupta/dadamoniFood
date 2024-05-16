import react from 'react';
import "../component/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlineSms } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import FLogo from "./../assets/footer-logo.png";
import playStore from "./../assets/play-store.png";
import AppStore from "./../assets/app-store.png";

function Footer() {
  
  return (
    <div className="w-full overflow-y-auto max-h-auto bg-btnTwo first-line:">
    <footer className="pt-12 footer-part mb-14 lg:mb-0 ">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <div>
            <a href="/home" className="active router-link-exact-active">
              <img src={FLogo} className="mb-8 w-42" alt="logo" />
            </a>
            <p className="mb-3 text-xs text-white">
              Subscribe to our newsletter to get latest updates
            </p>
            <form className="flex items-center w-full h-12 p-2 mb-8 bg-white rounded-lg sm:max-w-xs">
              <input
                type="email"
                className="w-full h-full outline-none ltr:pl-2 rtl:pr-2"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className="capitalize text-xs font-medium rounded-md flex-shrink-0 p-2.5 text-white bg-primary bg-btnTwo"
              >
                Subscribe
              </button>
            </form>
            <h3 className="mb-4 text-xs text-white capitalize ">
              Follow Us On
            </h3>
            <nav className="flex items-center gap-5 text-btnTwo">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61556527837426"
                className="inline-block text-sm leading-7 p-[7px]  text-center bg-white rounded-full shadow-lg w-7 h-7 "
              >
                <FaFacebook />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/dadamonis?lang=en"
                className="inline-block text-sm p-[7px]  leading-7 text-center bg-white rounded-full shadow-lg w-7 h-7 item-center"
              >
                <FaTwitter />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dadamonisweet"
                className="inline-block p-[7px] text-sm leading-7 text-center bg-white rounded-full shadow-lg w-7 h-7"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@dadamonis"
                className="inline-block text-sm leading-7 p-[7px]  text-center bg-white rounded-full shadow-lg fa-brands fa-youtube w-7 h-7 text-primary"
              >
                <FaYoutube />
              </a>
            </nav>
          </div>
          <div className="">
            <div className="sm:w-fit sm:mx-auto">
              <h3 className="mb-6 text-lg font-semibold text-white capitalize">
                UseFull Links
              </h3>
              <nav className="flex flex-col items-start gap-3">
                <a
                  href="/cookies-policy"
                  class="capitalize text-white hover:underline"
                >
                  Cookies Policy
                </a>
                <a
                  href="/about-us"
                  class="capitalize text-white hover:underline"
                >
                  About Us
                </a>
                <a
                  href="/contact-us"
                  class="capitalize text-white hover:underline"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
          <div className="">
            <h3 class="capitalize text-lg font-semibold mb-3 text-white">
              Download Our Apps
            </h3>
            <nav class="flex items-center gap-3 mb-7 w-full max-w-[265px]">
              <a target="_blank" href="http://android.com">
                <img class="rounded-lg w-full" src={playStore} alt="app" />
              </a>
              <a target="_blank" href="http://ios.com">
                <img class="rounded-lg w-full" src={AppStore} alt="app" />
              </a>
            </nav>
            <ul class="flex flex-col gap-5">
              <li class="flex items-center gap-2.5 text-white">
                <MdOutlineSms />
                <span class="text-lg">dadamonifoods@gmail.com</span>
              </li>
              <li class="flex items-center gap-2.5 text-white">
                <IoCall />
                <span class="text-lg font-medium">+919667755745</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-2 mt-8 border-t border-[#D9DBE9]">
        <p className="text-sm text-center text-white">
          © Dadamoni's 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  </div>
  )
}

export default Footer
