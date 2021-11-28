module.exports = {
  siteMetadata: {
    title: "Tim & Hourng",
    description: "Our Commitment to Love",
    url: "https://timandhourng.com",
    image: "src/images/pre-wedding/apartment-00012.JPG",
    author: "@thebokiya",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Tim & Hourng",
        short_name: "T&H",
        description: "Our Commitment to Love",
        start_url: "/",
        lang: "en",
        icon: "src/images/img-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
};
