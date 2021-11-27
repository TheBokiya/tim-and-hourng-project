import React from "react";
import Layout from "../components/layout";
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
import MobilePhoneSegment from "./visiting-phnom-penh/mobile-phone-services";

export const VisitingSegements = [
  {
    title: "Getting Here",
    id: "getting-here",
    component: GettingHereSegment,
  },
  {
    title: "Currencies",
    id: "currencies",
    component: CurrenciesSegment,
  },
  {
    title: "Mobile Services",
    id: "mobile-services",
    component: MobilePhoneSegment,
  },
  {
    title: "Accomodations",
    id: "accomodations",
    component: AccomodationsSegment,
  },
  {
    title: "Transportations",
    id: "transportations",
    component: TransportationsSegment,
  },
  {
    title: "Food",
    id: "food",
    component: FoodSegment,
  },
  {
    title: "Restaurants & Cafés",
    id: "restaurants-and-cafes",
    component: RestaurantsAndCafesSegement,
  },
  {
    title: "Salon Options",
    id: "salon-options",
    component: SalonOptions,
  },
  {
    title: "Attractions",
    id: "attractions",
    component: AttractionSegement,
  },
];

const VisingPhnomPenhPage = () => {
  return (
    <Layout>
      <SEO title="Visiting Phnom Penh" />
      <div className="animate__animated animate__fadeIn">
        <div className="static h-1/3 overflow-y-hidden">
          <StaticImage
            src="../images/visiting-phnom-penh/img-phnom-penh.jpg"
            alt="phnom-penh-cover"
            placeholder="blurred"
            layout="fullWidth"
            className="g:h-mdImg 2xl:h-xlImg"
          />
        </div>
      </div>
      <div className="custom-container">
        <div className="py-10">
          <h1 className="text-primary text-center uppercase tracking-wide text-navy font-sans text-6xl font-black">
            Phnom Penh
          </h1>
          <h5 className="text-center uppercase text-gray-300">Pearl of Asia</h5>
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
            country and enjoy two great seasons per year, dry and rainy season.
            Our wedding takes place during the dry yet cool season of December.
            It is said that this is the best time to visit Cambodia.
          </p>
          <p>
            If you have never been to Cambodia before, you might find the city
            intimidating. However, if you just let yourself have a moment to
            take it all in and to see what the city has to offer, you will be
            amazed and fall in love with this ancient yet modernizing city.
          </p>
          <p>
            Do not worry about coming to Cambodia. We intend to have this page
            served as a guide for all our guests who are coming to Cambodia for
            the first time. We will give you recommendations on places to stay,
            to eat and to see while you're in the city. We will also share with
            you some tips and other must see places if you happen to want to
            explore other parts of Cambodia.
          </p>
        </div>
        {VisitingSegements.map((item, index) => {
          return (
            <div className="py-5" key={index} id={item.id}>
              <h2 className="text-gold text-4xl">{item.title}</h2>
              <item.component />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default VisingPhnomPenhPage;
