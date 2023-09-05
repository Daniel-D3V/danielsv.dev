import Link from "next/link"
import styles from './styles.module.sass'
import { Space_Grotesk } from 'next/font/google';

const grotesk = Space_Grotesk({ subsets: ['latin'], weight: '500' })

export const Logo = () => {
    return (
        <Link href="/" className={styles.Logo} style={grotesk.style}>Daniel</Link>
    )
}