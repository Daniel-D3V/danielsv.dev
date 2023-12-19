import { Container } from '@/components/Container'
import { ReactNode } from 'react'
import styles from './styles.module.sass';

type Props = {
    children: ReactNode
}

export const Apresentation = (props: Props) => {
    return (
        <section className={styles.Apresentation}>
            <Container>
                <div className='flex items-sta'></div>
            </Container>
        </section>
    )
}