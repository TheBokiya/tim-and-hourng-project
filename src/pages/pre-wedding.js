import React from "react";
import Layout from "../components/layout";
import ComingSoon from "../components/coming-soon";
import SEO from "../components/seo";

const PreWeddingPage = () => {
  return (
    <Layout>
      <SEO title="Pre-Wedding" />
      <ComingSoon></ComingSoon>
    </Layout>
  );
};

export default PreWeddingPage;
