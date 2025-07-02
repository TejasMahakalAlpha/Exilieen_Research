import React from "react";
import "./Footer.css";
import logo from "../assets/footer/logo.png"; // ✅ local logo

const Footer = () => {
  return (
    <footer>
      <div className="contact-bar">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <strong>HEAD OFFICE</strong><br />
            At Post Zodga <br /> Tq Barshitakli<br /> Dist Akola 444405
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <div>
            <strong>CALL US</strong><br />
            9763050611<br />8308778129
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <div>
            <strong>EMAIL US</strong><br />
            tejs.mahakal@gmail.com
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-about">
          <img src={logo} alt="CaWood Agriculture" />
          <p>
            CaWood Agriculture is NABL Accredited under Quality Council of India for Food & Water Testing.
            We assist food manufacturers in product development, shelf life testing, and full regulatory compliance.
          </p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <a href="#">Contact</a>
          <h4>OUR SERVICES</h4>
          <a href="#">Food Testing</a>
          <a href="#">Water Testing</a>
          <a href="#">Soil Testing</a>
          <a href="#">Shelf Life Testing</a>
          <a href="#">Environment Monitoring</a>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.615097937666!2d77.16217927512525!3d20.46502908103766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0d7b15fd255ab%3A0xd7212a5576b3d2f0!2sKatepurna%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1718379193667!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Made with ❤️ by <a href="https://github.com/tejsmahakal" target="_blank" rel="noreferrer"><strong>Tejas Mahakal</strong></a>
      </div>
    </footer>
  );
};

export default Footer;
