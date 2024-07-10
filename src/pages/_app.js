import "/src/styles/globals.scss";
import localFont from "next/font/local";
import { DefaultSeo, OrganizationJsonLd } from "next-seo";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";

const montserrat = localFont({
    src: [
        {
            path: "../../public/fonts/Montserrat-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Montserrat-SemiBold.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Montserrat-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
    const { seo, menu: menuItems, pageData, contacts } = pageProps;
    const siteName = seo?.schema?.siteName || "КомИстейт";
    const canonical = seo?.seo?.canonical;
    const siteTitle = "КомИстейт";
    const siteDescription = "Создаем цифровые решения";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const siteLogo = `${process.env.NEXT_PUBLIC_SITE_URL}/logo/logo.png`;
    const siteImage =
        seo?.openGraph?.defaultImage?.mediaItemUrl ||
        `${process.env.NEXT_PUBLIC_SITE_URL}/open-graph-default.png`;
    const phone = seo?.options?.phone || "+7 831 423-47-08";

    const router = useRouter();
    return (
        <>
            <DefaultSeo
                title={siteTitle}
                description={siteDescription}
                canonical={
                    canonical ||
                    `${siteUrl}${
                        router.asPath === "/" ? "" : router.asPath
                    }`.split("?")[0]
                }
                openGraph={{
                    type: "website",
                    locale: seo?.schema?.inLanguage || "ru_RU",
                    siteName: seo?.seo?.opengraphSiteName || siteName,
                    title: seo?.seo?.opengraphTitle || siteTitle,
                    description:
                        seo?.seo?.opengraphDescription || siteDescription,
                    url: `${siteUrl}${
                        router.asPath === "/" ? "" : router.asPath
                    }`,
                    images: [
                        {
                            url:
                                seo?.seo?.opengraphImage?.mediaItemUrl ||
                                siteImage,
                            width: 250,
                            height: 250,
                            alt: `${siteName} logo`,
                        },
                    ],
                }}
            />
            <OrganizationJsonLd
                name={siteName}
                url={siteUrl}
                logo={siteLogo}
                image={siteImage}
                description={siteDescription}
                contactPoint={[
                    {
                        telephone: { phone },
                        contactType: "Shop",
                    },
                ]}
                openingHours="Mo, Tu, We, Th, Fr 08:00-22:00"
            />
            <style jsx global>{`
                * {
                    font-family: ${montserrat.style.fontFamily};
                }
            `}</style>
            <Layout
                menuItems={menuItems}
                contacts={{ ...pageData?.contacts, ...contacts }}
            >
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
