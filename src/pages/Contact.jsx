import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <h1>CONTACT US</h1>
        <p>Home &gt; Contact &gt; Contact Us</p>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-box">
          <h3>Akola, Maharashtra</h3>
          <p>
            At Post Zodga,
            Tq Barshitakli <br />
            Dist Akola 444405
          </p>
          <p>📞 7218072175</p>
          <p>📞 7507872383</p>
          <p>✉️ tejs.mahakal@gmail.com</p>
        </div>

        <div className="contact-map">
          <h4>View Map</h4>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.615097937666!2d77.16217927512525!3d20.46502908103766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0d7b15fd255ab%3A0xd7212a5576b3d2f0!2sKatepurna%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1718379193667!5m2!1sen!2sinn"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contact-message">
        <h4>Send us a message</h4>
        {/* You can add your form here later */}
      </div>
    </div>
  );
};

export default Contact;
