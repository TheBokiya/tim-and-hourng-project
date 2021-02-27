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
    <div className="h-screen">
      <img className="object-cover h-3/4 w-full" src={CoverImg}></img>
    </div>
  </div>
);

export default IndexPage;
