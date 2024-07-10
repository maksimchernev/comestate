const seoQuery = {
    query: `query Seo {
      seo {
        webmaster {
          yandexVerify
          googleVerify
        }
        openGraph {
          defaultImage {
            altText
            mediaItemUrl
          }
        }
        schema {
          inLanguage
          siteName
        }
      }
      page(id: "/", idType: URI) {
        seo {
          canonical
          title
          metaDesc
          opengraphSiteName
          opengraphTitle
          opengraphDescription
          opengraphImage {
            altText
            mediaItemUrl
          }
        }
      }
      contacts {
        option {
          phone
          email
        }
      }
    }
  `,
};

export default seoQuery;
