import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock, FaUserAlt, FaHandshake, FaClipboardList } from "react-icons/fa";
import "./Soil.css";


const Consultancy = () => {

  return (

    <div className="soil-page">
      

      
 <div className="consultancy-page">
      <div className="consultancy-hero">
        <h1>Consultancy</h1>
      </div>
      <div className="breadcrumb">
        <span>Home &gt; Services &gt; Consultancy</span>
      </div>

      <div className="consultancy-content">
        <ul>
          <li>
            <FaCheckCircle className="check-icon" />
            We support and undertake consultancy projects research assignments from Govt. Private institutes, Students research assignments, Individual product development work limited to our laboratory scope as per stakeholders need.
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            We support and undertake consultancy projects research assignments from Govt. Private institutes, Students research assignments, Individual product development work limited to our laboratory scope as per stakeholders need.
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            We support and undertake consultancy projects research assignments from Govt. Private institutes, Students research assignments, Individual product development work limited to our laboratory scope as per stakeholders need.
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            We support and undertake consultancy projectsresearch assignments from Govt. Private institutes, Students research assignments, Individual product development work limited to our laboratory scope as per stakeholders need.
          </li>
        </ul>
      </div>

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

export default Consultancy;
