import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/pro-light-svg-icons";

const ExternalLink = (props) => {
  return (
    <a href={props.link} target="_blank" className="text-bold italic">
      {props.title}
      <FontAwesomeIcon icon={faExternalLink} className="mx-1 text-xs" />
    </a>
  );
};

export default ExternalLink;
