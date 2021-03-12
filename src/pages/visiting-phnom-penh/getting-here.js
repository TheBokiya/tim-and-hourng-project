import React from "react";
import ExternalLink from "../../components/external-link";

const GettingHereSegment = () => {
  return (
    <div>
      <p>
        Depending on your nationality, you may not need to have a tourist visa.
        Please check with us if you are unsure whether to get a visa or not. If
        you need a visa, you can simply get visa on arrival or e-visa prior to
        your flight. Single entry visa for tourist costs 30 USD, valid for 30
        days. You can check the government's{" "}
        <ExternalLink link="https://www.evisa.gov.kh/" title="website" />
        for more information about e-visa.
      </p>
      <p>
        The best way to come to Phnom Penh is by plane through Phnom Penh
        International Airport, located about 10 KM from the city. If you are
        flying over from Canada, we highly recommend either Cathay Pacific or
        EVA airline. Both airlines have a layover, in Hong Kong for Cathay
        Pacific or Taiwan for EVA airline. The total flying time is generally
        around 15 hours.
      </p>
      <p>
        Once you have landed in Phnom Penh, the most convenient and fastest way
        to get into the city is by taxi which costs between 9 - 15 USD. Other
        cheaper options include:
      </p>
      <ul className="list-disc list-inside mt-5">
        <li>
          Remorque or Cambodian "tuk tuk" | 7 - 12 USD | Quite popular among the
          locals and tourists
        </li>
        <li>City Bus | ~0.40 USD | Could be slow</li>
        <li>Shuttle Train | ~30 mins to the city center</li>
      </ul>
    </div>
  );
};

export default GettingHereSegment;
