import React, { useState } from "react";
import { navbars } from "../utils/navbars";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  function toggleMenu() {
    setNavbar(!navbar);
  }
  return (
    <div className="fixed w-full z-20 bg-base bg-white">
      <div className="">
        <nav className="container mx-auto border-gray-200  py-4 sm:py-2.5 rounded dark:bg-gray-900">
          <div className="px-3 md:px-0 lg:mx-40">
            <div className="  container flex flex-wrap items-center justify-between mx-auto">
              <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Ri
                </span>
              </a>
              <button
                onClick={toggleMenu}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                className={`w-full md:block md:w-auto ${
                  navbar ? "block" : "hidden"
                }`}
                id="navbar-default"
              >
                <ul className=" flex flex-col py-3.5  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  {navbars.map((item, idx) => (
                    <li key={idx}>
                      <div className="flex items-center">
                        <label className=" font-medium py-1 text-black">
                          {item.name}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
