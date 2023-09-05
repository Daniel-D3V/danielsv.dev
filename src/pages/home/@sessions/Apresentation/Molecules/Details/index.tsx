import classNames from 'classnames'
import styles from './styles.module.sass'
import { Schibsted_Grotesk } from 'next/font/google'
import Link from 'next/link'
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { BiLogoDiscord } from 'react-icons/bi';

const grotesk = Schibsted_Grotesk({
    subsets: ['latin'],
    weight: '700'
})

export const Details = () => {
    return (
        <div className={classNames(styles.Details, 'col-md-6')}>
            <p className={styles.Title} style={grotesk.style}>Daniel Silva</p>
            <p className={styles.SubTitle}>Full-stack Developer | CEO, Fundador Warp Store</p>
            <p className={styles.Description}>👋 Olá, meu nome é Daniel. Atualmente completo mais de 5 anos no mercado de desenvolvimento.</p>
            <div className={styles.NetworkSocialList}>
                <Link href="/" className={styles.NetworkSocial}><FaGithub /></Link>
                <Link href="/" className={styles.NetworkSocial}><FaYoutube /></Link>
                <Link href="/" className={styles.NetworkSocial}><FaInstagram /></Link>
                <Link href="/" className={styles.NetworkSocial}><FaLinkedin /></Link>
                <Link href="/" className={styles.NetworkSocial}><BiLogoDiscord /></Link>
            </div>
        </div>
    )
}