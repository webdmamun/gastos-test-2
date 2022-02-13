import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  heroText,
  heroSubText,
  heroContainer,
} from "../../styles/Home.module.css";
import HeroButton from "../Comps/HeroButton";
import HeroImage from "../Comps/HeroImage";
// import heroImg from '../pictures/hero.png';

export default function Hero() {
  return (
    <section className="sectionPadding">
      <div className="text-light">
        <Container className={heroContainer}>
          <Row style={{ overflow: "hidden" }}>
            <Col lg={7} sm={12} xs={{ order: 2 }} md={(7, { order: 1 })}>
              <div
                className={heroText}
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Pay Below The Bill With Gastos
              </div>
              <div data-aos="fade-down" data-aos-duration="2000">
                <p className={heroSubText}>
                  Instant Discounts and exclusive offers
                  <br /> whenever and wherever you go
                </p>
                <p className="mt-5">
                  <HeroButton text="Get Started" />
                </p>
              </div>
            </Col>

            <Col lg={5} sm={12} xs={{ order: 1 }} md={(5, { order: 2 })}>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                style={{ paddingTop: "0px" }}
              >
                <HeroImage />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
