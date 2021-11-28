import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Gallery from "@browniebroke/gatsby-image-gallery";
import ExternalLink from "../components/external-link";

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "pre-wedding" } }) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const PreWeddingPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp);

  return (
    <Layout>
      <SEO title="Pre-Wedding" />
      <div className="animate__animated animate__fadeIn">
        <div className="static max-h-screen overflow-y-hidden">
          <StaticImage
            src="../images/pre-wedding/painting-00003.JPG"
            alt="phnom-penh-cover"
            placeholder="blurred"
            className="animate__animated animate__fadeIn"
          />
        </div>
      </div>
      <div className="custom-container">
        <h1 className="uppercase text-3xl pt-10">The one with the gold fish</h1>
        <p>
          Inspired by a lot of things that we commonly like, we came up with
          this short with the help of{" "}
          <ExternalLink
            title="Pepper Media Cambodia"
            link="https://www.facebook.com/Peppermediakh"
          />
          . We wanted to make our pre-wedding short to be unique, something that
          we could have fun and something that we could come back in 20 years
          time and laugh about it.
        </p>
        <p>We hope you enjoy this short as much as we enjoyed making it.</p>
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/ddNVmicw8H4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <hr className="my-10" />
        <Gallery images={images} />
      </div>
    </Layout>
  );
};

export default PreWeddingPage;
