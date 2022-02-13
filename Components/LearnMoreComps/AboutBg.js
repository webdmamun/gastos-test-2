import {
  containerBg,
  circleBgTesting,
} from "../../styles/Learnmore.module.css";
import circleGroupMin from "../../pictures/learnMoreCompo/circleGroupMin.png";

const AboutBg = () => {
  return (
    <div className={containerBg} style={{ height: "100em", width: "100%" }}>
      <img className={circleBgTesting} src={circleGroupMin.src} />
    </div>
  );
};

export default AboutBg;
