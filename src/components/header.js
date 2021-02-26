import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const menuItems = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Events",
    link: "/events",
  },
  {
    page: "Our Story",
    link: "/our-story",
  },
];

const Header = ({ siteTitle }) => (
  <header className="sm:flex">
    <div className="flex items-center justify-end p-5">
      {menuItems.map((item, index) => {
        return (
          <Link to={item.link} key={index} className="block sm:inline-block">
            {item.page}
          </Link>
        );
      })}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
