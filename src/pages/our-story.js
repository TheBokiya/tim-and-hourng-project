import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/seo";

export const imgQuery = graphql`
  query imgQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "gallery" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 300, height: 300)
          }
          name
        }
      }
    }
  }
`;

const OurStoryPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Our Story" />
      <div className="bg-navy">
        <div className="custom-container">
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
              alt="lantern"
              className="animate__animated animate__fadeIn"
            />
            <p>
              After years of no communication, it all started with a simple
              friend request on Facebook. The way we connected, it all felt
              natural. There was no awkwardness. We talked non-stop for weeks,
              then I asked her out. She said yes. The rest is history.
            </p>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="py-20" data-sal="fade">
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
              alt="tim"
            />
          </div>
          <div
            className="bg-white z-10 p-5 lg:p-8 lg:-ml-20 self-center"
            data-sal="slide-right"
            data-sal-duration="500"
          >
            <h2 className="font-sans uppercase text-gold">Tim</h2>
            <p>
              Waking up everyday, I still cannot belive that we are together. A
              kind, funny and smart girl, MuyHourng never fails to make me
              laugh. She picks me back up when I fall down. She supports and
              challenges me whenever I need an extra push. I cannot wait to
              spend the rest of my life with you.
            </p>
            <p>Je t'aime, Muy Hourng.</p>
          </div>
        </div>
        <div className="mt-32 flex flex-col-reverse lg:grid lg:grid-cols-3">
          <div
            className="bg-white z-10 p-5 lg:p-8 lg:-mr-20 self-center"
            data-sal="slide-right"
            data-sal-duration="500"
          >
            <h2 className="font-sans uppercase text-gold">Hourng</h2>
            <p>
              It all started with an unexpected friend request from a familiar
              face. You came into my life when I wasn’t looking for love. Thank
              you for picking up the pieces and making everything right again.
              Receiving a Good Morning text every morning reminds me how blessed
              i am to be loved and cared by this man.
            </p>
            <p>
              I know you will remain as gentle, loving and caring as you are now
              and always stay by my side no matter the circumstances. I love you
              to the moon and back.
            </p>
            <p>From your clumsy girlfriend.</p>
          </div>
          <div className="lg:col-span-2">
            <StaticImage
              src="../images/our-story/img-muyhourng.png"
              placeholder="blurred"
              alt="muyhourng"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-16">
        <h1 className="font-sans text-6xl text-navy uppercase py-16 mx-5 md:px-16 lg:px-28 xl:px-44">
          Our <br /> memories
        </h1>
        <div className="flex flex-wrap">
          {data.allFile.edges.map((item, index) => {
            const image = getImage(item.node);
            return (
              <GatsbyImage
                key={index}
                image={image}
                alt={item.node.name}
                className="flex-grow w-1/4 sm:w-1/6 m-0.5"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default OurStoryPage;
