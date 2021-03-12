import React from "react";
import Button from "../../components/button";
import ExternalLink from "../../components/external-link";

const RestaurantsAndCafesSegement = () => {
  return (
    <div>
      <p>
        Since you now know what dishes to try, we want to recommend you popular
        eats among locals and tourists.
      </p>
      <p>
        <ExternalLink
          title="Malis Restaurant"
          link="https://www.malis-restaurant.com/phnompenh/"
        />
        is a fine-dining restaurant specialize in tradtional Cambodian food
        owned by Cambodia's Master Chef, Luu Meng. They have two locations, one
        in Phnom Penh and another one in Siem Reap.
      </p>
      <p>
        <ExternalLink
          title="One More Restaurant"
          link="https://www.onemorerestaurant.com/"
        />{" "}
        is another restaurant serving up traditional Cambodian dishes. This
        restaurant is a more affordable option if you do not want to go for
        fine-dining. At the end of the day, Cambodian food is supposed to be
        cheap and accessible for everyone.
      </p>
      <p>
        <ExternalLink
          title="Romdeng"
          link="https://www.tripadvisor.com/Restaurant_Review-g293940-d1217419-Reviews-Romdeng-Phnom_Penh.html"
        />{" "}
        is a popular spot for tourists wanting to sample local cuisine. This
        restaurant serves vegeterian, vegan and glutent free options as well.
      </p>
      <p>
        <ExternalLink
          title="Brown Coffee"
          link="https://www.browncoffee.com.kh/"
        />{" "}
        is a local coffee chain famous among locals and expats. You can find
        Brown Coffee shops all around the city. If you enter a mall, there is a
        good chain that there is a Brown Coffee shop in that mall.
      </p>
      <p>
        We've only recommended top restaurants that serve up traditional
        Cambodian dishes. There are definitely other options if you want to try
        other cuisines. And of course, we have Starbucks, Carls Jr., Dominoes
        and Burger King etc. Except for McDonald's. They are not here yet.
      </p>
      <div className="my-5 flex justify-center">
        <Button
          title="Restaurants in Phnom Penh"
          link="https://www.tripadvisor.com/Restaurants-g293940-Phnom_Penh.html"
          style="navy"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default RestaurantsAndCafesSegement;
