import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConstruction } from "@fortawesome/pro-light-svg-icons";

const ComingSoon = () => {
  return (
    <div className="w-auto py-10 mt-36 sm:mt-72 border-gold border-2">
      <div className="flex justify-center self-center m-5 text-2xl">
        <FontAwesomeIcon icon={faConstruction} className="text-navy" />
      </div>
      <h3 className="flex justify-center text-navy uppercase">Coming Soon</h3>
    </div>
  );
};

export default ComingSoon;
