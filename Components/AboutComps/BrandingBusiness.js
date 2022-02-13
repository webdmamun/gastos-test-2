import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import branding from "../../pictures/branding.png";
import business from "../../pictures/business.png";

const BrandingBusiness = () => {
  return (
    <>
      <Container>
        <Row className="text-center mb-5 pt-5">
          <Col
            md={6}
            lg={6}
            sm={12}
            className="px-5"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <Image src={branding} />
            <h2>Branding</h2>
            <p style={{ color: "#505050", fontSize: "20px" }}>
              With our Provider community growing stronger each day, we aim to
              convert every local business into a brand.
            </p>
          </Col>
          <Col
            md={6}
            lg={6}
            sm={12}
            className="px-5"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <Image src={business} />
            <h2>Business</h2>
            <p style={{ color: "#505050", fontSize: "20px" }}>
              Business growth and profit making go hand in hand with Gastos
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BrandingBusiness;
