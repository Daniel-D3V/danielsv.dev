import classNames from 'classnames'
import styles from './styles.module.sass'
import { Schibsted_Grotesk } from 'next/font/google'
import Link from 'next/link'
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiLogoDiscord } from 'react-icons/bi';
import { TypeAnimation } from 'react-type-animation';

const grotesk = Schibsted_Grotesk({
    subsets: ['latin'],
    weight: '700'
})

export const Details = () => {
    return (
        <div className={classNames(styles.Details, 'col-md-6')}>
            <p>
                <TypeAnimation className={styles.Title} style={grotesk.style} sequence={["I'm Daniel Silva", 5000, "Daniel Silva"]} repeat={Infinity} />
            </p>
            <p className={styles.SubTitle}>Full-stack Developer | CEO, Fundador Warp Store</p>
            <p className={styles.Description}>👋 Olá, meu nome é Daniel. Atualmente completo mais de 3 anos e meio no mercado de desenvolvimento.</p>
            <div className={styles.NetworkSocialList}>
                <Link target='_blank' href="https://github.com/Daniel-D3V" className={styles.NetworkSocial}><FaGithub /></Link>
                <Link target='_blank' href="https://yotube.com/daniel-d3v" className={styles.NetworkSocial}><FaYoutube /></Link>
                <Link target='_blank' href="https://instagram.com/daniel.d3v" className={styles.NetworkSocial}><FaInstagram /></Link>
                <Link target='_blank' href="https://www.linkedin.com/in/daniel-rabbit/" className={styles.NetworkSocial}><FaLinkedin /></Link>
                <Link target='_blank' href="https://discord.com/users/1135256865077481553" className={styles.NetworkSocial}><BiLogoDiscord /></Link>
            </div>
        </div>
    )
}
