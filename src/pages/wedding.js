import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Button from "../components/button";
import { StaticImage } from "gatsby-plugin-image";

const WeddingPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 mt-16 sm:mt-44 py-10">
        <h1 className="text-center text-3xl sm:text-7xl italic text-navy pb-10">
          Our Commitment of Love
        </h1>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="sm:mx-5">
            <Button title="Morning Ceremony" style="navy" />
          </div>
          <div className="sm:mx-5">
            <Button title="Evening Reception" style="navy" />
          </div>
        </div>
      </div>
      <Layout></Layout>
    </div>
  );
};

export default WeddingPage;
