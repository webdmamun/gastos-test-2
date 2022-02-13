/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
// Images
import beveragesImg from "../../pictures/beverages.png";
import cosmeticsImg from "../../pictures/cosmetics.png";
import fashionImg from "../../pictures/fashion.png";
import foodImg from "../../pictures/food.png";
import healthImg from "../../pictures/health.png";
import salonImg from "../../pictures/salon.png";
import spaImg from "../../pictures/spa.png";

import {
  usesImg,
  whereText,
  spaImage,
  foodImage,
  fashionImage,
  cosmeticImage,
  beverageImage,
  healthImage,
  salonImage,
  usesBottomText,
  usesSection,
  vertParent,
  vertDiv,
  vertScroll,
  vertScroll2,
  horizParent,
  horizDiv,
  horizScroll,
  horizScroll2,
  scrollWhereText,
  scrollBottomText,
} from "../../styles/Home.module.css";

export default function Benefits() {
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
    <section className={usesSection}>
      <Container className="text-center">
        {width > 580 ? (
          <div>
            <Row>
              <div className={usesImg}>
                <div
                  className={whereText}
                  data-aos="flip-left"
                  data-aos-duration="3000"
                >
                  <p>
                    Where can you <br /> use gastos?
                  </p>
                </div>
                <div className={spaImage}>
                  <Image
                    src={spaImg}
                    alt="Where you can use?"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  />
                </div>
                <div className={foodImage}>
                  <Image
                    src={foodImg}
                    alt="Where you can use?"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  />
                </div>
                <div className={cosmeticImage}>
                  <Image
                    src={cosmeticsImg}
                    alt="Where you can use?"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                  />
                </div>

                <div className={fashionImage}>
                  <Image
                    src={fashionImg}
                    alt="Where you can use?"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  />
                </div>

                <div className={beverageImage}>
                  <Image
                    src={beveragesImg}
                    alt="Where you can use?"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  />
                </div>

                <div className={healthImage}>
                  <Image
                    src={healthImg}
                    alt="Where you can use?"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  />
                </div>

                <div className={salonImage}>
                  <Image
                    src={salonImg}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    alt="Where you can use?"
                  />
                </div>

                <div
                  className={usesBottomText}
                  data-aos="flip-left"
                  data-aos-duration="3000"
                >
                  <p>Literally Anywhere...</p>
                </div>
              </div>
            </Row>
          </div>
        ) : (
          <div className="mt-5">
            <div data-aos="flip-left" data-aos-duration="3000">
              <p className={scrollWhereText}>where can we use gastos?</p>
            </div>
            <div className={vertParent}>
              <div className={vertDiv}>
                <div className={vertScroll}>
                  <img src={foodImg.src} />
                  <img src={spaImg.src} />
                  <img src={beveragesImg.src} />
                  <img src={healthImg.src} />
                </div>
                <div className={vertScroll2}>
                  <img src={foodImg.src} />
                  <img src={spaImg.src} />
                  <img src={beveragesImg.src} />
                  <img src={healthImg.src} />
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <p className={scrollBottomText}>Literally anywhere...</p>
            </div>
            <div className={horizParent}>
              <div className={horizDiv}>
                <div className={horizScroll}>
                  <img src={salonImg.src} />
                  <img src={cosmeticsImg.src} />
                  <img src={fashionImg.src} />
                </div>
                <div className={horizScroll2}>
                  <img src={salonImg.src} />
                  <img src={cosmeticsImg.src} />
                  <img src={fashionImg.src} />
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
