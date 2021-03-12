import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = (props) => {
  let buttonStyle = "";

  if (props.style === "gold") {
    buttonStyle = "border-gold text-gold hover:bg-gold hover:text-white";
  } else if (props.style === "navy") {
    buttonStyle = "border-navy text-navy hover:bg-navy hover:text-white";
  } else if (props.style === "white") {
    buttonStyle = "border-white text-white hover:bg-white hover:text-navy";
  }

  return (
    <a
      href={props.link}
      target={props.target ? props.target : null}
      className={
        "text-xs tracking-widest font-semibold font-sans no-underline uppercase border-2 px-12 py-5 rounded-none transition duration-300 " +
        buttonStyle
      }
    >
      {props.title}
    </a>
  );
};

export default Button;
