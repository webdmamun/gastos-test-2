import React from "react";
import { Container } from "react-bootstrap";
import { aboutherotext } from "../../styles/About.module.css";
import HeroButton from "../Comps/HeroButton";
import Image from "next/image";
import arrow from "../../pictures/arrow.png";

const AboutHero = () => {
  return (
    <>
      <Container data-aos="fade-down" data-aos-duration="3000">
        <h2 className={aboutherotext}>
          Join Gastos and become <br /> a provider today
        </h2>

        <div className="d-flex justify-content-center my-5">
          <HeroButton text="Get Started" />
        </div>
        <div className="d-flex justify-content-center ">
          <Image src={arrow} alt="Scroll Down" />
        </div>
      </Container>
    </>
  );
};

export default AboutHero;
