import Link from 'next/link'
import styles from './styles.module.sass'

export const Nav = () => {

    return (
        <nav className={styles.Nav}>
            <Link href="/#about" className={styles.Link}>Projetos</Link>
            <Link href="/#about" className={styles.Link}>Sobre</Link>
            <Link href="/#about" className={styles.Link}>Contato</Link>
        </nav>
    )
}