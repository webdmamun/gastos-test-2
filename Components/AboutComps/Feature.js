import { Container } from "react-bootstrap";
import Image from "next/image";
import feature from "../../pictures/feature.png";

const Feature = () => {
  return (
    <>
      <Container
        style={{ position: "relative", marginTop: "50px" }}
        className="pt-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2
          style={{
            position: "absolute",
            textAlign: "center",
            weight: "700",
            fontSize: "4vw",
          }}
        >
          Look after your customers, the business will take care of itself.
        </h2>
      </Container>
      <Image className="img-fluid" src={feature} alt={Feature} />
    </>
  );
};

export default Feature;
