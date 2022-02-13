import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  howTitle,
  title,
  heroSubText,
  howContent,
  greenCardContent,
  cardBck,
  greenCardImg,
  cardTilt,
  greenCardSubText,
  greenCardContentText,
} from "../../styles/Home.module.css";
import cardImg from "../../pictures/card.png";
import Tilt from "react-tilt";

export default function GreenCard() {
  const [width, setWidth] = useState(1020);

  useEffect(() => {
    window.addEventListener("load", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <section className="sectionPadding">
      <Container
        style={width > 768 ? { paddingTop: "80px" } : { paddingTop: "20px" }}
      >
        <Row className={greenCardContent}>
          <Col
            md={6}
            lg={6}
            sm={12}
            style={
              width > 766
                ? { paddingBottom: "400px" }
                : { paddingBottom: "60px", paddingTop: "60px" }
            }
          >
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ width: "70%", margin: "0 auto" }}
            >
              <div
                className={greenCardImg}
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                <Image
                  style={{ marginBottom: "20px" }}
                  src={cardImg}
                  alt="Green Card"
                />
              </div>
            </Tilt>
          </Col>
          <Col md={6} lg={6} sm={12} style={{ paddingBottom: "400px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
              }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <span className={title}>Green Card Club</span>
              <span
                className={greenCardSubText}
                style={{ marginTop: "8px", marginLeft: "5px" }}
              >
                Made with you, for you
              </span>
              <span
                className={greenCardContentText}
                style={{ marginTop: "8px", marginLeft: "5px" }}
              >
                we give special benefits, the best of <br /> rewards , huge
                discounts to our <br /> green card club members.
                <span style={{ color: "#2D796D" }}> Join us</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
