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
            <p className={styles.Description}>Veja abaixo alguns de meus projetos criados recentemente, no total já tivem ais de <b>400</b> projetos criados até agora, porem como todos não foram salvos no gtihub é impossível exibir aqui!</p>
        </header>
    )
}