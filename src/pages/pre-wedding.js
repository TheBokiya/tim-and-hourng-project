import Gallery from "@browniebroke/gatsby-image-gallery";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
            src="../images/pre-wedding/A7305594.JPG"
            alt="pre-wedding-cover"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="custom-container">
        <h1 className="uppercase text-3xl pt-10">Pre-Wedding</h1>
        <p>
          When I was young, my mom used to dress me up with suspenders all the
          time. Wearing one of these formal wears with a suspender really took
          me back.
        </p>
        <p>
          During the shoot, I just couldn't take my eyes off Muy Hourng. I think
          she looks good in everything that she wears but seeing her in these
          formal wears just took my breath away. Everyday I wake up, I'm
          grateful that we have found each other and get to spend our whole life
          together.
        </p>
        <p>Together. Always.</p>
        <hr className="my-10" />
        <Gallery images={images} />
      </div>
    </Layout>
  );
};

export default PreWeddingPage;
