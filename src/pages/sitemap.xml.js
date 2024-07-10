import fs from "fs";
import { GQLFetcher } from "../graphql/api";
import { pagesQuery } from "../queries";

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

    const staticPaths = fs
        .readdirSync("src/pages")
        .filter((staticPage) => {
            return ![
                "[page]",
                "api",
                "index.js",
                "_app.js",
                "_document.js",
                "404.js",
                "sitemap.xml.js",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${BASE_URL}/${staticPagePath.split(".")[0]}`;
        });

    const wpPages = await GQLFetcher(pagesQuery);

    const wpPaths = wpPages.data.pages.nodes.map((path) => {
        return `${BASE_URL}${path.uri}`;
    });

    const allPaths = [...staticPaths, ...wpPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths
        .map(
            (url) =>
                `<url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>`
        )
        .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
