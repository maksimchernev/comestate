import Image from "next/image";
import styles from "./Projects.module.scss";

const Projects = ({ data }) => {
    return (
        <section id="projects" className={styles.projects}>
            {data?.title && <h2 className={styles.title}>{data.title}</h2>}
            {data?.project?.length && (
                <div className={styles.content}>
                    {data.project.map((item, idx) => {
                        return (
                            <div className={styles.projectWrapper} key={idx}>
                                {!!item.image && (
                                    <Image
                                        src={item.image.node.mediaItemUrl}
                                        alt={item?.image?.node?.altText || ""}
                                        width={585}
                                        height={384}
                                        className={styles.image}
                                        priority
                                    />
                                )}
                                {!!item?.title && (
                                    <p className={styles.projectName}>
                                        {item.title}
                                    </p>
                                )}
                                {!!item?.text && (
                                    <span
                                        className={styles.projectText}
                                        dangerouslySetInnerHTML={{
                                            __html: item.text,
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Projects;
