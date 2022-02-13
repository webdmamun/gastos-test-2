import React from "react";
import { faqButton } from "../../styles/Home.module.css";

export default function FaqButton({
  text,
  onClick,
  faqtext = { color: "#2D796D", border: "#2D796D solid 1px" },
}) {
  return (
    <div className={faqButton} style={faqtext} onClick={onClick}>
      {text}
    </div>
  );
}
