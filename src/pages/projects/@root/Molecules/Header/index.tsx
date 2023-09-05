import { Schibsted_Grotesk } from 'next/font/google';
import styles from './styles.module.sass';

const SchibstedGrotesk = Schibsted_Grotesk({
    subsets: ['latin'],
    weight: '700'
})

export const Header = () => {
    return (
        <header className={styles.Header}>
            <p className={styles.Title} style={SchibstedGrotesk.style}>Trabalho, Projetos e código aberto.</p>
            <p className={styles.Description}>Confira abaixo alguns dos meus projetos mais recentes. Até o momento, já criei mais de <b>50</b> projetos, embora nem todos estejam disponíveis no GitHub ou Portfólio para exibição pública. Alguns desses projetos estão no GitHub, mas, devido a acordos de serviço contratado, não posso disponibilizar o código-fonte.</p>
        </header>
    )
}