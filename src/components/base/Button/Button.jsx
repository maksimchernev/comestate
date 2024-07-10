import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

export const Button = ({
    text,
    href,
    children,
    className,
    onClick,
    loading,
}) => {
    return (
        <button
            className={cn(styles.button, className)}
            href={href}
            onClick={onClick}
        >
            {!loading ? text || children : "Пожалуйста подождите"}
        </button>
    );
};
