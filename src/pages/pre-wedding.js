import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import ComingSoon from "../components/coming-soon";
import SEO from "../components/seo";

const PreWeddingPage = () => {
  return (
    <div>
      <SEO title="Pre-Wedding" />
      <Header></Header>
      <Layout>
        <ComingSoon></ComingSoon>
      </Layout>
    </div>
  );
};

export default PreWeddingPage;
