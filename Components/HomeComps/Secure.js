import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  howTitle,
  title,
  heroSubText,
  howContent,
  secureContent,
  secureContentBck,
  secureContentDiv,
  secureSubText,
  secureImgDiv,
} from "../../styles/Home.module.css";
import secureImg from "../../pictures/secure.png";

export default function Secure() {
  return (
    <section className="sectionPadding">
      <Container>
        <div>
          <Row className={secureContentBck}>
            <Col md={6} lg={6} sm={12} className={secureImgDiv}>
              <div data-aos="fade-up" data-aos-duration="2000">
                <Image
                  src={secureImg}
                  height={350}
                  width={450}
                  alt="Secure Payment"
                />
              </div>
            </Col>
            <Col md={6} lg={6} sm={12} className={secureContent}>
              <div
                className={secureContentDiv}
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <span className={title}>Secure Payments</span>

                <span
                  className={secureSubText}
                  // style={{ marginTop: '8px', marginLeft: '5px' }}
                >
                  Tie-up with the most trustable brands, so that you don’t
                  compromise with the safety and security of your money
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
