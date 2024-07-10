const contactsQuery = {
    query: `query contacts {
      contacts {
        option {
          phone
          email
        }
      } 
    }`,
};

export default contactsQuery;
