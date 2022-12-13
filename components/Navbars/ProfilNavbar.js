import React from "react";
import Link from "next/link";
// components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed uppercase text-blue whitespace-nowrap"
                href="#pablo"
              >
                Airtrip
              </a>
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
                  target="_blank"
                >
                  <i className="text-lg text-blueGray-400 fab fa-facebook leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
                  target="_blank"
                >
                  <i className="text-lg text-blueGray-400 fab fa-twitter leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
                  target="_blank"
                >
                  <i className="text-lg text-blueGray-400 fab fa-instagram leading-lg " />
                  <span className="inline-block ml-2 lg:hidden">Star</span>
                </a>
              </li>

              <li className="flex items-center">
              <Link href="/users/register">
                <button
                  className="px-4 py-2 mb-3 ml-3 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-lg focus:outline-none lg:mr-1 lg:mb-0"
                  type="button"
                >
                  <i className=""></i> Register
                </button>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}