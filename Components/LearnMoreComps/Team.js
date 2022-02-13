import { Carousel, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import founder from "../../pictures/learnMoreCompo/founder.png";
import manager from "../../pictures/learnMoreCompo/manager.png";
import email from "../../pictures/learnMoreCompo/email.png";
import instagram from "../../pictures/learnMoreCompo/instagram.png";
import linkedin from "../../pictures/learnMoreCompo/linkedin.png";
import teamBgImage from "../../pictures/learnMoreCompo/teamBg.png";

import {
  teamBg,
  carouselItem,
  carouselCaption,
  carouselImage,
  carouselText,
  circleShops,
  circleShopsForMobile,
  teamBgImagestyle,
  teamContainer,
} from "../../styles/Learnmore.module.css";
import shopImage from "../../pictures/learnMoreCompo/circleGroupMin.png";
import Recognized from "../HomeComps/Recognized";
import Faq from "../HomeComps/Faq";

const Team = () => {
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
    <>
      {width > 800 ? (
        <div className={teamBg} style={{ zIndex: "1", position: "absolute" }}>
          <div className={circleShops}>
            <Image
              src={shopImage}
              width={2000}
              height={1800}
              quality={100}
              alt="Shop Image"
            />
          </div>

          <img src={teamBgImage.src} className={teamBgImagestyle} />

          <div
            style={{
              width: "100%",
              height: "420px",
              background: "#191919",
              paddingTop: "20px",
            }}
          >
            <Recognized />
          </div>
          <Container style={{ marginTop: "-910px" }}>
            <Carousel controls={false}>
              <Carousel.Item className={carouselItem}>
                <img
                  className={carouselImage}
                  src={founder.src}
                  alt="First slide"
                />
                <Carousel.Caption className={carouselCaption}>
                  <div className={carouselText}>
                    <h3>Meet our Founder</h3>

                    <p className="py-3">
                      Talk about your journey from the coffeeshop and <br />{" "}
                      your vision to support #vocalforlocal
                    </p>

                    <h3>Sahgal Yadav</h3>
                    <div className="d-flex justify-content-start">
                      <img className="mx-1" src={linkedin.src} />
                      <img className="mx-1" src={email.src} />
                      <img className="mx-1" src={instagram.src} />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className={carouselItem}>
                <img
                  className={carouselImage}
                  src={manager.src}
                  alt="Third slide"
                />

                <Carousel.Caption className={carouselCaption}>
                  <div className={carouselText}>
                    <h3>Our Leading Manager</h3>
                    <p className="py-3">
                      Talk about your journey from the coffeeshop and <br />{" "}
                      your vision to support #vocalforlocal
                    </p>
                    <h3>Daisy Dutta</h3>
                    <div className="d-flex justify-content-start">
                      <img className="mx-1" src={linkedin.src} />
                      <img className="mx-1" src={email.src} />
                      <img className="mx-1" src={instagram.src} />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      ) : (
        <div className={teamBg} style={{ zIndex: "1", position: "absolute" }}>
          <div className={circleShopsForMobile}>
            <Image
              src={shopImage}
              width={2000}
              height={1800}
              quality={100}
              alt="Shop Image"
            />
          </div>

          <img src={teamBgImage.src} className={teamBgImagestyle} />

          <div
            style={{
              width: "100%",
              height: "420px",
              background: "#191919",
              paddingTop: "20px",
            }}
          >
            <Recognized />
          </div>
          <Container className={teamContainer}>
            <Carousel controls={false}>
              <Carousel.Item className={carouselItem}>
                <img
                  className={carouselImage}
                  src={founder.src}
                  alt="First slide"
                />
                <Carousel.Caption className={carouselCaption}>
                  <div className={carouselText}>
                    <h3>Meet our Founder</h3>

                    <p className="py-3">
                      Talk about your journey from the coffeeshop and <br />{" "}
                      your vision to support #vocalforlocal
                    </p>

                    <h3>Sahgal Yadav</h3>
                    <div className="d-flex justify-content-start">
                      <img className="mx-1" src={linkedin.src} />
                      <img className="mx-1" src={email.src} />
                      <img className="mx-1" src={instagram.src} />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className={carouselItem}>
                <img
                  className={carouselImage}
                  src={manager.src}
                  alt="Third slide"
                />

                <Carousel.Caption className={carouselCaption}>
                  <div className={carouselText}>
                    <h3>Our Leading Manager</h3>
                    <p>
                      Talk about your journey from the coffeeshop and <br />
                      your vision to support #vocalforlocal
                    </p>
                    <h3>Daisy Dutta</h3>
                    <div className="d-flex justify-content-start">
                      <img className="mx-1" src={linkedin.src} />
                      <img className="mx-1" src={email.src} />
                      <img className="mx-1" src={instagram.src} />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      )}
    </>
  );
};

export default Team;
