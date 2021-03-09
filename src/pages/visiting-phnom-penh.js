import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/pro-light-svg-icons";

const VisingPhnomPenhPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 sm:mt-40 animate__animated animate__fadeIn">
        <div className="static h-1/3 overflow-y-hidden">
          <StaticImage
            src="../images/img-phnom-penh.jpg"
            alt="phnom-penh-cover"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </div>
      <Layout>
        <div className="py-10">
          <h1 className="text-primary text-center uppercase tracking-wide text-navy font-sans text-6xl font-black">
            Phnom Penh
          </h1>
          <h5 className="text-center uppercase text-gray-300">Pearl of Asia</h5>
          <hr className="my-5" />
          <div>
            <p>
              The capital city of Cambodia is located right in the middle of the
              country and enjoy two great seasons per year, dry and rainy
              season. Our wedding takes place during the dry yet cool season of
              December. It is said that this is the best time to visit Cambodia.
            </p>
            <p>
              If you have never been to Cambodia before, you might find the city
              intimidating. However, if you just let yourself have a moment to
              take it all in and to see what the city has to offer, you will be
              amazed and fall in love with this ancient yet modernizing city.
            </p>
            <p>
              Do not worry about coming to Cambodia. We intend to have this page
              served as a guide for all our guests who are coming to Cambodia
              for the first time. We will give you recommendations on places to
              stay, to eat and to see while you're in the city. We will also
              share with you some tips and other must see places if you happen
              to want to explore other parts of Cambodia.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-gold text-4xl">1. Getting Here</h2>
          <p>
            Depending on your nationality, you may not need to have a tourist
            visa. Please check with us if you are unsure whether to get a visa
            or not. If you need a visa, you can simply get visa on arrival or
            e-visa prior to your flight. Single entry visa for tourist costs 30
            USD, valid for 30 days. You can check the government's{" "}
            <a href="https://www.evisa.gov.kh/" target="_blank">
              website
              <FontAwesomeIcon icon={faExternalLink} className="mx-1 text-xs" />
            </a>
            for more information about e-visa.
          </p>
          <p>
            The best way to come to Phnom Penh is by plane through Phnom Penh
            International Airport, located about 10 KM from the city. The most
            convenient and fastest way to get into the city is by taxi which
            costs between 9 - 15 USD. Other cheaper options include:
            <ul className="list-disc list-inside mt-5">
              <li>
                Remorque or Cambodian "tuk tuk" | 7 - 12 USD | Quite popular
                among the locals and tourists
              </li>
              <li>City Bus | ~0.40 USD | Could be slow</li>
              <li>Shuttle Train | ~30 mins to the city center</li>
            </ul>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default VisingPhnomPenhPage;
