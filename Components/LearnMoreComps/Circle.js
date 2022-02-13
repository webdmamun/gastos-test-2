import Image from "next/image";

import { circleShops } from "../../styles/Learnmore.module.css";
import shopImage from "../../pictures/learnMoreCompo/circleGroupMin.png";

export default function Circle() {
  return (
    <div className={circleShops}>
      <Image src={shopImage} />
    </div>
  );
}
