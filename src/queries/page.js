const pageQuery = (slug = "/privacy-policy") => {
    return {
        query: `query Page {
        page(id: "${slug}", idType: URI) {
            title
            content
            seo {
                metaDesc
                title
                }
            }
        }
    `,
    };
};

export default pageQuery;
