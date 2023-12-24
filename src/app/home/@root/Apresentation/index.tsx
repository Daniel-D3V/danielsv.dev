import { Container } from '@/components/Container'
import styles from './styles.module.sass';

export const Apresentation = () => {
    return (
        <section className={styles.Apresentation}>
            <Container className={styles.Container}>
                <div className={styles.Details}>
                    <p className={styles.Title}>I'm Daniel Silva</p>
                    <p className={styles.SubTitle}>Full-stack Developer | CEO, Fundador Warp Store</p>
                    <p className={styles.Description}>👋 Olá, meu nome é Daniel. Atualmente completo mais de 3 anos e meio no mercado de desenvolvimento.</p>
                </div>
            </Container>
        </section>
    )
}