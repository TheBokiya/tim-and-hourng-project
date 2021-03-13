import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Button from "../components/button";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/pro-solid-svg-icons";
import { faHotel, faMoon, faSunrise } from "@fortawesome/pro-light-svg-icons";

const MorningProgram = [
  {
    time: "07:00 - 07:30",
    program: "Dowry Ceremony",
  },
  {
    time: "07:30 - 08:30",
    program: "Monk Blessing",
  },
  {
    time: "08:30 - 09:00",
    program: "Honoring the Parents",
  },
  {
    time: "09:00 - 09:30",
    program: "Honoring the Ancestors",
  },
  {
    time: "09:30 - 10:00",
    program: "The Passing of Blessings",
  },
  {
    time: "10:30 - 11:00",
    program: "Knot-Tying Ceremony",
  },
];

const BlockDetail = (props) => {
  return (
    <div className="flex sm:flex-1 sm:flex-col my-3 justify-center">
      <div className="sm:flex sm:justify-center">
        <FontAwesomeIcon
          icon={props.icon}
          className="text-gold text-xl self-center mr-5 sm:mr-0 sm:mb-5"
        />
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

const WeddingPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 mt-16 sm:mt-44 py-10">
        <h1 className="text-center text-3xl sm:text-7xl italic text-navy">
          Our Commitment of Love
        </h1>
      </div>
      <div>
        <StaticImage
          src="../images/wedding/img-sofitel.jpg"
          placeholder="blurred"
          layout="fullWidth"
          alt="sofitel cover image"
        />
      </div>
      <Layout>
        <div className="flex flex-col mx-auto sm:flex-row p-5">
          <BlockDetail
            title="Sofitel Phokeethra"
            time="Phnom Penh"
            icon={faHotel}
          />
          <BlockDetail
            title="Morning Ceremony"
            time="06:00 - 12:00"
            icon={faSunrise}
          />
          <BlockDetail
            title="Evening Reception"
            time="17:30 - 22:00"
            icon={faMoon}
          />
        </div>
        <div className="flex justify-center my-10">
          <Button
            title="Google Maps"
            link="https://goo.gl/maps/XcmhJn8Wr4Ybhq9u7"
            style="navy"
            target="_blank"
          />
        </div>
      </Layout>
      <div className="bg-gray-100">
        <Layout>
          <h2 className="text-gold font-sans text-3xl uppercase text-center mt-10">
            Morning Ceremony
          </h2>
          <p className="text-gray-400 text-center text-xs mb-5">
            For Family and Close Friends
          </p>
          <ul>
            {MorningProgram.map((item, index) => {
              return (
                <li key={index}>
                  <div className="p-3 grid grid-cols-2 gap-10">
                    <span className="text-2xl text-right text-gray-400 self-center">
                      {item.time}
                    </span>
                    <span className="text-2xl text-left self-center">
                      {item.program}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Layout>
      </div>
    </div>
  );
};

export default WeddingPage;
