import React from "react";
import { startBtn } from "../../styles/Home.module.css";

export default function StartButton({ text }) {
  return (
    <>
      <button className={startBtn}>{text}</button>
    </>
  );
}
