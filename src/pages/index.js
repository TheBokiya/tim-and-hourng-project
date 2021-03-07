import React from "react";
import CoverImg from "../images/img-cover.png";
import Animate from "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRingsWedding } from "@fortawesome/pro-light-svg-icons";

const IndexPage = () => (
  <div>
    <Header></Header>
    <div className="mt-28">
      <img
        className="object-cover h-3/5 w-full animate__animated animate__fadeIn"
        src={CoverImg}
      ></img>
      <Layout>
        <div className="animate__animated animate__fadeIn">
          <div className="p-10">
            <h1 className="text-primary flex justify-center uppercase tracking-wide text-navy font-black pb-5">
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
            particular useful in helping you navigate the busy city of Phnom
            Penh. Please click here to read more information about the city.
          </p>
          <p>
            Last but not least, thank you for checking out our wedding site. We
            do sincerely thank you for making the time to attend our wedding.
          </p>
        </div>
      </Layout>
    </div>
  </div>
);

export default IndexPage;
