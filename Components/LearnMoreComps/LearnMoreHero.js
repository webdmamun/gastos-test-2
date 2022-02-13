import { Col, Container, Row } from "react-bootstrap";
import topLeft from "../../pictures/learnMoreCompo/topLeft.png";
import videoScreen from "../../pictures/learnMoreCompo/videoScreen.png";
import herobg from "../../pictures/learnMoreCompo/herobg.png";
import {
  learnMoreMainSection,
  bgImage,
  topleftImg,
  heroText1,
  heroText2,
  textContainer,
  heroImage,
  heroContainer,
  curved,
} from "../../styles/Learnmore.module.css";

const LearnMoreHero = () => {
  return (
    <>
      <div className={learnMoreMainSection}>
        <img
          style={{ position: "absolute" }}
          className={topleftImg}
          src={topLeft.src}
        />
        <Container
          data-aos="fade-down"
          data-aos-duration="3000"
          className={heroContainer}
        >
          <Row className="gy-5">
            <Col md={6} lg={6} sm={12}>
              <div className={textContainer}>
                <h2 className={heroText1}>GASTOS</h2>
                <p className={heroText2}>Below the bill</p>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <img className={heroImage} src={videoScreen.src} />
            </Col>
          </Row>
        </Container>
        <img className={bgImage} src={herobg.src} />
      </div>
      <section className={curved}></section>
    </>
  );
};

export default LearnMoreHero;
