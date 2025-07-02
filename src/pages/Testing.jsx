import React, { useState } from "react";
import "./Testing.css";
import testing from "../assets/testing/testing.jpg";
import { FaClipboardList, FaHandshake, FaRegClock, FaUserAlt } from "react-icons/fa";


const Testing = () => {
  

  return (
    <div className="water-page">
      <div className="water-hero">
        <h1>TESTING FACILITIES</h1>
        <p>SERVICE</p>
      </div>

      <div className="breadcrumb">
        <span>Home &gt; Services &gt; Testing Facilities</span>
      </div>
      {/* **************************************************** */}
      <div className="testing-container">
      <h1>Testing Facilities</h1>

      <div className="facilities-wrapper">
        <div className="facilities-left">
          <h2>Analytical Facilities</h2>
          <ul className="facility-list">
            {[
              "Soil Analysis.",
              "Irrigation Water Analysis.",
              "Plant & Leaf Analysis.",
              "Fertilizer (Compost & Water Soluble) Analysis.",
              "Drinking Water Analysis.(Portable Water).",
              "Food Analysis.",
              "Microbiological Sample Analysis. (Food Sample).",
              "Industrial Water and Waste Water Analysis.",
              "Microbiological Sample Analysis. (Water And Waste Water).",
              "Ambient Air and Stack Monitoring Analysis.",
              "Pesticide Detection.",
              "Polymer Sample Analysis.",
              "Pharmaceutical Sample Analysis.",
              "GMO Analysis.",
              "Heavy & Toxic Metal Analysis.",
              "Other Tailor made Sample Analysis.",
            ].map((item, index) => (
              <li key={index}>
                <span className="tick">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="facilities-right">
          <img src={testing} alt="MIT CARS" />
        </div>
      </div>

      <p className="note">
        <strong>NOTE:</strong> All Parameters are <u>not</u> included under laboratory NABL approved scope. For MIT CARS approved NABL parameter scope, please check the <a href="#">link</a>.
      </p>

     <div className="consultancy-stats">
        <div className="stat-item">
          <span className="stat-number">14</span>
          <div className="stat-label">
            <FaClipboardList className="stat-icon" />
            <div>
              <div>PROJECTS</div>
              <div>COMPLETED</div>
            </div>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-number">4789</span>
          <div className="stat-label">
            <FaHandshake className="stat-icon" />
            <div>
              <div>HAPPY</div>
              <div>CLIENTS</div>
            </div>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-number">0lac</span>
          <div className="stat-label">
            <FaRegClock className="stat-icon" />
            <div>
              <div>SOIL Health Card</div>
              <div>Distributed</div>
            </div>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-number">13</span>
          <div className="stat-label">
            <FaUserAlt className="stat-icon" />
            <div>
              <div>OUR</div>
              <div>EXPERTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
};

export default Testing;
