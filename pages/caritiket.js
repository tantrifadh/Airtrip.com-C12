import React from "react";


import Navbar from "components/Navbars/ProfilNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      
      <Navbar transparent />
      <main>
        <div className="relative flex items-center content-center justify-center pt-0 pb-0 min-h-screen-75">
          <div
            className="absolute w-full h-full bg-center bg-cover top-8"
            style={{
              backgroundImage:
                "url('https://www.itda.ac.id/uploads/blog/42b2e725f27b8df105cfde216e5e05b2.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-2 ml-auto mr-auto text-center lg:w-6/12">
                <div className="pr-6">
                  <h1 className="text-5xl font-semibold text-white">
                  Journey to Explore world
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Kepentingan anda adalah perhatian kami,
                    apa yang penting bagi anda penting bagi kami.
                    Rencanakan perjalanan anda bersama kami sekarang,
                    dan lihatlah langit yang tersenyum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative py-20 bg-blueGray-200">
          <div className="container px-6 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                    <div className="px-3 py-6 mt-32 sm:mt-0">
                      <button
                        className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-md focus:outline-none sm:mr-2"
                        type="button"
                      >
                        Cari tiket
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-1">
                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="p-3 text-center lg:mr-4">
                        <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
