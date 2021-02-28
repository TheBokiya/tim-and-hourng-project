import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

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

const Header = ({ siteTitle }) => {
  // const [small, setSmall] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () =>
  //       setSmall(window.pageYOffset > 200)
  //     );
  //   }
  // }, []);

  return (
    <header
      className={
        "fixed top-0 w-screen z-10 border-b-4 border-navy bg-white py-5"
      }
    >
      <div className="pb-6">
        <h1 className="flex justify-center text-gray-600 text-3xl">
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
              className="transition duration-300 ease-in-out mx-10 text-navy no-underline font-sans uppercase text-xs hover:text-gold tracking-widest font-medium"
            >
              {item.page}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
