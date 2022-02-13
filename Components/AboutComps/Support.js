import { Container } from "react-bootstrap";
import Image from "next/image";
import support from "../../pictures/support.png";
import { supportTitle, supportImage } from "../../styles/About.module.css";

const Support = () => {
  return (
    <>
      <Container className="d-flex justify-content-center flex-column">
        <h2
          className={supportTitle}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          We believe and support every local business
        </h2>
        <img className={supportImage} src={support.src} />
      </Container>
    </>
  );
};

export default Support;
