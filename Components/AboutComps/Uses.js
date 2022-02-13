import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import frame1 from "../../pictures/frame/frame1.png";
import frame2 from "../../pictures/frame/frame2.png";
import frame3 from "../../pictures/frame/frame3.png";
import {
  cardShadow,
  cardTitleOne,
  cardBody,
} from "../../styles/About.module.css";

const Uses = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="gy-5">
          <Col
            md={4}
            lg={4}
            sm={12}
            className="d-flex justify-content-center"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <Card
              style={{
                width: "20rem",
                borderRadius: "20px",
              }}
              className={cardShadow}
            >
              <div class="text-center">
                <Card.Img
                  src={frame1.src}
                  variant="top"
                  style={{ width: "154px", margin: "20px" }}
                />
              </div>
              <Card.Body>
                <Card.Title className={cardTitleOne}>
                  Low Cost Registration
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
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <Card
              style={{
                width: "20rem",
                borderRadius: "20px",
              }}
              className={cardShadow}
            >
              <div class="text-center">
                <Card.Img
                  src={frame2.src}
                  variant="top"
                  style={{ height: "154px", width: "200px", margin: "20px" }}
                />
              </div>
              <Card.Body>
                <Card.Title className={cardTitleOne}>
                  No Subscription Cost
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
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <Card
              style={{
                width: "20rem",
                borderRadius: "20px",
              }}
              className={cardShadow}
            >
              <div class="text-center">
                <Card.Img
                  src={frame3.src}
                  variant="top"
                  style={{ width: "154px", margin: "20px" }}
                />
              </div>
              <Card.Body>
                <Card.Title className={cardTitleOne}>
                  Set Your Discount
                </Card.Title>
                <Card.Text className={cardBody}>
                  Register yourself with GASTOS thorugh the provider app
                  available on play store or app store
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Uses;
