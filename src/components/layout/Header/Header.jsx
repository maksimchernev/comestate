import styles from "./Header.module.scss";
import AnchorLink from "../../base/AnchorLink";
import { useRouter } from "next/router";
import cn from "classnames";

export const Header = ({ menuItems }) => {
    const router = useRouter();
    return (
        <>
            <header
                className={cn(styles.header, {
                    [styles.isMainPage]: router.pathname === "/",
                })}
            >
                <nav>
                    <AnchorLink
                        href={"/#hero"}
                        title="Главная страница"
                        className={styles.menuItem}
                    >
                        <span className={styles.bold}>Ком</span>
                        <span>Истейт</span>
                    </AnchorLink>
                    {menuItems?.length &&
                        menuItems.map((item) => {
                            return (
                                <AnchorLink
                                    key={item.id}
                                    text={item.label}
                                    href={item.url}
                                    className={styles.menuItem}
                                    offset={90}
                                />
                            );
                        })}
                </nav>
            </header>
        </>
    );
};
