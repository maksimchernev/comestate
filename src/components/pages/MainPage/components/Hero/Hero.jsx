import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import AnchorLink from "../../../../base/AnchorLink";

export const Hero = ({ data }) => {
    return (
        <section className={styles.hero} id="hero">
            {!!data?.backimage?.node?.mediaItemUrl && (
                <Image
                    src={data.backimage.node.mediaItemUrl}
                    alt={data?.backimage?.node?.altText || ""}
                    fill
                    className={styles.bgImage}
                    priority
                />
            )}
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{data.h1}</h1>
                <span className={styles.grad}>Создаем</span>
                <span className={styles.green}>Цифровые</span>
                <span className={styles.grad}>Решения</span>
            </div>
            <AnchorLink href="/#about" className={styles.arrowLink}>
                <Image
                    src="/img/icons/arrow.svg"
                    height={58}
                    width={28}
                    alt=""
                    className={styles.arrowLinkImg}
                />
            </AnchorLink>
        </section>
    );
};
