import React from "react";
import PropTypes from "prop-types";
import Image from "../images/img-cover.png";
import SEO from "./seo";
import Header from "../components/header";

const Layout = ({ children, data }) => {
  const coverImage = data.edges.node.childImageSharp;
  console.log(coverImage);
  return (
    <div className="flex flex-col justify-between">
      <SEO title="Tim & Hourng" />
      <Header />
      <div className="mt-20 sm:mt-56">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
