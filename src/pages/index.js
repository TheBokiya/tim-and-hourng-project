import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRingsWedding } from "@fortawesome/pro-light-svg-icons";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 sm:mt-0 animate__animated animate__fadeIn">
        <div className="static max-h-screen h-1/2 overflow-y-hidden">
          <StaticImage
            src="../images/img-cover.png"
            alt="index-cover-image"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hidden 2xl:block absolute inset-x-0 bottom-6 text-white">
            <div class="scroll">
              <button onClick={() => scrollTo("#bottom-page")}>
                <div class="mouse">
                  <div class="wheel"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Layout>
          <div className="py-10">
            <h1 className="text-primary text-center flex justify-center uppercase tracking-wide text-navy font-black pb-5">
              Welcome to our wedding site
            </h1>
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faRingsWedding}
                className="text-gold text-3xl flex"
              />
            </div>
          </div>
          <p>
            This site contains all the information you need to know about our
            wedding and of course, our backstory. We also would like to use this
            site as a journal to document our journey leading up to the wedding.
          </p>
          <p>
            For guests traveling from abroad, we hope you find this site
            particularly useful in helping you navigate the busy city of Phnom
            Penh. Please click <Link to="/visiting-phnom-penh">here</Link> to
            read more information about the city.
          </p>
          <p>
            Last but not least, thank you for checking out our wedding site. We
            do sincerely thank you for making the time to attend our wedding.
          </p>
          <div id="bottom-page"></div>
        </Layout>
      </div>
    </div>
  );
};

export default IndexPage;
