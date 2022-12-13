import React from "react";

export default function foooter() {
    return (
        
  <footer class="footer">

  <div class="footer-top">
    <div class="container">

      <div class="footer-brand">

      <img
                  alt="..."
                  src="/img/logos.png"
                />

        <p class="footer-text">
        Didedikasikan untuk pengalaman terbang yang 
        menyenangkan dan penawaran tiket pesawat
        yang luar biasa
        </p>

      </div>

      <div class="footer-contact">

        <h4 class="contact-title">Contact Us</h4>

        <p class="contact-text">
          Feel free to contact and reach us !!
        </p>

        <ul>

          <li class="contact-item">
          <i className="fas fa-phone"></i>

            <a href="tel:+02420865941" class="contact-link">+02 (420) 8659 41</a>
          </li>

          <li class="contact-item">
          <i className="fas fa-envelope"></i>

            <a class="contact-link">Airtrip.com</a>
          </li>

          <li class="contact-item">
            <i className="fa fa-map-marker"></i>

            <address>Semarang, Indonesia</address>
          </li>

        </ul>

      </div>

      <div class="footer-form">

        <p class="form-text">
          Subscribe our newsletter for more update & news !!
        </p>

        <form action="" class="form-wrapper">
          <input type="email" name="email" class="input-field" placeholder="Enter Your Email" required></input>

          <button type="submit" class="btn btn-secondary">Subscribe</button>
        </form>

      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">

      <p class="copyright">
      Copyright © {new Date().getFullYear()} Airtrip{" "}. All rights reserved
      </p>

      <ul class="footer-bottom-list">

        <li>
          <p href="#" class="footer-bottom-link">Privacy Policy</p>
        </li>

        <li>
          <p href="#" class="footer-bottom-link">Term & Condition</p>
        </li>

        <li>
          <p href="#" class="footer-bottom-link">FAQ</p>
        </li>

      </ul>

    </div>
  </div>

</footer>
    );
}