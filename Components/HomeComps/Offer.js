/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  offerTitle,
  paymentImg,
  redBlurClass,
  dGreenCircleSmallClass,
  blackGreenBlurClass,
  pinkCircleClass,
  blackWhiteBlurClass,
  dBlueCircleClass,
  purpleCircleClass,
  blueBlurClass,
  lBlueCircleClass,
  greenCircleSmallClass,
  blackGreenWhiteBlurClass,
  greenCircleClass,
  pinkBlurClass,
  yellowBlurClass,
  lGreenCircleClass,
} from "../../styles/Home.module.css";

import blackGreenBlur from "../../pictures/offerImg/blackGreenBlur.png";
import blackGreenWhiteBlur from "../../pictures/offerImg/blackGreenWhiteBlur.png";
import blackWhiteBlur from "../../pictures/offerImg/blackWhiteBlur.png";
import blueBlur from "../../pictures/offerImg/blueBlur.png";
import dGreenCircleSmall from "../../pictures/offerImg/dGreenCircleSmall.png";
import redBlur from "../../pictures/offerImg/redBlur.png";
import greenCircle from "../../pictures/offerImg/greenCircle.png";
import greenCircleSmall from "../../pictures/offerImg/greenCircleSmall.png";
import lBlueCircle from "../../pictures/offerImg/lBlueCircle.png";
import lGreenCircle from "../../pictures/offerImg/lGreenCircle.png";
import pinkBlur from "../../pictures/offerImg/pinkBlur.png";
import pinkCircle from "../../pictures/offerImg/pinkCircle.png";
import purpleCircle from "../../pictures/offerImg/purpleCircle.png";
import yellowBlur from "../../pictures/offerImg/yellowBlur.png";
import dBlueCircle from "../../pictures/offerImg/dBlueCircle.png";

export default function Offer() {
  return (
    <section className="sectionPadding mt-5">
      <div className="text-center">
        <div className={offerTitle} data-aos="fade-up" data-aos-duration="3000">
          Offers And Rewards From Hundereds Of <br />
          Brands You Love
        </div>
        <div className={paymentImg}>
          <img src={redBlur.src} className={redBlurClass} />
          <img src={dGreenCircleSmall.src} className={dGreenCircleSmallClass} />
          <img src={blackGreenBlur.src} className={blackGreenBlurClass} />
          <img src={pinkCircle.src} className={pinkCircleClass} />
          <img src={blackWhiteBlur.src} className={blackWhiteBlurClass} />
          <img src={dBlueCircle.src} className={dBlueCircleClass} />
          <img src={purpleCircle.src} className={purpleCircleClass} />
          <img src={blueBlur.src} className={blueBlurClass} />
          <img src={lBlueCircle.src} className={lBlueCircleClass} />
          <img src={greenCircleSmall.src} className={greenCircleSmallClass} />

          <img
            src={blackGreenWhiteBlur.src}
            className={blackGreenWhiteBlurClass}
          />
          <img src={greenCircle.src} className={greenCircleClass} />
          <img src={pinkBlur.src} className={pinkBlurClass} />
          <img src={yellowBlur.src} className={yellowBlurClass} />
          <img src={lGreenCircle.src} className={lGreenCircleClass} />
        </div>
      </div>
    </section>
  );
}
