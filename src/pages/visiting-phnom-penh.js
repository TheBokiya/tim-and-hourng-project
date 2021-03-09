import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/pro-light-svg-icons";

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

const VisingPhnomPenhPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 sm:mt-40 animate__animated animate__fadeIn">
        <div className="static h-1/3 overflow-y-hidden">
          <StaticImage
            src="../images/img-phnom-penh.jpg"
            alt="phnom-penh-cover"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </div>
      <Layout>
        <div className="py-10">
          <h1 className="text-primary text-center uppercase tracking-wide text-navy font-sans text-6xl font-black">
            Phnom Penh
          </h1>
          <h5 className="text-center uppercase text-gray-300">Pearl of Asia</h5>
          <hr className="my-5" />
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
        <div className="py-3">
          <h2 className="text-gold text-4xl">1. Getting Here</h2>
          <p>
            Depending on your nationality, you may not need to have a tourist
            visa. Please check with us if you are unsure whether to get a visa
            or not. If you need a visa, you can simply get visa on arrival or
            e-visa prior to your flight. Single entry visa for tourist costs 30
            USD, valid for 30 days. You can check the government's{" "}
            <a href="https://www.evisa.gov.kh/" target="_blank">
              website
              <FontAwesomeIcon icon={faExternalLink} className="mx-1 text-xs" />
            </a>
            for more information about e-visa.
          </p>
          <p>
            The best way to come to Phnom Penh is by plane through Phnom Penh
            International Airport, located about 10 KM from the city. The most
            convenient and fastest way to get into the city is by taxi which
            costs between 9 - 15 USD. Other cheaper options include:
          </p>
          <ul className="list-disc list-inside mt-5">
            <li>
              Remorque or Cambodian "tuk tuk" | 7 - 12 USD | Quite popular among
              the locals and tourists
            </li>
            <li>City Bus | ~0.40 USD | Could be slow</li>
            <li>Shuttle Train | ~30 mins to the city center</li>
          </ul>
        </div>
        <div className="py-3">
          <h2 className="text-gold text-4xl">2. Currencies</h2>
          <p>
            Cambodia uses two currencies, US Dollars(USD) and Khmer Riel(KHR).
            It can be confusing at first however, once you know the conversion
            rate, you should be good to go. 1 USD converts to about 4,000 KHR.
            You can use either currency while you're in Cambodia however, we do
            not use US coins here. So if you give 10 USD to buy an item that
            costs 9.50 USD, they will give you back your change in KHR of 2,000.
          </p>
          <p>
            A lot of places also accept cashless payment, so you can use your
            credit/debit cards in majority of the big stores here.
          </p>
        </div>
        <div className="py-3">
          <h2 className="text-gold text-4xl">3. Accomodations</h2>
          <p>
            There are tons of options to choose from with various price range to
            fit your budget. Below are some of the hotels that we think you're
            going to love.
          </p>
          <div className="relative">
            <StaticImage
              src="../images/img-baitong-hotel.jpg"
              placeholder="blurred"
              alt="baitong-hotel"
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
                          <a
                            href={j.link}
                            target="__blank"
                            className="font-bold italic"
                          >
                            {j.name}
                            <FontAwesomeIcon
                              icon={faExternalLink}
                              className="mx-1 text-xs"
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <p>
            All of the hotels recommended above are around the city center,
            except for <span className="italic">The Bale Phnom Penh</span>. It
            is about 10km from the city center, however it has a very quiet
            surrounding and amazing view of the Mekong river that is definitely
            worth it. Definitely worth checking out for couples who are looking
            to relax while you are in Phnom Penh.
          </p>
        </div>
        <div className="py-3">
          <h2 className="text-gold text-4xl">4. Transportations</h2>
          <p>
            There are different ways you can get around the city with ease. If
            you expect to travel a lot within the city, I recommend you rent out
            a private car for the whole day so you would always have someone
            driving you around throughout the day. If you are looking for a
            quick way to get around, local and international ride sharing apps
            are also available in Phnom Penh. The two most popular ones are{" "}
            <a
              href="https://www.passapptaxis.com/"
              target="_blank"
              className="font-bold italic"
            >
              PassApp
              <FontAwesomeIcon icon={faExternalLink} className="mx-1 text-xs" />
            </a>
            and{" "}
            <a
              href="https://www.grab.com/kh/"
              target="_blank"
              className="font-bold italic"
            >
              Grab
              <FontAwesomeIcon icon={faExternalLink} className="mx-1 text-xs" />
            </a>
            , local and internal respectively. You can pick from Tuk Tuks,
            rickshaws or cars.
          </p>
        </div>
        <div className="py-3">
          <h2 className="text-gold text-4xl">5. Food</h2>
          <p>
            Cambodian food might not be as famous as Vietnamese or Thai food but
            our local cuisine will surprise you. Explosion of flavours combined
            with various textures will sure give you an experiece you cannot
            forget. Below are some of the food that we think you must try while
            you are in Phnom Penh.
          </p>
          <div className="relative">
            <StaticImage
              src="../images/img-baysrop.jpg"
              placeholder="blurred"
              alt="lotcha"
            />
            <div className="absolute bottom-0 left-4">
              <p className="text-xs text-gray-100 italic opacity-50">
                Photo Courtesy of CNN Travel
              </p>
            </div>
          </div>
          <p>
            <span className="text-bold italic">
              Lot Cha (Stir Fried Short Noodles)
            </span>{" "}
            is an absolute must try when you are here. Tim's all-time favourite
            dish. It is his go-to dish. Lot Cha is a stir fried short noodles
            dish which can come with either beef or seafood, and make sure you
            get a crispy fried egg on top. You can eat this at any of the day
            may it be breakfast, lunch, dinner or even in between meals.
          </p>
          <p>
            <span className="text-bold italic">
              Bay Srop (Grilled Pork with Steamed Rice)
            </span>
            , pictured above, is another classic Cambodian dish, usually eaten
            for breakfast. You just cannot go wrong with a plate of steamed rice
            topped with grilled pork.
          </p>
          <div className="relative">
            <StaticImage
              src="../images/img-kuy-teav.jpg"
              placeholder="blurred"
              alt="lotcha"
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
            influenced by the Chinese, usually eaten for breakfast. You can get
            a variety of protein choice to go in your bowl, popular ones include
            pork, beef or seafood.
          </p>
          <div className="relative">
            <StaticImage
              src="../images/img-amok.jpg"
              placeholder="blurred"
              alt="lotcha"
            />
            <div className="absolute bottom-0 left-4">
              <p className="text-xs text-gray-100 italic opacity-50">
                Photo Courtesy of Copy Me That
              </p>
            </div>
          </div>
          <p>
            <span className="text-bold italic">Amok</span> is a very traditional
            Cambodian dish and one of the must try. Some consider this to be the
            national dish of Cambodia, a mixture of egg, coconut milk, fish and
            spices are fixed and steamed. This dish is usually eaten with
            steamed rice to compliment the richness of the dish. This dish is
            usually eaten for lunch or dinner.
          </p>
          <p>
            There are definitely way more dishes that we think you should try
            but we just cannot list them all. We advise you to keep and open
            mind and be more adventerous. If it looks good, eat it!{" "}
            <a
              href="https://edition.cnn.com/travel/article/top-cambodia-foods-intl-hnk/index.html"
              target="_blank"
              className="text-bold italic"
            >
              Here is a list of 30 Cambodian dishes that visitors should try
              from CNN Travel.
              <FontAwesomeIcon icon={faExternalLink} className="mx-1 text-xs" />
            </a>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default VisingPhnomPenhPage;
