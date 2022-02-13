import { Container } from "react-bootstrap";
import circleman1 from "../../pictures/learnMoreCompo/circleman1.png";
import circleman2 from "../../pictures/learnMoreCompo/circleman2.png";
import circleman3 from "../../pictures/learnMoreCompo/circleman3.png";
import circleGroupMin from "../../pictures/learnMoreCompo/circleGroupMin.png";
import {
  containerBg,
  aboutContainerWrap,
  circleTextContainer,
  circleText1,
  circleText2,
  circlemanStyle1,
  circlemanStyle2,
  circlemanStyle3,
  circleBgTesting,
  aboutWidth,
} from "../../styles/Learnmore.module.css";
import Circle from "./Circle";

const AboutUs = () => {
  return (
    <>
      <div className={containerBg}>
        <Container className={aboutContainerWrap}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className={circleTextContainer}
          >
            <h2 className={circleText1}>About us</h2>
            <div className={aboutWidth}>
              <p className={circleText2}>
                We aim to make local and small businesses a brand in themselves.
                Gastos educates small shopkeepers to get started with UPI and
                digital payments. At the same time we also help our users to pay
                anywhere and everywhere using Gastos. However, the catch here is
                getting discounts and rewards with almost every transaction you
                make.
              </p>
            </div>
          </div>
          <div>
            <img className={circlemanStyle1} src={circleman1.src} />
            <img className={circlemanStyle2} src={circleman2.src} />
            <img className={circlemanStyle3} src={circleman3.src} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
