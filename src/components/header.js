import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/pro-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/pro-light-svg-icons";

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
    page: "Wedding",
    link: "/wedding",
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
  const [isOpen, setIsOpen] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header
      className={`fixed top-0 w-screen z-10 bg-white p-5 transition duration-300 ease-in-out ${
        small ? "opacity-90" : "opacity-100"
      }`}
    >
      <div className="sm:hidden">
        <div className="flex justify-between">
          <h3 className="flex justify-center text-gray-700 uppercase">
            Bodyka
            <span className="text-gold text-xs mx-2 self-center title">
              &amp;
            </span>
            Muy Hourng
          </h3>
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={(!isOpen ? "block" : "hidden") + " text-navy"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={(isOpen ? "block" : "hidden") + " text-navy"}
            />
          </button>
        </div>
      </div>

      <div className={(isOpen ? "block" : "hidden") + " pt-5 sm:flex relative"}>
        {menuItems.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className="block text-navy text-xs my-5 no-underline tracking-wider font-medium font-sans uppercase"
              activeClassName="text-gold"
            >
              {item.page}
            </Link>
          );
        })}
      </div>

      <div className="hidden sm:block">
        {!small && (
          <div className="pb-10">
            <h1 className="flex justify-center text-gray-700 text-5xl uppercase">
              Bodyka
              <span className="text-gold text-lg mx-2 self-center title">
                &amp;
              </span>
              Muy Hourng
            </h1>

            <h5 className="flex justify-center text-xs py-3 tracking-widest font-sans uppercase text-gray-300">
              Phnom Penh | 2021
            </h5>
          </div>
        )}
        <div className="flex justify-center">
          {menuItems.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className="mx-10 text-navy font-sans uppercase text-xs tracking-widest font-medium no-underline header-link"
                activeClassName="text-gold"
              >
                {item.page}
                {item.page === "Wedding" && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-2 header-link-icon"
                  />
                )}
              </Link>
            );
          })}
        </div>
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
