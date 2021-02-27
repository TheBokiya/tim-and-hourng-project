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
  <header className="flex justify-center p-5 bg-indigo-900">
    {menuItems.map((item, index) => {
      return (
        <Link
          to={item.link}
          key={index}
          className="mx-5 text-white no-underline"
        >
          {item.page}
        </Link>
      );
    })}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
