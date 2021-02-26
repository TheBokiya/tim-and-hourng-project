import React from "react";
import CoverImg from "../images/img-cover.png";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = () => (
  <div>
    <img className="max-w-full" src={CoverImg}></img>
    <Layout>
      <h1 className="py-10 text-6xl text-center text-gray-700">
        Tim & MuyHourng
      </h1>
      <h4 className="text-center text-gray-500">
        at Sofitel Phokeetra Phnom Penh, 5:30 PM
      </h4>
    </Layout>
  </div>
);

export default IndexPage;
