import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footers/Footer.js";
import Destination from "components/Destination/Destination";
import Package from "components/Package/Package";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-screen-75">
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
                <div className="pr-8">
                  <h1 className="text-4xl font-semibold text-white">
                  Journey to Explore world
                  </h1>
                  <p className="mt-8 text-lg text-blueGray-200">
                    Kepentingan anda adalah perhatian kami,
                    apa yang penting bagi anda penting bagi kami.
                    Rencanakan perjalanan anda bersama kami sekarang,
                    dan lihatlah langit yang tersenyum.
                  </p>
                  <div className="mt-12">
                  <Link href="/caritiket">
                    <a
                    className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-700 active:bg-blueGray-500 hover:shadow-lg"
                    >
                    Cari Tiket
                    </a>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-5 overflow-hidden pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-blueGray-200"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 -mt-20 bg-blueGray-700">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                      <i className=" fas fa-globe"></i>
                    </div>
                    <h6 className="">Search Everywhere, 
                    explore anywhere</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights 
                    to every destination in the world, cheapest first.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400">
                      <i className="fa fa-percent"></i>
                    </div>
                    <h6 className="">go further with transparent pricing</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Cheapest flight deals. There are no hidden costs. With us, the price
                    you see when you search is the price you will pay.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400">
                      <i className="far fa-clock"></i>
                    </div>
                    <h6 className="">Book when it's best with Price Alerts</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    but not quite ready to book? 
                    Set up Price Alerts and we’ll let 
                    you know when your flight price goes up or down.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                  <i className="text-xl fas fa-rocket"></i>
                </div>
                {/* <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  Working with us is a pleasure
                </h3> */}

                <ul className="mt-6 list-none">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-blueGray-500 bg-blueGray-100">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                          Jaminan aman transaksi online
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-blueGray-500 bg-blueGray-100">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                          Hasil pencarian lengkap
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-blueGray-500 bg-blueGray-100">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                          Sistem pencarian cerdas
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
               
                <p className="mt-4 mb-4 text-lg leading-relaxed text-white">
                    Cek jadwal dan promo tiket pesawat murah untuk berbagai
                    rute/maskapai di sini. Pesan tiket pesawat online mudah 
                    & OK harganya pakai Airtrip
                </p>
                <Link href="/">
                  <a href="#pablo" className="mt-8 font-bold text-blueGray-700">
                    Check Notus NextJS!
                  </a>
                </Link>
              </div>

              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-blueGray-200">
                  <img
                    alt="..."
                    src="https://p4.wallpaperbetter.com/wallpaper/247/312/1011/around-the-world-wallpaper-preview.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 block w-full h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-current text-blueGray-500"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-blueGray">
                      Jelajahi dunia bersama kami
                    </h4>
                    <p className="mt-2 font-light text-blueGray text-md">
                      Kami Senang melihat Anda di sini. 
                      Kami bekerja untuk memberikan layanan terbaik kepada Anda.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Destination />
      <Package />
      <Footer />
    </>
  );
}
