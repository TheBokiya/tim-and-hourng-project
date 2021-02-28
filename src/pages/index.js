import React from "react";
import CoverImg from "../images/img-cover.png";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = () => (
  <div>
    <Header></Header>
    <img className="object-cover h-3/4 w-full" src={CoverImg}></img>
    <Layout>
      <div>
        <h1 className="py-10 flex justify-center uppercase text-navy font-sans text-xl font-black">
          Welcome to our wedding site
        </h1>
        <p>
          This site contains all the information you need to know about our
          wedding and of course, our backstory. We also would like to use this
          site as a journal to document our journey leading up to the wedding.
        </p>
        <p>
          For guests traveling from abroad, we hope you find this site
          particular useful in helping you navigate the busy city of Phnom Penh.
          Please click here to read more information about the city.
        </p>
      </div>
    </Layout>
  </div>
);

export default IndexPage;
