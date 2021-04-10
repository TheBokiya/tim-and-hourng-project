import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProgramCard = (props) => {
  return (
    <div
      className="justify-center sm:flex-shrink w-full sm:w-1/2 bg-white py-10 px-5 my-16 border-gold border-2"
      data-sal="slide-up"
      data-sal-duration="500"
    >
      <h2 className="text-gold font-sans text-2xl uppercase text-center">
        {props.title}
      </h2>
      <p className="text-gray-500 text-center text-xs capitalize">
        {props.subtitle}
      </p>
      <div className="flex justify-center">
        <StaticImage
          src="../images/img-hr-ornament.png"
          width={150}
          alt="page ornament"
        />
      </div>
      <ul className="mt-5">
        {props.programList.map((item, index) => {
          return (
            <li key={index}>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-4">
                <span className="text-base text-center sm:col-start-2 sm:text-left text-gray-500 self-center">
                  {item.time}
                </span>
                <span className="text-xl text-center sm:col-span-2 sm:text-left self-center capitalize">
                  {item.program}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProgramCard;
