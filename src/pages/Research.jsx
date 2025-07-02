import React, { useState } from "react";
import "./Research.css";
import research1 from "../assets/research/research1.jpg";
import research2 from "../assets/research/research2.jpg";
import { FaClipboardList, FaHandshake, FaRegClock, FaUserAlt } from "react-icons/fa";



const Research = () => {
  

  return (
    <div className="shelf-page">
      <div className="shelf-hero">
        <h1>RESEARCH</h1>

      </div>

      <div className="breadcrumb">
        <span>Home &gt; Services &gt; Research</span>
      </div>
{/* *************************************************************************************** */}
   <div className="research-page">
      <h1 className="main-heading">Research Facilities</h1>

      <div className="section research-section">
        <div className="text-content">
          <h2>Research</h2>
          <p>
            MIT CARS is having expertise in various portfolio and having strength of
            sophisticated instrumentation facilities coupled with dedicated team of
            experts.
          </p>
          <p>
            We undertake research projects from stakeholders, research organisations,
            students, government organisations under the scope of agriculture, food,
            environment and biotechnology.
          </p>
          <p>
            Researchers can directly contact to MIT CARS for their research need and
            support. <a href="#">Contact Us</a>
          </p>
          <p>
            We welcome quality, productive and object oriented research projects in
            associationship. <a href="#">Email</a>
          </p>
        </div>
        <div className="image-container">
          <img src={research1} alt="MIT CARS" />
        </div>
      </div>

      <div className="section ongoing-section">
        <div className="text-content">
          <h2>On Going Research Projects</h2>
          <ul className="research-list">
            <li>
              <span>✔</span> Analysis and product formulation of organic honey funded by M/s Honeywala.
            </li>
            <li>
              <span>✔</span> Adulteration analysis of spices.
            </li>
            <li>
              <span>✔</span> Assessment of organic and inorganic cucumber growth impact and changes.
            </li>
            <li>
              <span>✔</span> Development in standardization of rapid toolkit test for identification of adulteration in spices and condiments.
            </li>
            <li>
              <span>✔</span> Comparative evaluation of mineral profile and heavy metal analysis of lab grown organic and inorganic fruits and vegetables.
            </li>
            <li>
              <span>✔</span> Research on extraction and isolation of coloring and flavoring compounds from food waste and their invitro food system stability and control release studies.
            </li>
            <li>
              <span>✔</span> Research work on fungal strain for development on natural food grade color.
            </li>
            <li>
              <span>✔</span> Evaluation of lab scale extracted crude oil from oil seeds for thermal and oxidative stabilities and shelf life studies.
            </li>
          </ul>
        </div>
        <div className="image-container">
          <img src={research2} alt="MIT CARS" />
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

export default Research;
