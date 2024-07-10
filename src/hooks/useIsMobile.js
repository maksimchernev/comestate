import { useState, useEffect } from "react";
import debounce from "lodash-es/debounce";

export const useIsMobile = (
    mobileWidth = 768,
    hasDebounce = true,
    isMobileSSR = false
) => {
    const [mobile, setMobile] = useState(isMobileSSR);

    const checkSize = () => {
        if (window.innerWidth <= mobileWidth) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    const handleResize = hasDebounce ? debounce(checkSize, 300) : checkSize;

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return mobile;
};
