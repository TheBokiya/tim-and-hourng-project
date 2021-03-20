import React from "react";
import Button from "../../components/button";
import ExternalLink from "../../components/external-link";
import { StaticImage } from "gatsby-plugin-image";
import { AttractionList } from "../../components/constants";

const AttractionSegement = () => {
  return (
    <div>
      <div className="relative mt-5">
        <StaticImage
          src="../../images/visiting-phnom-penh/img-museum.jpg"
          placeholder="blurred"
          alt="national museum"
        />
        <div className="absolute bottom-0 left-4">
          <p className="text-xs text-gray-100 italic opacity-50">
            Photo Courtesy of SlickPic
          </p>
        </div>
      </div>
      <p>
        We highly recommend that you spend more than in the city other than
        attending our event. Phnom Penh has a lot to offer especially for first
        time visitors. Here are some of the things to see around the city.
      </p>
      <div className="py-1">
        <ul className="list-disc list-inside">
          {AttractionList.map((item, index) => {
            return (
              <li key={index}>
                <ExternalLink link={item.link} title={item.name} />
              </li>
            );
          })}
        </ul>
      </div>
      <p>
        There are also city tour options for those interested spending a
        full-day or half-day sightseeing.
      </p>
      <div className="my-5 flex justify-center">
        <Button
          title="City Tours in Phnom Penh"
          link="https://www.tripadvisor.com/Attraction_Products-g293940-zfc12075-zfg11873-Phnom_Penh.html"
          style="navy"
          target="_blank"
        />
      </div>
      <hr />
      <p>
        Of course, there are plenty more things to see and do in Phnom Penh. If
        you have more time and would to explore other parts of Cambodia, Siem
        Reap have to be on your destination list.
      </p>
      <div className="relative mt-5">
        <StaticImage
          src="../../images/visiting-phnom-penh/img-angkor-wat.jpg"
          placeholder="blurred"
          alt="national museum"
        />
        <div className="absolute bottom-0 left-4">
          <p className="text-xs text-gray-100 italic opacity-50">
            Photo Courtesy of DanFlyingSolo
          </p>
        </div>
      </div>
      <p>
        A lot of the ancient temples that you read about are located in Siem
        Reap and the most mavelous of all, Angkor Wat. It is the largest
        religious monument in the world by land area covering around 162
        hectares. We highly recommend you spend at least 3 days in Siem Reap to
        see all the popular temples. On top of this, December and January are
        some of the coolest months of the year which is perfect for exploring
        temples.
      </p>
      <p>
        We do hope you find this page useful in helping you pick your
        accomodation and plan your visit. We also hope you would enjoy the city
        as much as our wedding and thank you so much for taking the time to plan
        your schedule in order to attend our wedding. We both hope to see you
        very soon.
      </p>
    </div>
  );
};

export default AttractionSegement;
