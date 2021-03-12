import React from "react";
import ExternalLink from "../../components/external-link";

const TransportationsSegment = () => {
  return (
    <div>
      <p>
        There are different ways you can get around the city with ease. If you
        expect to travel a lot within the city, I recommend you rent out a
        private car for the whole day so you would always have someone driving
        you around throughout the day. If you are looking for a quick way to get
        around, local and international ride sharing apps are also available in
        Phnom Penh. The two most popular ones are{" "}
        <ExternalLink link="https://www.passapptaxis.com/" title="PassApp" />
        and <ExternalLink link="https://www.grab.com/kh/" title="Grab" />, local
        and internal respectively. You can pick from Tuk Tuks, rickshaws or
        cars.
      </p>
      <p>
        We also have public buses running around the city. Sadly, our public
        transportation is not great. The buses are slow and not punctual so we
        advise against it.
      </p>
    </div>
  );
};

export default TransportationsSegment;
