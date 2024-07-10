const menuQuery = {
    query: `query Menu {
      menu(id: "header", idType: SLUG) {
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `,
};

export default menuQuery;
