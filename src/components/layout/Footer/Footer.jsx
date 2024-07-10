import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

export const Footer = ({ data }) => {
    return (
        <footer
            className={cn(styles.footer, {
                [styles.withImage]: !!data?.bgimage?.node?.mediaItemUrl,
            })}
            id="contacts"
        >
            {!!data?.bgimage?.node?.mediaItemUrl && (
                <Image
                    src={data.bgimage.node.mediaItemUrl}
                    alt={data?.bgimage?.node?.altText || ""}
                    fill
                    className={styles.bgImage}
                    priority
                />
            )}
            <div className={styles.content}>
                {!!data?.phone && (
                    <Link href={`tel:${data.phone}`} className={styles.link}>
                        {data.phone}
                    </Link>
                )}
                {!!data?.email && (
                    <Link href={`mailto:${data.email}`} className={styles.link}>
                        {data.email}
                    </Link>
                )}
                <span className={styles.copy}>
                    © КомИстейт, {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
};
