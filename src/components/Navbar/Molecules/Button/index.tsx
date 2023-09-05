import { Poppins } from 'next/font/google'
import styles from './styles.module.sass'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})

export const Button = () => {
    return (
        <button className={styles.Button} style={poppins.style}>Contatar</button>
    )
}