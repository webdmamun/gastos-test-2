import { questionText, hrBorder, ansText } from "../../styles/Home.module.css";
import FaqButton from "./FaqButton";

export default function Question({
  answer,
  ques,
  textBtn,
  onClickFaqBtn,
  style = { color: "#FFFFFF" },
}) {
  return (
    <>
      <div>
        <div className="d-flex">
          <div className="flex-grow-1" style={style}>
            <span className={questionText}>{ques}</span>
            <div className={ansText}>{answer}</div>
          </div>
          <div className="bd-highlight">
            <FaqButton text={textBtn} onClick={onClickFaqBtn} />
          </div>
        </div>
        <hr className={hrBorder} />
      </div>
    </>
  );
}
