import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";
import ExternalLink from "../components/external-link";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/button";
import GettingHereSegment from "./visiting-phnom-penh/getting-here";
import CurrenciesSegment from "./visiting-phnom-penh/currencies";
import AccomodationsSegment from "./visiting-phnom-penh/accomodations";
import TransportationsSegment from "./visiting-phnom-penh/transportations";

const attractionList = [
  {
    name: "Tuol Sleng Genocide Museum",
    link:
      "https://www.tripadvisor.com/Attraction_Review-g293940-d324063-Reviews-Tuol_Sleng_Genocide_Museum-Phnom_Penh.html",
  },
  {
    name: "Royal Palace",
    link:
      "https://www.tripadvisor.com/Attraction_Review-g293940-d324064-Reviews-Royal_Palace-Phnom_Penh.html",
  },
  {
    name: "Choeng Ek Genocidal Center",
    link:
      "https://www.tripadvisor.com/Attraction_Review-g293940-d469300-Reviews-Choeung_Ek_Genocidal_Center-Phnom_Penh.html",
  },
  {
    name: "Wat Phnom",
    link:
      "https://www.tripadvisor.com/Attraction_Review-g293940-d469303-Reviews-Wat_Phnom-Phnom_Penh.html",
  },
  {
    name: "National Museum",
    link:
      "https://www.tripadvisor.com/Attraction_Review-g293940-d324624-Reviews-National_Museum-Phnom_Penh.html",
  },
  {
    name: "Central Market",
    link:
      "https://www.tripadvisor.com/Attraction_Review-g293940-d469301-Reviews-Central_Market-Phnom_Penh.html",
  },
  {
    name: "Bassac Lane",
    link:
      "https://www.tripadvisor.com/Attraction_Review-g293940-d10791662-Reviews-Bassac_Lane-Phnom_Penh.html",
  },
];

