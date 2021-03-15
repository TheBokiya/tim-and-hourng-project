import React from "react";
import PropTypes from "prop-types";
import CoverImage from "../images/img-cover.png";
import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <SEO image={CoverImage} />
      <div className="container mx-auto md:px-16 lg:px-28 xl:px-44">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
