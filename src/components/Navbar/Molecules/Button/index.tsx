import { Poppins } from 'next/font/google'
import styles from './styles.module.sass'
import Link from 'next/link'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})

export const Button = () => {
    return (
        <Link href="/contact" className={styles.Button} style={poppins.style}>Contatar</Link>
    )
}