import React from "react";
import Link from "next/link";

export default function destination() {
    return (
        <section class="popular" id="destination">
        <div class="container">

          <p class="section-subtitle">Uncover place</p>

          <h2 class="h2 section-title">Popular destination</h2>

          <p class="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul class="popular-list">
          <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/destination-update-may-2019/RA_Pianemoisland_indtravel.jpg" alt="San miguel, italy" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating bg-bluegray">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p class="card-subtitle">
                    <p>Papua Barat</p>
                  </p>

                  <h3 class="h3 card-title">
                    <p>Raja Ampat</p>
                  </h3>

                  <p class="card-text">
                  Raja Ampat merupakan rangkaian empat gugusan pulau yang berdekatan 
                  </p>

                </div>

              </div>
            </li>
            <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2022-04/Ubud-Royal-Palace-2.jpeg" alt="San miguel, italy" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating bg-bluegray">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p class="card-subtitle">
                    <p>Bali</p>
                  </p>

                  <h3 class="h3 card-title">
                    <p>Ubud</p>
                  </h3>

                  <p class="card-text">
                  dikenal sebagai pusat tarian dan kerajinan tradisional.
                  </p>

                </div>

              </div>
            </li>
            <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/08/29102732/image001-13-810x540.png" alt="San miguel, italy" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating bg-bluegray">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p class="card-subtitle">
                    <p>Yogyakarta</p>
                  </p>

                  <h3 class="h3 card-title">
                    <p>Borubudur</p>
                  </h3>

                  <p class="card-text">
                  Candi Borobudur adalah candi Buddha yang terletak di Magelang, Jawa Tengah, Indonesia.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="img/popular-1.jpg" alt="San miguel, italy" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating bg-bluegray">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p class="card-subtitle">
                    <p>italy</p>
                  </p>

                  <h3 class="h3 card-title">
                    <p>San miguel</p>
                  </h3>

                  <p class="card-text">
                  San Miguel adalah kota utama di munisipalitas San Miguel de Allende
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="/img/popular-2.jpg" alt="Burj khalifa, dubai" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p class="card-subtitle">
                    <p>Dubai</p>
                  </p>

                  <h3 class="h3 card-title">
                    <p>Burj khalifa</p>
                  </h3>

                  <p class="card-text">
                  Burj Khalifa dalah sebuah pencakar langit di Dubai,
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src="/img/popular-3.jpg" alt="Kyoto temple, japan" loading="lazy"></img>
                </figure>

                <div class="card-content">

                  <div class="card-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p class="card-subtitle">
                    <p>Japan</p>
                  </p>

                  <h3 class="h3 card-title">
                    <p>Kyoto temple</p>
                  </h3>

                  <p class="card-text">
                  Tō-ji adalah sebuah wihara Buddha dari sekte Shingon di Kyoto, Jepang. 
                  </p>

                </div>

              </div>
            </li>

          </ul>
          <div className="ml-auto mr-auto text-center">
                
                <div className="mt-12">
                  <Link href="/profile">
                    <a
                    className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-700 active:bg-blueGray-500 hover:shadow-lg"
                    >
                      More destintion
                    </a>
                    </Link>
                </div>
              
            </div>

        </div>
      </section>

    );
}