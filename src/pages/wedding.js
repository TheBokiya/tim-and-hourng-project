import React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import { StaticImage } from "gatsby-plugin-image";
import {
  faCalendar,
  faHotel,
  faSunrise,
} from "@fortawesome/pro-light-svg-icons";
import { BrideSide, GroomSide, MorningProgram } from "../components/constants";
import PartyCard from "../components/party-card";
import ProgramCard from "../components/program-card";
import InfoBlock from "../components/info-block";
import SEO from "../components/seo";

const WeddingPage = () => {
  return (
    <Layout>
      <SEO title="Wedding" />
      <div className="bg-gray-100 py-10">
        <h1 className="text-center text-3xl px-5 sm:text-7xl italic text-navy">
          Our Commitment to Love
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
      <div className="custom-container">
        <div className="my-12">
          <p>
            Due to the current Covid situation in Cambodia, we have decided to
            postpone the evening reception to a later date next year. We will
            have a small family-only ceremony in the morning on December 26th,
            2021.
          </p>
          <p>
            We hope that by postponing the evening reception to next year, many
            of our friends abroad can join the wedding without having to go
            through mandatory quarantine. We sincerely apologize for not being
            able to invite our close friends to the morning ceremony due to
            restrictions.
          </p>
        </div>
        <div className="flex flex-col mx-auto sm:flex-row py-5">
          <InfoBlock
            title="Phokeethra Sky (12th Floor)"
            time="Sofitel Phnom Penh Phokeethra"
            icon={faHotel}
          />
          <InfoBlock
            title="Save The Date"
            time="December 26, 2021"
            icon={faCalendar}
          />
          <InfoBlock
            title="Morning Ceremony"
            time="06:30 - 12:00"
            icon={faSunrise}
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
      </div>
      <div className="bg-navy">
        <div className="custom-container">
          <div className="flex flex-col sm:flex-row justify-center">
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
        </div>
      </div>
      <div className="bg-pattern">
        <div className="custom-container">
          <div className="flex justify-center">
            <ProgramCard
              title="Morning Ceremony"
              subtitle="For Families and Close Friends"
              programList={MorningProgram}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="custom-container">
          <div className="flex flex-col py-10">
            <h5 className="text-gray-400 text-center">Social Media Tag</h5>
            <h1 className="text-gold text-center text-5xl sm:text-7xl my-5">
              #timandhourng
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WeddingPage;
