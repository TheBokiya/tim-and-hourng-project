import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const newsQuery = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "news" } }) {
      edges {
        node {
          childMarkdownRemark {
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
      }
    }
  }
`;

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="News" />
      <div className="custom-container">
        <h1 className="text-primary text-center uppercase tracking-wide text-navy font-sans text-6xl font-black my-10">
          News
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-36">
          {data.allFile.edges.map(({ node }, index) => (
            <Link
              to={node.childMarkdownRemark.frontmatter.slug}
              className="no-underline group"
            >
              <div key={index}>
                <GatsbyImage
                  image={getImage(
                    node.childMarkdownRemark.frontmatter.featuredImage
                  )}
                  className="transition duration-300 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <h3 className="font-sans uppercase transition duration-300 ease-in-out group-hover:text-gold">
                  {node.childMarkdownRemark.frontmatter.title}
                </h3>
                <h5 className="text-gray-300">
                  {node.childMarkdownRemark.frontmatter.date}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
