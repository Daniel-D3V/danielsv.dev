import styles from './styles.module.sass';

export const ProjectCardLoading = () => {
    return (
        <div className="col-md-3">
            <div className={styles.ProjectCard}>
                <div className={styles.Image} />
                <span className={styles.Title} />
                <span className={styles.Description} />
                <span className={styles.Description2} />
            </div>
        </div>
    )
}