const VisingPhnomPenhPage = () => {
  return (
    <div>
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
            <hr className="my-5" />
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
            <h2 className="text-gold text-4xl">1. Getting Here</h2>
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
            <p>
              Cambodian food might not be as famous as Vietnamese or Thai food
              but our local cuisine will surprise you. Explosion of flavours
              combined with various textures will sure give you an experiece you
              cannot forget. Below are some of the food that we think you must
              try while you are in Phnom Penh.
            </p>
            <p>
              <span className="text-bold italic">
                Lot Cha (Stir Fried Short Noodles)
              </span>{" "}
              is an absolute must try when you are here. Tim's all-time
              favourite dish. It is his go-to dish. Lot Cha is a stir fried
              short noodles dish which can come with either beef or seafood, and
              make sure you get a crispy fried egg on top. You can eat this at
              any of the day may it be breakfast, lunch, dinner or even in
              between meals.
            </p>
            <div className="relative">
              <StaticImage
                src="../images/visiting-phnom-penh/img-baysrop.jpg"
                placeholder="blurred"
                alt="lotcha"
                data-sal="fade"
              />
              <div className="absolute bottom-0 left-4">
                <p className="text-xs text-gray-100 italic opacity-50">
                  Photo Courtesy of CNN Travel
                </p>
              </div>
            </div>
            <p>
              <span className="text-bold italic">
                Bay Srop (Grilled Pork with Steamed Rice)
              </span>
              , pictured above, is another classic Cambodian dish, usually eaten
              for breakfast. You just cannot go wrong with a plate of steamed
              rice topped with grilled pork.
            </p>
            <div className="relative">
              <StaticImage
                src="../images/visiting-phnom-penh/img-kuy-teav.jpg"
                placeholder="blurred"
                alt="lotcha"
                data-sal="fade"
              />
              <div className="absolute bottom-0 left-4">
                <p className="text-xs text-gray-100 italic opacity-50">
                  Photo Courtesy of Copy Me That
                </p>
              </div>
            </div>
            <p>
              <span className="text-bold italic">Kuy Teav (Noodle Soup)</span>,
              pictured above, is a popular Cambodian noodle soup, heavily
              influenced by the Chinese, usually eaten for breakfast. You can
              get a variety of protein choice to go in your bowl, popular ones
              include pork, beef or seafood.
            </p>
            <div className="relative">
              <StaticImage
                src="../images/visiting-phnom-penh/img-amok.jpg"
                placeholder="blurred"
                alt="lotcha"
                data-sal="fade"
              />
              <div className="absolute bottom-0 left-4">
                <p className="text-xs text-gray-100 italic opacity-50">
                  Photo Courtesy of Copy Me That
                </p>
              </div>
            </div>
            <p>
              <span className="text-bold italic">Amok</span> is a very
              traditional Cambodian dish and one of the must try. Some consider
              this to be the national dish of Cambodia, a mixture of egg,
              coconut milk, fish and spices are fixed and steamed. This dish is
              usually eaten with steamed rice to compliment the richness of the
              dish. This dish is usually eaten for lunch or dinner.
            </p>
            <p>
              There are definitely way more dishes that we think you should try
              but we just cannot list them all. We advise you to keep and open
              mind and be more adventerous. If it looks good, eat it!
            </p>
            <div className="flex justify-center my-5">
              <Button
                title="30 Cambodian Dishes to Try"
                style="navy"
                link="https://edition.cnn.com/travel/article/top-cambodia-foods-intl-hnk/index.html"
                target="_blank"
              />
            </div>
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">6. Restaurants &amp; Cafés</h2>
            <p>
              Since you now know what dishes to try, we want to recommend you
              popular eats among locals and tourists.
            </p>
            <p>
              <ExternalLink
                title="Malis Restaurant"
                link="https://www.malis-restaurant.com/phnompenh/"
              />
              is a fine-dining restaurant specialize in tradtional Cambodian
              food owned by Cambodia's Master Chef, Luu Meng. They have two
              locations, one in Phnom Penh and another one in Siem Reap.
            </p>
            <p>
              <ExternalLink
                title="One More Restaurant"
                link="https://www.onemorerestaurant.com/"
              />{" "}
              is another restaurant serving up traditional Cambodian dishes.
              This restaurant is a more affordable option if you do not want to
              go for fine-dining. At the end of the day, Cambodian food is
              supposed to be cheap and accessible for everyone.
            </p>
            <p>
              <ExternalLink
                title="Romdeng"
                link="https://www.tripadvisor.com/Restaurant_Review-g293940-d1217419-Reviews-Romdeng-Phnom_Penh.html"
              />{" "}
              is a popular spot for tourists wanting to sample local cuisine.
              This restaurant serves vegeterian, vegan and glutent free options
              as well.
            </p>
            <p>
              <ExternalLink
                title="Brown Coffee"
                link="https://www.browncoffee.com.kh/"
              />{" "}
              is a local coffee chain famous among locals and expats. You can
              find Brown Coffee shops all around the city. If you enter a mall,
              there is a good chain that there is a Brown Coffee shop in that
              mall.
            </p>
            <p>
              We've only recommended top restaurants that serve up traditional
              Cambodian dishes. There are definitely other options if you want
              to try other cuisines. And of course, we have Starbucks, Carls
              Jr., Dominoes and Burger King etc. Except for McDonald's. They are
              not here yet.
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
          <div className="py-3">
            <h2 className="text-gold text-4xl">7. Salon Options</h2>
            <p>
              We know it can be stressful to find a good salon in a foreign
              country. We want to recommend you a few salons that can help you
              look your finest for our event.
            </p>
            <p>
              <ExternalLink
                link="https://www.facebook.com/LUCKY-SALON-Cambodia-280393978778604/"
                title="Lucky Salon"
              />{" "}
              has multiple locations through out the city. They're usually
              located inside shopping malls, including Exchange Square and TK
              Avenue, so it is easy to find them.
            </p>
            <p>
              <ExternalLink
                link="https://www.facebook.com/tulipsalonnnailspa/"
                title="Tulip Salon &amp; Nail Spa"
              />{" "}
              also has multiple locations through out the city. They can be
              found in Aeon Mall Sen Sok and Noro Mall.
            </p>
            <p>
              <ExternalLink
                link="https://www.facebook.com/msalonph"
                title="M Salon &amp; Spa"
              />{" "}
              is our family-owned salon which all of our family members have
              visited frequently as well. However, it is located a bit further
              away from the city center. So if you plan to come here, do make
              sure to give yourself plenty of time to account for the traffic.
            </p>
            <p>
              <ExternalLink
                link="https://www.facebook.com/Cindy-II-NK-salon-270546779801211"
                title="Cindy Salon"
              />{" "}
              is another famous salon in Phnom Penh. They are located in Boeng
              Keng Kang 1 (BKK1) area.
            </p>
          </div>
          <div className="py-3">
            <h2 className="text-gold text-4xl">8. Attractions</h2>
            <div className="relative mt-5">
              <StaticImage
                src="../images/visiting-phnom-penh/img-museum.jpg"
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
              We highly recommend that you spend more than in the city other
              than attending our event. Phnom Penh has a lot to offer especially
              for first time visitors. Here are some of the things to see around
              the city.
            </p>
            <div className="py-1">
              {" "}
              <ul className="list-disc list-inside">
                {attractionList.map((item, index) => {
                  return (
                    <li key={index}>
                      <ExternalLink link={item.link} title={item.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
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
          <div className="py-3">
            <p>
              Of course, there are plenty more things to see and do in Phnom
              Penh. If you have more time and would to explore other parts of
              Cambodia, Siem Reap have to be on your destination list.
            </p>
            <div className="relative mt-5">
              <StaticImage
                src="../images/visiting-phnom-penh/img-angkor-wat.jpg"
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
              A lot of the ancient temples that you read about are located in
              Siem Reap and the most mavelous of all, Angkor Wat. It is the
              largest religious monument in the world by land area covering
              around 162 hectares. We highly recommend you spend at least 3 days
              in Siem Reap to see all the popular temples. On top of this,
              December and January are some of the coolest months of the year
              which is perfect for exploring temples.
            </p>
            <p>
              We do hope you find this page useful in helping you pick your
              accomodation and plan your visit. We also hope you would enjoy the
              city as much as our wedding and thank you so much for taking the
              time to plan your schedule in order to attend our wedding. We both
              hope to see you very soon.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VisingPhnomPenhPage;
