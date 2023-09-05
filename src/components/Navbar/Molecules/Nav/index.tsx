import Link from 'next/link'
import styles from './styles.module.sass'
import { useRouter } from 'next/router'
import classNames from 'classnames';

export const Nav = () => {

    const { pathname } = useRouter();


    return (
        <nav className={styles.Nav}>
            <Link href="/" className={classNames(styles.Link, { [styles.Link_Active]: pathname === "/home" })}>Sobre</Link>
            <Link href="/projects" className={classNames(styles.Link, { [styles.Link_Active]: pathname === "/projects" })}>Projetos</Link>
            <Link href="/contact" className={classNames(styles.Link, { [styles.Link_Active]: pathname === "/contact" })}>Contato</Link>
        </nav >
    )
}