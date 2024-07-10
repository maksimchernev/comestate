import { GQLFetcher } from "graphql/api";
import { mainPageQuery, menuQuery, seoQuery, contactsQuery } from "queries";
import MainPage from "../components/pages/MainPage";

const Page = (props) => {
    return <MainPage {...props} />;
};

export const getStaticProps = async () => {
    const response = await Promise.allSettled([
        GQLFetcher(mainPageQuery),
        GQLFetcher(menuQuery),
        GQLFetcher(seoQuery),
        GQLFetcher(contactsQuery),
    ]);

    const [
        { value: mainPage },
        { value: menu },
        { value: seo },
        { value: contacts },
    ] = response;

    const pageDataProps = mainPage?.data?.page?.mainpage || null;
    const menuItemsProps = menu?.data?.menu?.menuItems?.nodes || null;
    const seoProps =
        { ...seo?.data?.seo, ...seo?.data?.page, ...seo?.data?.contacts } ||
        null;
    const contactsProps = contacts?.data?.contacts?.option || null;

    return {
        props: {
            pageData: pageDataProps,
            menu: menuItemsProps,
            seo: seoProps,
            contacts: contactsProps,
        },
        revalidate: 2000,
    };
};
export default Page;
