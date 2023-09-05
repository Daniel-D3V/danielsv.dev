import { useEffect, useState } from "react";
import { ProjectCard, ProjectCardProps } from "../../Molecules/ProjectCard"
import { ProjectCardLoading } from "../../Molecules/ProjectCardLoading";

export const ProjectList = () => {

    const [loading, setLoading] = useState(true)

    const projectCards: ProjectCardProps[] = [
        {
            title: 'Warp Store',
            description: 'Plataforma de vendas automáticas e intermediadora de vendas de jogos online, com customização e um sistema único e inovador.',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1146369372428967976/Main_1.gif',
            link: 'https://',
            languages: ['TYPESCRIPT', 'NODEJS', 'NEXTJS']
        },
        {
            title: 'Leinad Shop',
            description: 'A Leinad Shop é uma plataforma de e-commerce, com um sistema de vendas de produtos para o mercado de jogos como: Contas FiveM, Contas etc...',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148546555452862495/image.png',
            languages: ['TYPESCRIPT', 'NEXTJS'],
            link: 'https://'
        },
        {
            title: 'Track Master',
            description: 'Website para rastreio de encomendas de objetos dos correios, que permite você rastrear encomendas em tempo real',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148516765853286420/image.png',
            link: 'https://',
            languages: ['TYPESCRIPT', 'NODEJS', 'NEXTJS']
        },
        {
            title: 'HWID Spoofer',
            description: 'Um painel spoofer que remove banimentos globais realizados no HWID (HARDWARE INDENTIFICATION), praticamente ele camufla o banimento',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148547708819349535/image.png',
            link: 'https://',
            languages: ['CSHARP'],
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