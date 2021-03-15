import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";
import GettingHereSegment from "./visiting-phnom-penh/getting-here";
import CurrenciesSegment from "./visiting-phnom-penh/currencies";
import AccomodationsSegment from "./visiting-phnom-penh/accomodations";
import TransportationsSegment from "./visiting-phnom-penh/transportations";
import FoodSegment from "./visiting-phnom-penh/food";
import RestaurantsAndCafesSegement from "./visiting-phnom-penh/restaurants-and-cafes";
import SalonOptions from "./visiting-phnom-penh/salon-options";
import AttractionSegement from "./visiting-phnom-penh/attractions";
import SEO from "../components/seo";

const VisingPhnomPenhPage = () => {
  return (
    <div>
      <SEO title="Visiting Phnom Penh" />
      <Header />
      <div className="mt-16 sm:mt-40 animate__animated animate__fadeIn">
        <div className="static h-1/3 overflow-y-hidden">
          <StaticImage
            src="../images/visiting-phnom-penh/img-phnom-penh.jpg"
            alt="phnom-penh-cover"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </div>
      <Layout>
        <div className="px-5">
          <div className="py-10">
            <h1 className="text-primary text-center uppercase tracking-wide text-navy font-sans text-6xl font-black">
              Phnom Penh
            </h1>
            <h5 className="text-center uppercase text-gray-300">
              Pearl of Asia
            </h5>
            <div className="flex justify-center my-2">
              <StaticImage
                src="../images/img-hr-ornament.png"
                width={300}
                alt="page ornament"
              />
            </div>
          </div>
          <div className="py-3">
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
          <div className="py-3">
            <h2 className="text-gold text-4xl" id="getting-here">
              1. Getting Here
            </h2>
            <GettingHereSegment />
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">2. Currencies</h2>
            <CurrenciesSegment />
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">3. Accomodations</h2>
            <AccomodationsSegment />
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">4. Transportations</h2>
            <TransportationsSegment />
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">5. Food</h2>
            <FoodSegment />
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">6. Restaurants &amp; Cafés</h2>
            <RestaurantsAndCafesSegement />
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">7. Salon Options</h2>
            <SalonOptions />
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">8. Attractions</h2>
            <AttractionSegement />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VisingPhnomPenhPage;
