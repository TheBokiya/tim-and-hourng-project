import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/pro-light-svg-icons";
import { MenuItems } from "../components/constants";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const groom = "Tim";
const bride = "Hourng";

const Header = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [small, setSmall] = useState(false);

  const handleMouseLeave = () => {
    setDelayHandler(
      setTimeout(() => {
        setDropdownIsOpen(false);
      }, 500)
    );
  };

  const handleMouseOver = () => {
    clearTimeout(delayHandler);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header
      className={`fixed top-0 w-screen z-50 bg-white p-5 transition duration-300 ease-in-out ${
        small ? "opacity-90" : "opacity-100"
      }`}
    >
      {/* Mobile Menu */}
      <div className="sm:hidden">
        <div className="flex justify-between">
          <h3 className="flex justify-center text-gray-700 uppercase">
            {groom}
            <span className="text-gold text-xs mx-2 self-center title">
              &amp;
            </span>
            {bride}
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

      <div
        className={
          (isOpen ? "block" : "hidden") + " pt-5 sm:flex sm:hidden relative"
        }
      >
        {MenuItems.map((item, index) => {
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

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        {!small && (
          <div className="pb-10">
            <h1 className="flex justify-center text-gray-700 text-5xl uppercase">
              {groom}
              <span className="text-gold text-lg mx-2 self-center title">
                &amp;
              </span>
              {bride}
            </h1>

            <h5 className="flex justify-center text-xs py-3 tracking-widest font-sans uppercase text-gray-300">
              Phnom Penh | 2021
            </h5>
          </div>
        )}
        <div className="flex justify-center">
          {MenuItems.map((item, index) => {
            return (
              <div>
                {item.page === "Visiting Phnom Penh" ? (
                  <div className="relative">
                    <Link
                      to={item.link}
                      className="header-link"
                      onMouseOver={() => setDropdownIsOpen(true)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span>{item.page}</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="ml-2 header-link-icon"
                      />
                    </Link>
                    <div
                      className={
                        (dropdownIsOpen ? "block" : "hidden") +
                        " absolute bg-white mt-5 lg:px-10 lg:pb-5"
                      }
                      onMouseOver={handleMouseOver}
                      onMouseLeave={() => setDropdownIsOpen(false)}
                    >
                      <ul>
                        {item.sub?.map((j, index) => {
                          return (
                            <li className="py-2 font-sans text-xs uppercase tracking-widest">
                              <AnchorLink
                                to={j.anchor}
                                title={j.page}
                                className="font-sans no-underline text-xs text-navy"
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link to={item.link} key={index} className="header-link">
                    {item.page}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
