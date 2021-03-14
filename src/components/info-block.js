import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoBlock = (props) => {
  return (
    <div className="flex sm:flex-1 sm:flex-col my-3 justify-center">
      <div className="self-center mr-5 sm:mr-0 sm:mb-5 sm:flex sm:justify-center">
        <FontAwesomeIcon icon={props.icon} className="text-gold text-xl" />
      </div>
      <div className="flex flex-col">
        <h5 className="font-sans uppercase sm:text-center">{props.title}</h5>
        {props.time && (
          <h5 className="font-sans uppercase sm:text-center">{props.time}</h5>
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
