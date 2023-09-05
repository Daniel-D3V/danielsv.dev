import { Schibsted_Grotesk } from 'next/font/google';
import styles from './styles.module.sass';
import Image from 'next/image';

type Languages = "TYPESCRIPT" | "JAVASCRIPT" | "NODEJS"

export type ProjectCardProps = {
    title: string,
    description: string,
    image: string,
    link: string,
    languages: Languages[]
}

const SchibstedGrotesk = Schibsted_Grotesk({
    subsets: ['latin'],
    weight: '700'
})

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="col-md-3">
            <div className={styles.ProjectCard}>
                <div className={styles.Image} style={{ backgroundImage: `url(${props.image})` }} />
                <p className={styles.Title} style={SchibstedGrotesk.style}>{props.title}</p>
                <p className={styles.Description}>{props.description}</p>
            </div>
        </div>
    )
}