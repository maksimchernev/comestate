import styles from "./About.module.scss";

const About = ({ data }) => {
    return (
        <section id="about" className={styles.about}>
            {!!data?.title && <h2 className={styles.title}>{data.title}</h2>}
            {!!data?.text && (
                <span
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: data.text }}
                />
            )}
        </section>
    );
};

export default About;
