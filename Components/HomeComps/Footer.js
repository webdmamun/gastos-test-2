/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Twitter, Facebook, Instagram } from "react-bootstrap-icons";
import {
  howTitle,
  footerTitle,
  heroSubText,
  hrBorderLight,
  howContent,
  greenCardContent,
  mobSocials,
  mobLogo,
  mobLinks,
  mobCopy,
  footer,
  footerContainer,
  footerLogo,
} from "../../styles/Home.module.css";
import HeroButton from "../Comps/HeroButton";
import logoLightImg from "../../pictures/logo-light.png";

export default function Footer({
  style = { color: "#FFFFFF", textDecoration: "none", padding: "5px" },
}) {
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
    <div className={footer}>
      <Container className={footerContainer}>
        <div>
          <div
            className={footerTitle}
            style={style}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Genius mixed with goodness and growth
          </div>
          <div
            style={{ marginTop: "100px", marginLeft: "15px" }}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <HeroButton text="Download GASTOS" />
          </div>
        </div>

        {width > 500 ? (
          <div className="text-center" style={{ marginTop: "0px", style }}>
            <Row className={heroSubText}>
              <Col style={{ textDecoration: "none" }}>
                <Link href="/about">
                  <a style={style}>Become a provider</a>
                </Link>
              </Col>
              <Col>
                <Link href="/learn-more">
                  <a style={style}>Learn more</a>
                </Link>
              </Col>
              <Col>
                <Image
                  src={logoLightImg}
                  height={70}
                  width={60}
                  alt="Gastos Logo"
                />
              </Col>
              <Col>Contact us</Col>
              <Col>Privacy Policy</Col>
            </Row>
            <hr className={hrBorderLight} />
            <Row className="text-center">
              <Col md={4} lg={4} sm={4} xs={4}>
                Twitter
              </Col>
              <Col md={4} lg={4} sm={4} xs={4}>
                Instagram
              </Col>
              <Col md={4} lg={4} sm={4} xs={4}>
                Facebook
              </Col>
            </Row>
            <p className="pt-3">
              &copy; 2022 | Copyright GASTOS PRIVATE LIMITED
            </p>
          </div>
        ) : (
          <div className="mt-5 mx-1" style={style}>
            <div className={mobLogo}>
              <div className={mobCopy}>
                <Image src={logoLightImg} height={70} width={60} />
                <p>
                  &copy; 2022 | GASTOS PRIVATE LIMITED
                  <br />
                  All rights reserved
                </p>
              </div>
              <div className={mobLinks}>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "5px",
                    style,
                  }}
                  href="/learn-more"
                >
                  <a>Learn more</a>
                </Link>
                <Link href="/about">
                  <a
                    style={{
                      textDecoration: "none",
                      padding: "5px",
                      style,
                    }}
                  >
                    Become a provider
                  </a>
                </Link>
              </div>
            </div>
            <div className={mobSocials}>
              <a href="">
                <Twitter className="fs-1" />
              </a>
              <a href="">
                <Facebook className="fs-1" />
              </a>
              <a href="">
                <Instagram className="fs-1" />
              </a>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
