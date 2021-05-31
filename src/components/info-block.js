import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoBlock = (props) => {
  return (
    <div className="flex flex-1 flex-col my-3 justify-center">
      <div className="self-center mr-0 mb-5 flex justify-center">
        <FontAwesomeIcon icon={props.icon} className="text-gold text-xl" />
      </div>
      <div className="flex flex-col">
        <h5 className="font-sans uppercase text-center">{props.title}</h5>
        {props.time && (
          <h5 className="font-sans uppercase text-center">{props.time}</h5>
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
