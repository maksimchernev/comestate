const pagesQuery = {
    query: `query Pages {
      pages {
        nodes {
          slug
          uri
        }
      }
    }`,
};

export default pagesQuery;
