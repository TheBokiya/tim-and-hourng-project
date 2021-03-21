import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/pro-light-svg-icons";
import { MenuItems, visingPhnomPenhLink } from "../components/constants";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import { VisitingSegements } from "../pages/visiting-phnom-penh";

const Header = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const [menuIsSmall, setMenuIsSmall] = useState(false);

  const handleMouseLeave = () => {
    setDelayHandler(
      setTimeout(() => {
        setDropdownIsOpen(false);
      }, 250)
    );
  };

  const handleMouseOver = () => {
    clearTimeout(delayHandler);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setMenuIsSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header
      className={`fixed top-0 w-screen z-50 bg-white p-5 transition duration-300 ease-in-out ${
        menuIsSmall ? "opacity-95" : "opacity-100"
      }`}
    >
      {/* Mobile Menu */}
      <div className="sm:hidden">
        <div className="flex justify-between">
          <Link to="/" className="no-underline">
            <div className="flex justify-center">
              <StaticImage
                src="../images/img-logo.png"
                alt="logo"
                placeholder="blurred"
                height={30}
              />
            </div>
          </Link>
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => {
              setHamburgerIsOpen(!hamburgerIsOpen);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={(!hamburgerIsOpen ? "block" : "hidden") + " text-navy"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={(hamburgerIsOpen ? "block" : "hidden") + " text-navy"}
            />
          </button>
        </div>
      </div>

      {/* Hamburger menu */}
      <div
        className={
          (hamburgerIsOpen ? "block" : "hidden") +
          " pt-5 sm:flex sm:hidden relative"
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <div className="py-2" key={index}>
              {item.sub ? (
                <div className="py-2">
                  <Link
                    to={item.link}
                    className="header-link"
                    activeClassName="text-gold"
                  >
                    <span>{item.page}</span>
                  </Link>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={
                      "ml-2 transition duration-300 transform " +
                      (dropdownIsOpen ? "-rotate-180 text-gold" : null)
                    }
                    onMouseUp={() => setDropdownIsOpen(!dropdownIsOpen)}
                  />
                  <div
                    className={(dropdownIsOpen ? "block" : "hidden") + " ml-10"}
                  >
                    <ul>
                      {VisitingSegements.map((item, index) => {
                        return (
                          <li
                            className="py-2 font-sans text-xs uppercase tracking-widest"
                            key={index}
                          >
                            <AnchorLink
                              to={visingPhnomPenhLink + "#" + item.id}
                              title={item.title}
                              className="font-sans no-underline text-xs text-navy"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="py-2">
                  <Link
                    to={item.link}
                    key={index}
                    className="header-link"
                    activeClassName="text-gold"
                  >
                    {item.page}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        {!menuIsSmall && (
          <div className="pb-5">
            <Link to="/" className="no-underline">
              <div className="flex justify-center">
                <StaticImage
                  src="../images/img-logo.png"
                  placeholder="blurred"
                  alt="logo"
                  height={100}
                />
              </div>
            </Link>

            <h5 className="flex justify-center text-xs py-3 tracking-widest font-sans uppercase text-gray-300">
              Phnom Penh | 2021
            </h5>
          </div>
        )}
        <div className="flex justify-center">
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                {item.sub ? (
                  <div className="relative">
                    <Link
                      to={item.link}
                      className={
                        "header-link " + (dropdownIsOpen ? "text-gold" : null)
                      }
                      onMouseOver={() => setDropdownIsOpen(true)}
                      onMouseLeave={handleMouseLeave}
                      activeClassName="text-gold"
                    >
                      <span>{item.page}</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={
                          "ml-2 transition duration-300 transform " +
                          (dropdownIsOpen ? "-rotate-180" : null)
                        }
                        onMouseUp={() => setDropdownIsOpen(!dropdownIsOpen)}
                      />
                    </Link>
                    <div
                      className={
                        (dropdownIsOpen ? "block" : "hidden") +
                        " absolute bg-white mt-5 sm:px-10 sm:pb-5"
                      }
                      onMouseOver={handleMouseOver}
                      onMouseLeave={() => setDropdownIsOpen(false)}
                    >
                      <ul>
                        {VisitingSegements.map((item, index) => {
                          return (
                            <li
                              className="py-2 font-sans text-xs uppercase tracking-widest"
                              key={index}
                            >
                              <AnchorLink
                                to={visingPhnomPenhLink + "#" + item.id}
                                title={item.title}
                                className="font-sans no-underline text-xs text-navy"
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    key={index}
                    className="header-link"
                    activeClassName="text-gold"
                  >
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
