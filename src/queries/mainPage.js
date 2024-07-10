const mainPageQuery = {
    query: `query mainpage {
      page(id: "/", idType: URI) {
        mainpage {
          hero {
            h1
            backimage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
          about {
            title
            text
          }
          projects {
            title
            project {
              title
              text
              image {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
          }
          contacts {
            bgimage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `,
};

export default mainPageQuery;
