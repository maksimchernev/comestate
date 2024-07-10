import { NextSeo } from "next-seo";
import styles from "./Page.module.scss";

const MainPage = ({ pageData, seo }) => {
    return (
        <>
            <NextSeo
                title={seo?.seo?.title || "Eurostandards Официальный сайт"}
                description={
                    seo?.seo?.metaDesc ||
                    "Откройте для себя Европу: от получения ПМЖ до обучения детей и инвестирования в недвижимость."
                }
            />
            {!!pageData && (
                <section className={styles.section}>
                    <h1 className={styles.title}>{pageData.title}</h1>
                    <span
                        dangerouslySetInnerHTML={{ __html: pageData.content }}
                        className={styles.content}
                    />
                </section>
            )}
        </>
    );
};

export default MainPage;
