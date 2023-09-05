import { ProjectCard, ProjectCardProps } from "../../Molecules/ProjectCard"

export const ProjectList = () => {

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

    return (
        <div className="row">
            {projectCards.map((project, index) => (
                <ProjectCard {...project} key={index} />
            ))}
        </div>
    )
}