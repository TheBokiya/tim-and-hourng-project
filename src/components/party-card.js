import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PartyCard = (props) => {
  return (
    <div
      className="flex flex-col my-16 mx-5 p-5 sm:w-1/2 border-gold border-2"
      data-sal={props.animate}
      data-sal-duration="500"
    >
      <div>
        <h2 className="font-sans uppercase text-white text-center">
          {props.title}
        </h2>
        <div className="flex justify-center my-2">
          <StaticImage
            src="../images/img-hr-ornament.png"
            width={150}
            alt="page ornament"
          />
        </div>
        {props.members.map((item, index) => {
          return (
            <div key={index}>
              <div className="my-10">
                <div className="text-base text-center text-gray-400">
                  {item.title}
                </div>
                <div>
                  <ul>
                    {item.members.map((j, jindex) => {
                      const textSize =
                        item.title === "Groom" || item.title === "Bride"
                          ? "text-3xl text-gold font-bold"
                          : null;
                      return (
                        <li
                          className={
                            "text-center text-xl text-white " + textSize
                          }
                          key={jindex}
                        >
                          {j}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartyCard;
