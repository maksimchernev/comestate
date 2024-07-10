import React from "react";
import styles from "./Layout.module.scss";
import cn from "classnames";
import Header from "../Header";
import Footer from "../Footer";

export const Layout = ({ children, menuItems, contacts }) => {
    return (
        <>
            <Header menuItems={menuItems} />
            <main className={cn(styles.main)}>{children}</main>
            <Footer data={contacts} />
        </>
    );
};
