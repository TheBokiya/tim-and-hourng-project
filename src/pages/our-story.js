import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";
import ComingSoon from "../components/coming-soon";
import Button from "../components/button";

const OurStoryPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-navy px-5 mt-16 sm:mt-44">
        <Layout>
          <div className="bg-white p-4 sm:p-10">
            <h1 className="font-sans uppercase text-4xl">Our Beginning</h1>
            <p className="pt-10">
              If you ask any of us, when did we first see each other? We would
              not be able to answer that. Truth is, we have known each other
              since high school, though we do not know when.
            </p>
            <StaticImage
              src="../images/our-story/img-lantern.png"
              placeholder="blurred"
            />
            <p>
              After years of no communication, it all started with a simple
              friend request on Facebook. The way we connected, it all felt
              natural. There was no awkwardness. We talked non-stop for weeks,
              then I asked her out. She said yes. The rest is history.
            </p>
          </div>
        </Layout>
      </div>
      <Layout>
        <div className="py-20">
          <div className="flex justify-center">
            <h1 className="text-center italic text-4xl">
              I swear I couldn't love you more than I do right now, and yet I
              know I will tomorrow.
            </h1>
          </div>
          <div>
            <p className="font-sans text-xs uppercase text-center text-gray-300">
              Leo Christopher
            </p>
          </div>
          <hr />
        </div>
        <div className="lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <StaticImage
              src="../images/our-story/img-tim.png"
              placeholder="blurred"
            />
          </div>
          <div className="bg-white z-50 p-5 lg:p-10 lg:-ml-20 self-center">
            <h2 className="font-sans uppercase text-gold">Tim</h2>
            <p>
              Waking up everyday, I still cannot belive that we are together. A
              kind, funny and smart girl, MuyHourng never fails to make me
              laugh. She picks me back up when I fall down. She supports and
              challenges me whenever I need an extra push. I cannot wait to
              spend the rest of my life with you.
            </p>
            <p>Je t'aime, MuyHourng.</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default OurStoryPage;
