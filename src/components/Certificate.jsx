import React, { useState } from "react";
import "./Certificate.css";

import lab1 from "../assets/about-company/lab1.jpg";
import lab2 from "../assets/about-company/lab2.webp";

const certificates = [
  {
    name: "ISO 9001:2015 Certificate",
    image: lab1,
  },
  {
    name: "NABL Accreditation Certificate",
    image: lab2,
  },
];

const Certificate = () => {
  const [activeCert, setActiveCert] = useState(null);

  const handleOpen = (cert) => {
    setActiveCert(cert);
  };

  const handleClose = () => {
    setActiveCert(null);
  };

  return (
    <div className="certificate-page">
      <div className="certificate-header">
        <p>Home &gt; Certificate</p>
        <h1>Certificate</h1>
      </div>

      <div className="certificate-content">
        <h2 className="certificate-title">Our Certificates</h2>
        <ul className="certificate-list">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="certificate-item"
              onClick={() => handleOpen(cert)}
            >
              {cert.name}
            </li>
          ))}
        </ul>
      </div>

      {activeCert && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="modal-close" onClick={handleClose}>
              &times;
            </span>
            <img
              src={activeCert.image}
              alt={activeCert.name}
              className="modal-image"
            />
            <p className="modal-caption">{activeCert.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
