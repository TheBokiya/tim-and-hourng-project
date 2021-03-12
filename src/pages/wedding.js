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
          alt="sofitel cover image"
        />
      </div>
      <Layout>
        <div className="flex p-5">
          <div className="flex-1 grid justify-items-center">
            <FontAwesomeIcon
              icon={faHotel}
              className="text-gold text-xl mb-5"
            />
            <h5 className="font-sans uppercase text-center">
              Sofitel Phnom Penh Phokeethra
            </h5>
          </div>
          <hr width="1" size="500" className="inline-block" />
          <div className="flex-1 grid justify-items-center">
            <FontAwesomeIcon
              icon={faSunrise}
              className="text-gold text-xl mb-5"
            />
            <h5 className="font-sans uppercase text-center">
              Morning Ceremony <br /> 06:00 - 12:00
            </h5>
          </div>
          <div className="flex-1 grid justify-items-center">
            <FontAwesomeIcon icon={faMoon} className="text-gold text-xl mb-5" />
            <h5 className="font-sans uppercase text-center">
              Evening Reception <br /> 17:30 - 22:00
            </h5>
          </div>
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
                <li>
                  <div className="py-3 grid grid-cols-2 gap-10">
                    <span className="text-2xl text-right">{item.time}</span>
                    <span className="text-2xl text-left">{item.program}</span>
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
