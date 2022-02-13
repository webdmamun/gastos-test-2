/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  howTitle,
  title,
  heroSubText,
  howContent,
  greenCardContent,
  recImg,
  recogCenter,
  recogDiv,
  recogParent,
  recogScroll,
  recogScroll2,
} from "../../styles/Home.module.css";

import makeInIndia from "../../pictures/makeInIndia.png";
import minOfElec from "../../pictures/ministryOfElectronics.png";
import startupIndia from "../../pictures/startupIndia.png";
import recogImg from "../../pictures/recog.png";
import deptOfPolicy from "../../pictures/deptOfIndustrialPolicy.png";

export default function Recognized() {
  return (
    <section className="sectionPadding">
      <div className="text-center mt-5">
        <div
          className={title}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Recognized
        </div>
      </div>
      <div className={recogCenter}>
        <div className={recogParent}>
          <div className={recogDiv}>
            <div className={recogScroll}>
              <img src={makeInIndia.src} />
              <img src={minOfElec.src} />
              <img src={startupIndia.src} />
              <img src={deptOfPolicy.src} />
              <img src={recogImg.src} />
            </div>
            <div className={recogScroll2}>
              <img src={makeInIndia.src} />
              <img src={minOfElec.src} />
              <img src={startupIndia.src} />
              <img src={deptOfPolicy.src} />
              <img src={recogImg.src} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
