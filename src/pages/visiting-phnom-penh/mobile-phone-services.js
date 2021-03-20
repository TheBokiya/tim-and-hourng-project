import React from "react";
import ExternalLink from "../../components/external-link";

const MobilePhoneSegment = () => {
  return (
    <div>
      <p>
        It's generally a good idea to get a sim-card at the airport right after
        you land. The two major operators are{" "}
        <ExternalLink
          title="Smart"
          link="https://www.smart.com.kh/get-smart/plans/traveller-sim/"
        />{" "}
        and{" "}
        <ExternalLink
          title="Cellcard"
          link="https://www.cellcard.com.kh/en/international-services/tourist-sim-pack/"
        />
        . Generally, people only use pre-paid plans in Cambodia and it is
        relatively cheap.
      </p>
      <p>
        If you plan to stay here for 2 weeks, we recommend you getting a 5 USD
        sim-card from Smart which gives you 35GB of data, unlimited calls and
        texts.
      </p>
    </div>
  );
};

export default MobilePhoneSegment;
