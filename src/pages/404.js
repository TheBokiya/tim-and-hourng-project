import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../components/button";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="custom-container flex flex-col-reverse lg:flex-row">
      <div className="bg-white mx-5 p-8 lg:px-5 lg:py-10 lg:w-1/2 lg:self-center -mt-20 lg:-mr-20 z-10">
        <h1 className="font-sans uppercase">404 - Page Not Found</h1>
        <p>
          Oops! We can't find the the page you were looking for, but we found
          this derpy picture of us for you.
        </p>
        <div className="py-10">
          <Button title="Go Home" style="navy" link="/" />
        </div>
      </div>
      <div className="lg:w-3/4">
        <StaticImage
          src="../images/img-derp.png"
          alt="derpy image"
          placeholder="blurred"
        />
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
