import { NextSeo } from "next-seo";
import styles from "./404.module.scss";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <NextSeo title={"Страница не найдена"} description={""} />

            <div className={styles.section}>
                <h1 className={styles.hidden}>Страница ошибки 404</h1>
                <p className={styles.num}>404</p>
                <p className={styles.title}>Страница не найдена</p>
                <Link href={"/"} className={styles.link}>
                    На главную
                </Link>
            </div>
        </>
    );
};

export default NotFound;
