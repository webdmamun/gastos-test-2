import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { title, aboutFaqContainer } from "../../styles/Home.module.css";
import Question from "../Comps/Question";

const LearnMoreFaq = () => {
  const [q1, setQ1] = useState(true);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);

  return (
    <>
      <div style={{ marginTop: "655px" }}>
        <div className="text-center mt-5">
          <div
            className={title}
            //   style={style}
            // data-aos="zoom-in-up"
            // data-aos-duration="2000"
          >
            FAQ’S
          </div>
        </div>
        <Container
          //   data-aos="fade-up"
          //   data-aos-duration="2000"
          // style={style}
          className="pt-5 pb-5"
        >
          <Question
            //   style={style}
            onClickFaqBtn={() => {
              q1 === true ? setQ1(false) : setQ1(true);
            }}
            textBtn={q1 === true ? "-" : "+"}
            ques="What is Gastos?"
            answer={
              q1 == true
                ? "Gastos is a pre-discounted payment application that helps users to save on every payment they are doing at our providers."
                : ""
            }
          />

          <Question
            onClickFaqBtn={() => {
              q2 === true ? setQ2(false) : setQ2(true);
            }}
            textBtn={q2 === true ? "-" : "+"}
            ques="What is a Gastos Green Card Club?"
            answer={
              q2 == true
                ? "Gastos Green Card Club is an exclusive club for our paid members who enjoy additional benefits of saving and earning on each payment."
                : ""
            }
          />

          <Question
            onClickFaqBtn={() => {
              q3 === true ? setQ3(false) : setQ3(true);
            }}
            textBtn={q3 === true ? "-" : "+"}
            ques="What are the benefits of being a member of the Green Card Club?"
            answer={
              q3 == true
                ? "As a member of the Green Card Club, you not only get instant discounts on every payment but also earn reward points for it"
                : ""
            }
          />

          <Question
            onClickFaqBtn={() => {
              q4 === true ? setQ4(false) : setQ4(true);
            }}
            textBtn={q4 === true ? "-" : "+"}
            ques="Do I avail benefits if I’m not a Gastos Green Card Club member?"
            answer={
              q4 == true
                ? "Yes, by using Gastos as a payment application even not as a member you get reward points but may or may not get discounts on the amount to be paid."
                : ""
            }
          />

          <Question
            onClickFaqBtn={() => {
              q5 === true ? setQ5(false) : setQ5(true);
            }}
            textBtn={q5 === true ? "-" : "+"}
            ques="How do I become a member of the Green Card Club?"
            answer={
              q5 == true
                ? "To become a member of the green card club, firstly you need to download Gastos App where you register yourself and activate your profile and enjoy additional benefits."
                : ""
            }
          />
        </Container>
      </div>
    </>
  );
};

export default LearnMoreFaq;
