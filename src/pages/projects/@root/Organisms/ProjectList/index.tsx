import { useEffect, useState } from "react";
import { ProjectCard, ProjectCardProps } from "../../Molecules/ProjectCard"
import { ProjectCardLoading } from "../../Molecules/ProjectCardLoading";

export const ProjectList = () => {

    const [loading, setLoading] = useState(true)

    const projectCards: ProjectCardProps[] = [
        {
            title: 'Warp Store',
            description: 'Plataforma de vendas automáticas e intermediadora de vendas de jogos onlines.',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1146369372428967976/Main_1.gif',
            link: 'https://',
            languages: ['TYPESCRIPT', 'NODEJS', 'NEXTJS']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT', 'NODEJS', 'NEXTJS']
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <div className="row">
            {loading && (<>
                {" ".repeat(7).split(' ').map((_, index) => (
                    <ProjectCardLoading key={index} />
                ))}
            </>)}

            {!loading && (<>
                {projectCards.map((project, index) => (
                    <ProjectCard {...project} key={index} />
                ))}
            </>)}
        </div>
    )
}