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
              date
              slug
              title
            }
          }
        }
      }
    }
  }
`;

const NewsPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="News" />
      <div className="custom-container">
        <h1 className="text-primary text-center uppercase tracking-wide text-navy font-sans text-6xl font-black my-10">
          News
        </h1>
        <div className="flex felx-wrap">
          {data.allFile.edges.map(({ node }, index) => (
            <div key={index}>{node.childMarkdownRemark.frontmatter.title}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
