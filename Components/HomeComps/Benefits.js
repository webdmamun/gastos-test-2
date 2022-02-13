import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  howTitle,
  title,
  heroSubText,
  howContent,
  greenCardContent,
  benefitsleftPadding,
  cardGridOne,
  imgAbsolute,
  benefitSection,
  benefitImage,
  benefitOverlay,
  overlayText,
  benefitImgDiv,
  benefitImg,
  benefitImgList,
  trialDiv,
} from "../../styles/Home.module.css";
import img1 from "../../pictures/1.png";
import img2 from "../../pictures/2.png";
import img3 from "../../pictures/3.png";
import img4 from "../../pictures/4.png";

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
    <section className={benefitSection}>
      <div className={benefitImgDiv}>
        {/* Image 1 */}
        <div
          className={benefitImgList}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={img1.src} className={benefitImg} alt="Benefits" />
          <div className={benefitOverlay}>
            <div className={overlayText}>
              <h1>EARN ON EVERY PAYMENT</h1>
              <p>
                How do you like the sound the sound of earning money whenever
                you pay for something ? If you don’t believe this then we have
                some suprises for you.
              </p>
            </div>
          </div>
        </div>
        {/* Image 2 */}
        {width > 800 ? (
          <div
            className={benefitImgList}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={img2.src} className={benefitImg} alt="Benefits" />
            <div className={benefitOverlay}>
              <div className={overlayText}>
                <h1>
                  PAY LESS <br />
                  SAVE MORE
                </h1>
                <p>
                  Pay below the bill with and get instant discounts . Who knew
                  saving money had no limits?
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={benefitImgList}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className={trialDiv}>
              <img src={img2.src} className={benefitImg} alt="Benefits" />
              <div className={benefitOverlay}>
                <div className={overlayText}>
                  <h1>
                    PAY LESS <br />
                    SAVE MORE
                  </h1>
                  <p>
                    Pay below the bill with and get instant discounts . Who knew
                    saving money had no limits?
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={benefitImgDiv}>
        {/* Image 3 */}
        <div
          className={benefitImgList}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={img3.src} className={benefitImg} alt="Benefits" />
          <div className={benefitOverlay}>
            <div className={overlayText}>
              <h1>MANAGED EXPENSES</h1>
              <p>
                Do you also wonder about where your money is flying away? Well
                we have an answer for you. Record all your expenses at one place
                using Gastos
              </p>
            </div>
          </div>
        </div>
        {/* Image 4 */}
        {width > 800 ? (
          <div
            className={benefitImgList}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={img4.src} className={benefitImg} alt="Benefits" />
            <div className={benefitOverlay}>
              <div className={overlayText}>
                <h1>WIDE RANGE OF PAYMENTS</h1>
                <p>
                  We cover everyone from your local chai vala to fancy
                  restaurants ,from your nearby gym to the distant salon Choose
                  a place and we are there for you
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={benefitImgList}>
            <div className={trialDiv}>
              <img src={img4.src} className={benefitImg} alt="Benefits" />
              <div className={benefitOverlay}>
                <div className={overlayText}>
                  <h1>WIDE RANGE OF PAYMENTS</h1>
                  <p>
                    We cover everyone from your local chai vala to fancy
                    restaurants ,from your nearby gym to the distant salon
                    Choose a place and we are there for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
