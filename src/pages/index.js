import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
// import { StaticImage } from "gatsby-plugin-image";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRingsWedding } from "@fortawesome/pro-light-svg-icons";
import SEO from "../components/seo";

export const coverImgQuery = graphql`
  query {
    file(relativePath: { eq: "pre-wedding/pre-wedding-00001.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="animate__animated animate__fadeIn">
        <div className="static max-h-screen overflow-y-hidden">
          {/* <StaticImage
            src="../images/img-cover.JPG"
            alt="index-cover-image"
            placeholder="blurred"
            layout="fullWidth"
          /> */}
          <Img fluid={data.file.childImageSharp.fluid} />
          <div className="hidden sm:block absolute inset-x-0 bottom-6 sm:bottom-10 text-white">
            <div className="scroll">
              <button onClick={() => scrollTo("#bottom-page")}>
                <div className="mouse">
                  <div className="wheel"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="custom-container">
          <div className="py-10">
            <h1 className="text-primary text-center flex justify-center uppercase tracking-wide text-navy">
              Le mariage de Tim et Hourng
            </h1>
            <h3 className="text-primary text-center flex justify-center uppercase tracking-wide text-gray-400 text-base pb-5">
              La vie en rose
            </h3>
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faRingsWedding}
                className="text-gold text-3xl flex"
              />
            </div>
          </div>
          <p>
            This site contains all the information you need to know about our
            wedding and of course, our backstory. We also would like to use this
            site as a journal to document our journey leading up to the wedding.
          </p>
          <p>
            For guests traveling from abroad, we hope you find this site
            particularly useful in helping you navigate the busy city of Phnom
            Penh. Please click <Link to="/visiting-phnom-penh">here</Link> to
            read more information about the city.
          </p>
          <p>
            Last but not least, thank you for checking out our wedding site. We
            do sincerely thank you for making the time to attend our wedding.
          </p>
          <div id="bottom-page"></div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
