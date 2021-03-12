import React from "react";
import ExternalLink from "../../components/external-link";

const SalonOptions = () => {
  return (
    <div>
      <p>
        We know it can be stressful to find a good salon in a foreign country.
        We want to recommend you a few salons that can help you look your finest
        for our event.
      </p>
      <p>
        <ExternalLink
          link="https://www.facebook.com/LUCKY-SALON-Cambodia-280393978778604/"
          title="Lucky Salon"
        />{" "}
        has multiple locations through out the city. They're usually located
        inside shopping malls, including Exchange Square and TK Avenue, so it is
        easy to find them.
      </p>
      <p>
        <ExternalLink
          link="https://www.facebook.com/tulipsalonnnailspa/"
          title="Tulip Salon &amp; Nail Spa"
        />{" "}
        also has multiple locations through out the city. They can be found in
        Aeon Mall Sen Sok and Noro Mall.
      </p>
      <p>
        <ExternalLink
          link="https://www.facebook.com/msalonph"
          title="M Salon &amp; Spa"
        />{" "}
        is our family-owned salon which all of our family members have visited
        frequently as well. However, it is located a bit further away from the
        city center. So if you plan to come here, do make sure to give yourself
        plenty of time to account for the traffic.
      </p>
      <p>
        <ExternalLink
          link="https://www.facebook.com/Cindy-II-NK-salon-270546779801211"
          title="Cindy Salon"
        />{" "}
        is another famous salon in Phnom Penh. They are located in Boeng Keng
        Kang 1 (BKK1) area.
      </p>
    </div>
  );
};

export default SalonOptions;
