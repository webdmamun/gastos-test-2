import AppImg from "../../pictures/app.png";
import Text1 from "../../pictures/textBox1.png";
import Text2 from "../../pictures/textBox2.png";

import {
  heroImg,
  heroText1,
  heroText2,
  heroBg,
} from "../../styles/Home.module.css";

const HeroImage = () => {
  return (
    <div className={heroImg}>
      <img src={Text1.src} className={heroText1} alt="" />
      <img src={AppImg.src} className={heroBg} alt="" />
      <img src={Text2.src} className={heroText2} alt="" />
    </div>
  );
};

export default HeroImage;
