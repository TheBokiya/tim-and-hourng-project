import React from "react";
import CoverImg from "../images/img-cover.png";
import Animate from "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = () => (
  <div>
    <Header></Header>
    <div className="mt-28">
      <img
        className="object-cover h-3/4 w-full animate__animated animate__fadeIn animate__slow"
        src={CoverImg}
      ></img>
      <Layout>
        <div className="animate__animated animate__fadeIn animate__slow">
          <h1 className="py-10 flex justify-center uppercase tracking-wide text-navy font-sans font-black">
            Welcome to our wedding site
          </h1>
          <p>
            This site contains all the information you need to know about our
            wedding and of course, our backstory. We also would like to use this
            site as a journal to document our journey leading up to the wedding.
          </p>
          <p>
            For guests traveling from abroad, we hope you find this site
            particular useful in helping you navigate the busy city of Phnom
            Penh. Please click here to read more information about the city.
          </p>
          <p>
            Last but not least, thank you for checking out our wedding site. We
            do sincerely thank you for making the time to attend our wedding.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum ut massa consequat cursus. Nulla scelerisque elit in tempor
            tristique. Proin feugiat nulla eu egestas congue. Ut nec quam lorem.
            Duis ornare orci ut ipsum iaculis commodo. Aliquam sed arcu a risus
            pretium pellentesque. Duis rutrum, ligula rhoncus finibus egestas,
            neque felis pretium velit, vel varius ligula mauris et est. Aliquam
            volutpat elit id quam fringilla, pulvinar malesuada quam posuere.
            Donec faucibus egestas est quis aliquet. Vestibulum vitae tellus
            sollicitudin, hendrerit risus vitae, varius diam. Suspendisse rutrum
            eu tortor et tristique. Praesent tempor convallis sagittis. Aliquam
            magna purus, accumsan et ante ut, iaculis tempor urna. Nam eu odio
            ut orci gravida mollis et a orci. Etiam quis hendrerit erat, sit
            amet tristique lectus. Ut molestie suscipit justo, et ornare est
            porta in. Phasellus ac massa dignissim, consectetur dui ut,
            tristique nisi. Praesent diam leo, tempor id sodales vel, sodales
            aliquet quam. Vivamus convallis et nibh in tincidunt. Mauris rhoncus
            risus vitae elit venenatis gravida. Vestibulum in arcu non nisi
            maximus finibus eu in ex. Vivamus eget lacus ex. Cras semper dictum
            ipsum ac eleifend. Nulla et posuere eros. Suspendisse gravida dolor
            eu ullamcorper pharetra. Pellentesque non ipsum vel erat pharetra
            finibus vitae non leo. Cras laoreet tincidunt metus eu accumsan.
            Nunc eget dui ipsum. Etiam lorem arcu, efficitur quis lectus in,
            iaculis tincidunt neque. Nulla facilisi. Proin tristique vitae ante
            id dignissim. Sed vel sem sodales, bibendum leo nec, sodales erat.
            Praesent tincidunt, nisl quis lobortis pulvinar, felis ante
            malesuada elit, in faucibus ante neque in nibh. Sed blandit quis est
            et hendrerit. Sed congue iaculis est ac aliquam. Proin nisi ligula,
            cursus at velit ac, auctor pellentesque est. Suspendisse eget rutrum
            est. Sed luctus urna vel libero porta efficitur. Sed non volutpat
            dui. Phasellus sem ex, bibendum nec imperdiet sed, cursus id elit.
            Sed suscipit orci sit amet dictum egestas. Pellentesque id aliquet
            enim. Ut mattis porta odio, non interdum quam dictum vitae. Duis
            sodales convallis eros eu porttitor. Mauris malesuada tincidunt
            urna. Aliquam in molestie risus. Nam eros sapien, dapibus vel leo
            nec, lacinia vestibulum nibh. Quisque eget venenatis mi. Sed
            eleifend dui ac luctus egestas. Duis massa felis, efficitur a
            ultricies ut, convallis sed mauris. Nulla sem lectus, iaculis non
            egestas in, vulputate iaculis elit. Vivamus malesuada risus egestas
            feugiat vulputate. Aenean tempor viverra turpis.
          </p>
        </div>
      </Layout>
    </div>
  </div>
);

export default IndexPage;
