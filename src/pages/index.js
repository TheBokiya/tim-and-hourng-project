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
        <h1 className="py-10 flex justify-center uppercase tracking-widest text-navy font-black">
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
        <p>
          Last but not least, thank you for checking out our wedding site. We do
          sincerely thank you for making the time to attend our wedding.
        </p>
      </div>
    </Layout>
  </div>
);

export default IndexPage;
