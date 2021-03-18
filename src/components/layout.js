import React from "react";
import PropTypes from "prop-types";
import CoverImage from "../images/img-cover.png";
import SEO from "./seo";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <SEO image={CoverImage} />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
