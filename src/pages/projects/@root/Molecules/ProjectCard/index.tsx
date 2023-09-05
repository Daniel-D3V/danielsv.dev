import { Schibsted_Grotesk } from 'next/font/google';
import styles from './styles.module.sass';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { SiCsharp, SiNextdotjs } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import classNames from 'classnames';

type Languages = "TYPESCRIPT" | "JAVASCRIPT" | "NODEJS" | 'NEXTJS' | 'CSHARP'

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
                <div className={styles.Visit}>
                    <span><code>console.log</code>{"('"}O site ainda está em desenvolvimento e isto ainda não está pronto!{"')"}</span>
                </div>
                <p className={styles.Title} style={SchibstedGrotesk.style}>{props.title}</p>
                <p className={styles.Description}>{props.description}</p>
                <div className={styles.LanguageList}>
                    {props.languages.map((language, index) => {
                        return (
                            <>
                                {language === "TYPESCRIPT" && (
                                    <span title='Typescript' key={index} className={classNames(styles.Language, styles.Language_Typescript)}><BiLogoTypescript /></span>
                                )}

                                {language === "JAVASCRIPT" && (
                                    <span title='Javascript' key={index} className={classNames(styles.Language, styles.Language_Javascript)}><BiLogoJavascript /></span>
                                )}

                                {language === "NODEJS" && (
                                    <span title='NodeJS' key={index} className={classNames(styles.Language, styles.Language_NodeJS)}><FaNodeJs /></span>
                                )}

                                {language === "NEXTJS" && (
                                    <span title='NextJS' key={index} className={classNames(styles.Language, styles.Language_NextJS)}><SiNextdotjs /></span>
                                )}

                                {language === "CSHARP" && (
                                    <span title='Csharp' key={index} className={classNames(styles.Language, styles.Language_Csharp)}><SiCsharp /></span>
                                )}
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}