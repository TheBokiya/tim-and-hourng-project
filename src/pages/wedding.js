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

const EveningProgram = [
  {
    time: "17:30 - 18:30",
    program: "Guests Arrival",
  },
  {
    time: "18:30 - 18:45",
    program: "Bride Walks Down the Aisle",
  },
  {
    time: "18:45 - 19:00",
    program: "Speech from Parents and the couple",
  },
  {
    time: "19:00 - 19:05",
    program: "Exchange of Vows",
  },
  {
    time: "19:05 - 19:10",
    program: "First Dance",
  },
  {
    time: "19:10 - 19:15",
    program: "Champagne Toast",
  },
  {
    time: "19:15 - 20:15",
    program: "Dinner",
  },
  {
    time: "20:15 - 20:30",
    program: "Cake Cutting",
  },
  {
    time: "20:30 - Late",
    program: "Dancing",
  },
];

const EventDetailComponent = (props) => {
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

const ProgramComponent = (props) => {
  return (
    <div>
      <h2 className="text-gold font-sans text-3xl uppercase text-center mt-10">
        {props.title}
      </h2>
      <p className="text-gray-400 text-center text-xs mb-5 capitalize">
        {props.subtitle}
      </p>
      <ul>
        {props.programList.map((item, index) => {
          return (
            <li key={index}>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
                <span className="text-base text-center sm:text-right text-gray-400 self-center">
                  {item.time}
                </span>
                <span className="text-xl text-center sm:text-left self-center capitalize">
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
          <EventDetailComponent
            title="Sofitel Phokeethra"
            time="Phnom Penh"
            icon={faHotel}
          />
          <EventDetailComponent
            title="Morning Ceremony"
            time="06:00 - 12:00"
            icon={faSunrise}
          />
          <EventDetailComponent
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
          <ProgramComponent
            title="Morning Ceremony"
            subtitle="For Families and Close Friends"
            programList={MorningProgram}
          />
          <hr className="my-10" />
          <ProgramComponent
            title="Evening Reception"
            subtitle="all guests"
            programList={EveningProgram}
          />
        </Layout>
      </div>
    </div>
  );
};

export default WeddingPage;
