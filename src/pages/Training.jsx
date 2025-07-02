import React, { useState } from "react";
import "./Training.css";
import training from "../assets/traning/training.jpg";
import { FaClipboardList, FaHandshake, FaRegClock, FaUserAlt } from "react-icons/fa";


const Traning = () => {
  return (
    <div className="environment-page">
      <div className="environment-hero">
        <h1>TRAINING</h1>

      </div>

      <div className="breadcrumb">
        <span>Home &gt; Services &gt; Traning</span>
      </div>
{/* **************************************************************************** */}

 <div className="training-page">
      <h1 className="main-heading">Training Facilities</h1>

      <div className="section training-section">
        <div className="text-content">
          <h2>Training</h2>
          <p>
            As per requirement of stakeholders, students, researchers and entrepreneurs.
            We organised pre designed as well as module based training programs at
            our centers with moderate charges.
          </p>

          <p>Following Trainings modules are available:</p>
          <ul className="training-list">
            <li><span>✔</span> Training Module On Soil And Water Analysis.</li>
            <li><span>✔</span> Training Module On Food Analysis.</li>
            <li><span>✔</span> Training Module On ICP/OES Operations.</li>
            <li><span>✔</span> Training Module On Handson HPLC Operations.</li>
            <li><span>✔</span> Training Module On Handson GCMS Operations.</li>
            <li><span>✔</span> Training Module On Water and Waste Water Analysis.</li>
            <li><span>✔</span> Training Module On Polluted Air Sample Analysis.</li>
            <li><span>✔</span> Training Module On Microbiology Sample Analysis.</li>
            <li><span>✔</span> Training Module On Quality Control Laboratory Analyst.</li>
          </ul>

          <p>
            To Know Our Training And Other Charges <a href="#">Phone  </a>  or <a href="#">Email Us  </a> 
           
          </p>
        </div>

        <div className="image-container">
          <img src={training} alt="MIT CARS" />
        </div>
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

export default Traning;
