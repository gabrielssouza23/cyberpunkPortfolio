import React, { useEffect } from "react";
import leftButton from "../assets/images/leftButton2.png";
import midButton from "../assets/images/midButton.png";
import mid2Button from "../assets/images/mid2Button.png";
import rightButton from "../assets/images/rightButton.png";

function Buttons() {
  useEffect(() => {
    const imgTag = document.querySelectorAll(".button");
    imgTag.forEach((img) => {
      img.addEventListener("click", () => {
        imgTag.forEach((img) => {
          img.classList.remove("active");
        });
        img.classList.add("active");
      });
    });
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="button-group">
      <img className="button active" src={leftButton} alt="" />
      <img className="button" src={midButton} alt="" />
      <img className="button" src={mid2Button} alt="" />
      <img className="button" src={rightButton} alt="" />
    </div>
  );
}

export default Buttons;
