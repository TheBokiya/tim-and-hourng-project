import React from "react";
import Button from "../../components/button";
import { StaticImage } from "gatsby-plugin-image";

const FoodSegment = () => {
  return (
    <div>
      <p>
        Cambodian food might not be as famous as Vietnamese or Thai food but our
        local cuisine will surprise you. Explosion of flavours combined with
        various textures will sure give you an experiece you cannot forget.
        Below are some of the food that we think you must try while you are in
        Phnom Penh.
      </p>
      <p>
        <span className="text-bold italic">
          Lot Cha (Stir Fried Short Noodles)
        </span>{" "}
        is an absolute must try when you are here. Tim's all-time favourite
        dish. It is his go-to dish. Lot Cha is a stir fried short noodles dish
        which can come with either beef or seafood, and make sure you get a
        crispy fried egg on top. You can eat this at any of the day may it be
        breakfast, lunch, dinner or even in between meals.
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
        , pictured above, is another classic Cambodian dish, usually eaten for
        breakfast. You just cannot go wrong with a plate of steamed rice topped
        with grilled pork.
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
        pictured above, is a popular Cambodian noodle soup, heavily influenced
        by the Chinese, usually eaten for breakfast. You can get a variety of
        protein choice to go in your bowl, popular ones include pork, beef or
        seafood.
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
        <span className="text-bold italic">Amok</span> is a very traditional
        Cambodian dish and one of the must try. Some consider this to be the
        national dish of Cambodia, a mixture of egg, coconut milk, fish and
        spices are fixed and steamed. This dish is usually eaten with steamed
        rice to compliment the richness of the dish. This dish is usually eaten
        for lunch or dinner.
      </p>
      <p>
        There are definitely way more dishes that we think you should try but we
        just cannot list them all. We advise you to keep and open mind and be
        more adventerous. If it looks good, eat it!
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
  );
};

export default FoodSegment;
