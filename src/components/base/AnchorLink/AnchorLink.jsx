import cn from "classnames";
import style from "./AnchorLink.module.scss";
import Button from "../Button";
import { useRouter } from "next/router";

export const AnchorLink = ({
    text,
    button = false,
    children,
    offset = 120,
    href,
    className,
    delay = 0,
    onClick = () => {},
}) => {
    const router = useRouter();

    const onClickScroll = (e) => {
        e.preventDefault();
        const url = href.slice(0, href.indexOf("#"));
        if (router.asPath !== url) {
            router.push(url);
            return;
        }
        const id = href.slice(href.indexOf("#") + 1);
        const anchor = document.getElementById(id);
        if (!anchor) return;
        const offsetTop = anchor.getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
            window.scroll({
                top: offsetTop - parseInt(offset),
                behavior: "smooth",
            });
        }, delay);
        if (onClick) onClick();
    };

    if (!button) {
        return (
            <a
                href={href}
                onClick={onClickScroll}
                className={cn(style.link, className)}
            >
                {text || children}
            </a>
        );
    } else {
        return (
            <Button
                href={href}
                onClick={onClickScroll}
                text={text}
                className={className}
            >
                {children}
            </Button>
        );
    }
};
