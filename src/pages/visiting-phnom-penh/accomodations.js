import React from "react";
import Button from "../../components/button";
import ExternalLink from "../../components/external-link";
import { StaticImage } from "gatsby-plugin-image";

const hotelList = [
  {
    level: "Luxury Hotels",
    hotel: [
      {
        name: "Sofitel Phnom Penh Phokeethra",
        link: "https://www.sofitel-phnompenh-phokeethra.com/",
      },
      {
        name: "Hyatt Regency Phnom Penh",
        link:
          "https://www.hyatt.com/en-US/hotel/cambodia/hyatt-regency-phnom-penh/pnhrp",
      },
      {
        name: "Raffles Hotel Le Royal",
        link: "https://www.raffles.com/phnom-penh/",
      },
      {
        name: "The Bale Phnom Penh",
        link: "https://thebalephnompenh.com/",
      },
      {
        name: "NagaWorld",
        link: "https://www.nagaworld.com/",
      },
    ],
  },
  {
    level: "Value Hotels",
    hotel: [
      {
        name: "Baitong Hotel & Resort",
        link: "https://www.baitonghotel.asia/",
      },
      {
        name: "Plantation Urban Resort & Spa",
        link: "https://theplantation.asia/",
      },
      {
        name: "Somerset Norodom Phnom Penh",
        link:
          "https://www.agoda.com/en-ca/somerset-norodom-phnom-penh/hotel/phnom-penh-kh.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2021-06-18&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=USD&isFreeOccSearch=false&tspTypes=-1&los=2&searchrequestid=e3391656-2e10-4464-9c3d-daa567dccf58",
      },
      {
        name: "Pavilion",
        link:
          "https://www.agoda.com/en-ca/pavilion_2/hotel/phnom-penh-kh.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2021-06-18&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=USD&isFreeOccSearch=false&tspTypes=8&los=2&searchrequestid=e3391656-2e10-4464-9c3d-daa567dccf58",
      },
    ],
  },
];

const AccomodationsSegment = () => {
  return (
    <div>
      {" "}
      <p>
        There are tons of options to choose from with various price range to fit
        your budget. Below are some of the hotels that we think you're going to
        love.
      </p>
      <div className="relative">
        <StaticImage
          src="../../images/visiting-phnom-penh/img-baitong-hotel.jpg"
          placeholder="blurred"
          alt="baitong-hotel"
          data-sal="fade"
        />
        <div className="absolute bottom-0 left-4">
          <p className="text-xs text-gray-100 italic opacity-50">
            Photo Courtesy of Baitong Hotel
          </p>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2">
        {hotelList.map((item, index) => {
          return (
            <div className="py-5">
              <h3 key={index}>{item.level}</h3>
              <ul className="list-disc list-inside mt-5">
                {item.hotel.map((j, index) => {
                  return (
                    <li key={index}>
                      <ExternalLink link={j.link} title={j.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <p>
        All of the hotels recommended above are around the city center, except
        for <span className="italic">The Bale Phnom Penh</span>. It is about
        10km from the city center, however it has a very quiet surrounding and
        amazing view of the Mekong river that is definitely worth it. Definitely
        worth checking out for couples who are looking to relax while you are in
        Phnom Penh.
      </p>
      <p>
        Airbnb is also available in the city if that is something you are
        looking for.
      </p>
      <div className="my-5 flex justify-center">
        <Button
          title="Airbnb in Phnom Penh"
          style="navy"
          link="https://www.airbnb.com/s/Phnom-Penh--Cambodia/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=march&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Phnom%20Penh%2C%20Cambodia&place_id=ChIJ42tqxz1RCTERuyW1WugOAZw&source=structured_search_input_header&search_type=autocomplete_click"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default AccomodationsSegment;
