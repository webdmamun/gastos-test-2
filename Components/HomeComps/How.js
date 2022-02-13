import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  howTitle,
  title,
  titleSubText,
  howContent,
  howBck,
  billBck,
  doneBck,
  mobileCenter,
} from "../../styles/Home.module.css";
import howImg from "../../pictures/howImg.png";
import enterTheBill from "../../pictures/enterTheBill.png";
import andItsDone from "../../pictures/andItsDone.png";
import scanImg from "../../pictures/scan.svg";

export default function How() {
  return (
    <>
      <section className="sectionPadding ">
        <Container>
          <p className={howTitle}>How it works...</p>
          <div className={howContent}>
            <Row className={howBck}>
              <Col md={6} lg={6} sm={6} xs={6}>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                  <p className={title}>Scan The QR</p>
                  <p className={titleSubText}>
                    Step 1: Open the Gastos
                    <br /> app, scan the QR
                  </p>
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className={mobileCenter}>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                  <Image src={howImg} quality={100} alt="How Image" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="sectionPadding">
        <Container>
          <div className={howContent}>
            <Row className={billBck}>
              <Col md={6} lg={6} sm={6} xs={6}>
                <div
                  data-aos="fade-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="3000"
                >
                  <p className={title}>Enter The Bill </p>
                  <p className={titleSubText}>
                    Step 2 : Enter the amount
                    <br /> you want to pay
                  </p>
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className={mobileCenter}>
                <div
                  data-aos="fade-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="3000"
                >
                  <Image
                    src={enterTheBill}
                    quality={100}
                    alt="Enter the bill."
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="sectionPadding">
        <Container>
          <div className={howContent}>
            <Row className={doneBck}>
              <Col md={6} lg={6} sm={6} xs={6}>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                  <p className={title}>And It’s Done</p>
                  <p className={titleSubText}>
                    Step 3 : Voila! You just <br /> paid your bill and got
                    <br /> an instant discount
                  </p>
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className={mobileCenter}>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                  <Image src={andItsDone} quality={100} alt="'It's done" />
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="text-center p-5"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <p className={titleSubText}>
              It Doesnt Get Any Easier Than This, Does It?
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
