import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Button from "../components/button";
import { StaticImage } from "gatsby-plugin-image";
import { faHotel, faMoon, faSunrise } from "@fortawesome/pro-light-svg-icons";
import {
  BrideSide,
  GroomSide,
  MorningProgram,
  EveningProgram,
} from "../components/constants";
import PartyCard from "../components/party-card";
import ProgramCard from "../components/program-card";
import InfoBlock from "../components/info-block";
import SEO from "../components/seo";

const WeddingPage = () => {
  return (
    <div>
      <SEO title="Wedding" />
      <Header />
      <div className="bg-gray-100 mt-16 sm:mt-44 py-10">
        <h1 className="text-center text-3xl px-5 sm:text-7xl italic text-navy">
          Our Commitment of Love
        </h1>
      </div>
      <div className="h-1/3">
        <StaticImage
          src="../images/wedding/img-sofitel.jpg"
          placeholder="blurred"
          alt="sofitel cover image"
          layout="fullWidth"
          className="animate__animated animate__fadeIn"
        />
      </div>
      <Layout>
        <div className="flex flex-col mx-auto sm:flex-row p-5">
          <InfoBlock
            title="Sofitel Phokeethra"
            time="Phnom Penh"
            icon={faHotel}
          />
          <InfoBlock
            title="Morning Ceremony"
            time="06:00 - 12:00"
            icon={faSunrise}
          />
          <InfoBlock
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
      <div className="bg-navy">
        <Layout>
          <div className="flex flex-col sm:flex-row">
            <PartyCard
              title="Groom's Party"
              members={GroomSide}
              animate="slide-right"
            />
            <PartyCard
              title="Bride's Party"
              members={BrideSide}
              animate="slide-left"
            />
          </div>
        </Layout>
      </div>
      <div className="bg-pattern">
        <Layout>
          <div className="flex justify-center">
            <ProgramCard
              title="Morning Ceremony"
              subtitle="For Families and Close Friends"
              programList={MorningProgram}
            />
          </div>
          <hr className="mx-5" />
          <div className="flex justify-center">
            <ProgramCard
              title="Evening Reception"
              subtitle="all guests"
              programList={EveningProgram}
            />
          </div>
        </Layout>
      </div>
      <div className="bg-gray-100">
        <Layout>
          <div className="flex flex-col py-10 mx-5">
            <h5 className="text-gray-400 text-center">Social Media Tag</h5>
            <h1 className="text-gold text-center text-5xl sm:text-7xl my-5">
              #timandhourng
            </h1>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default WeddingPage;
