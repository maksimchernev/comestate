import { NextSeo } from "next-seo";
import Hero from "../../pages/MainPage/components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const MainPage = ({ pageData, seo }) => {
    return (
        <>
            <NextSeo
                title={seo?.seo?.title || "КомИстейт"}
                description={seo?.seo?.metaDesc || "Создаем цифровые решения"}
            />
            {!!pageData?.hero && <Hero data={pageData.hero} />}
            {!!pageData?.about && <About data={pageData.about} />}
            {!!pageData?.projects && <Projects data={pageData.projects} />}
        </>
    );
};

export default MainPage;
