import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import ComingSoon from "../components/coming-soon";
import { Helmet } from "react-helmet";

const PreWeddingPage = () => {
  return (
    <div>
      <Helmet title="Pre-Wedding" />
      <Header></Header>
      <Layout>
        <ComingSoon></ComingSoon>
      </Layout>
    </div>
  );
};

export default PreWeddingPage;
