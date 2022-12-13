import React from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";

export default function Akunsaya() {
  return (
    <>
    <div className="flex items-center content-center justify-center h-full">
       <div className="relative flex flex-col justify-center w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg lg:w-6/12 bg-blueGray-100">
        <div className="px-6 py-6 mb-0 bg-white rounded-t">
        <div className="flex justify-center w-full px-4">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/team-3-800x800.jpg"
                  className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16 max-w-120-px"
                />
              </div>
          </div>
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-blueGray-700">Akun Saya</h6>
            <button
              className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-md focus:outline-none"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form>
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
            INFORMASI PENGGUNA
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Lathiftlya"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="lathiftlya@gmail.com"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="yaya"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="lathf"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-12/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Jln. Kp Driyahan 233 Semarang Utara"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="New York"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div>
            
            <div className="px-20 mt-12">
                  <Link href="/caritiket">
                    <a
                    className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-700 active:bg-blueGray-500 hover:shadow-lg"
                    >
                    send
                    </a>
                  </Link>
              </div>
            {/* <div className="mt-6 text-center">
                <button
                className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-700 hover:shadow-lg focus:outline-none"
                type="button"
                >
                    Save
                </button>
            </div> */}
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
    </div>
    </>
  );
}


Akunsaya.layout = Auth;