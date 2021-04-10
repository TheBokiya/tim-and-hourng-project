import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import SEO from "./seo";
import Header from "../components/header";

const Layout = ({ children }) => {
  const coverImage = getImage("../images/img-cover.png");
  return (
    <div className="flex flex-col justify-between">
      <SEO image={coverImage} title="Tim & Hourng" />
      <Header />
      <div className="mt-20 sm:mt-56">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
