import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import step1 from "../../pictures/step1.png";
import step2 from "../../pictures/step2.png";
import step3 from "../../pictures/step3.png";
import {
  cardShadow,
  cardTitleOne,
  cardTitleTow,
  cardBody,
} from "../../styles/About.module.css";

const ThreeSteps = () => {
  return (
    <>
      <Container className="pt-5">
        <Row className="gy-5">
          <Col
            md={4}
            lg={4}
            sm={12}
            className="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Card
              style={{
                width: "18rem",
                borderRadius: "20px",
              }}
              className={cardShadow}
            >
              <div class="text-center">
                <Card.Img
                  src={step1.src}
                  variant="top"
                  style={{ width: "154px", margin: "20px" }}
                />
              </div>
              <Card.Body>
                <Card.Title className={cardTitleOne}>Step 1</Card.Title>
                <Card.Title className={cardTitleTow}>
                  Register Yourself
                </Card.Title>
                <Card.Text className={cardBody}>
                  Register yourself with GASTOS thorugh the provider app
                  available on play store or app store
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={4}
            lg={4}
            sm={12}
            className="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Card
              style={{
                width: "18rem",
                borderRadius: "20px",
              }}
              className={cardShadow}
            >
              <div class="text-center">
                <Card.Img
                  src={step2.src}
                  variant="top"
                  style={{ width: "154px", margin: "20px" }}
                />
              </div>
              <Card.Body>
                <Card.Title className={cardTitleOne}>Step 2</Card.Title>
                <Card.Title className={cardTitleTow}>
                  Set Your Discount
                </Card.Title>
                <Card.Text className={cardBody}>
                  Fix discount margins you want to offer for your customers all
                  by yourself
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={4}
            lg={4}
            sm={12}
            className="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Card
              style={{
                width: "18rem",
                borderRadius: "20px",
              }}
              className={cardShadow}
            >
              <div class="text-center">
                <Card.Img
                  src={step3.src}
                  variant="top"
                  style={{ width: "154px", margin: "20px" }}
                />
              </div>
              <Card.Body>
                <Card.Title className={cardTitleOne}>Step 3</Card.Title>
                <Card.Title className={cardTitleTow}>
                  Start Accepting Customers
                </Card.Title>
                <Card.Text className={cardBody}>
                  Enjoy new and bigger profits with customers coming to your
                  doorstep everyday!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThreeSteps;
