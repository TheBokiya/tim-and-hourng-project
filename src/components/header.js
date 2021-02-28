import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const menuItems = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Pre-Wedding",
    link: "/pre-wedding",
  },
  {
    page: "Events",
    link: "/events",
  },
  {
    page: "Visiting Phnom Penh",
    link: "/visiting-phnom-penh",
  },
  {
    page: "Our Story",
    link: "/our-story",
  },
];

const Header = ({ siteTitle }) => (
  <header className="flex flex-col p-5 border-b-4 border-navy">
    <div className="flex flex-col pb-6">
      <h1 className="text-gray-600 text-3xl flex justify-center">
        Tim &amp; MuyHourng
      </h1>
      <h5 className="flex justify-center text-xs py-3 tracking-widest font-sans uppercase text-gray-300">
        Phnom Penh | 2021
      </h5>
    </div>
    <div className="flex justify-center">
      {menuItems.map((item, index) => {
        return (
          <Link
            to={item.link}
            key={index}
            className="mx-10 text-navy no-underline font-sans uppercase text-xs hover:underline tracking-widest font-medium"
          >
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
