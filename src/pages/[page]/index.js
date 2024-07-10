import { GQLFetcher } from "../../graphql/api";
import { menuQuery, pageQuery, pagesQuery } from "../../queries";
import Page from "../../components/pages/Page";

const StaticPage = ({ pageData, seo }) => {
    return <Page pageData={pageData} seo={seo} />;
};

export default StaticPage;

export async function getStaticPaths() {
    const wpPages = await GQLFetcher(pagesQuery);
    const paths = wpPages.data.pages.nodes
        .filter((item) => {
            return !["/"].includes(item.slug);
        })
        .map((item) => {
            return {
                params: {
                    page: decodeURI(item.slug),
                },
            };
        });
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const response = await Promise.allSettled([
        GQLFetcher(pageQuery(params.page)),
        GQLFetcher(menuQuery),
    ]);
    const [{ value: pageData }, { value: menu }] = response;
    const pageDataProps = pageData?.data?.page || null;
    const menuItemsProps = menu?.data?.menu?.menuItems?.nodes || null;
    const seoProps = pageData?.data?.page?.seo || null;

    if (!pageData?.data?.page?.content) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            pageData: pageDataProps,
            seo: seoProps,
            menu: menuItemsProps,
        },
        revalidate: 60,
    };
}
