import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import {
  visitorText,
  visitorTitleText,
  visitorBodyText,
  VisitorDesktopText,
  VisitorPhoneText,
} from "../../styles/About.module.css";
import visitor from "../../pictures/visitor-min600.png";

const Visitor = () => {
  return (
    <Container>
      <Row
        className="d-flex justify-content-end my-5"
        style={{ paddingTop: "50px" }}
      >
        <Col
          className={VisitorDesktopText}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className={visitorText}>
            <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
              LOCAL BUSINESSMAN
            </span>
            = GASTOS PROVIDER <br /> A PLACE WHERE GROWTH MEETS PROFIT
          </p>
        </Col>

        <Col
          data-aos="fade-down"
          data-aos-duration="2000"
          className={VisitorPhoneText}
          lg={12}
        >
          <h3 className={visitorTitleText}>Business Growth</h3>
          <p className={visitorBodyText}>We Make People Want Your Business</p>
        </Col>

        <Col data-aos="fade-up" data-aos-duration="2000">
          <Image src={visitor} alt={visitor} />
        </Col>
      </Row>
    </Container>
  );
};

export default Visitor;
