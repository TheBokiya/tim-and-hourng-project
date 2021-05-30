import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const featuredImgFluid = getImage(frontmatter.featuredImage);

  return (
    <Layout>
      <div className="custom-container">
        <div className="blog-post">
          <div className="my-10">
            <h1 className="text-primary uppercase tracking-wide text-navy font-sans text-6xl font-black">
              {frontmatter.title}
            </h1>
            <h3 className="font-sans text-gray-300 text-xs">
              {frontmatter.date}
            </h3>
          </div>
          <GatsbyImage image={featuredImgFluid} alt={frontmatter.title} />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
