import { useEffect, useState } from "react";
import { ProjectCard, ProjectCardProps } from "../../Molecules/ProjectCard"
import { ProjectCardLoading } from "../../Molecules/ProjectCardLoading";

export const ProjectList = () => {

    const [loading, setLoading] = useState(true)

    const projectCards: ProjectCardProps[] = [
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT']
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
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