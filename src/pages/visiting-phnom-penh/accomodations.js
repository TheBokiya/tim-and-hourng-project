import React from "react";
import Button from "../../components/button";
import ExternalLink from "../../components/external-link";
import { StaticImage } from "gatsby-plugin-image";
import { HotelList } from "../../components/constants";

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
        {HotelList.map((item, index) => {
          return (
            <div className="py-5" key={index}>
              <h3>{item.level}</h3>
              <ul className="list-disc list-inside mt-5">
                {item.hotel.map((j, jindex) => {
                  return (
                    <li key={jindex}>
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
