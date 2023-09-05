import { ReactNode } from 'react';
import styles from './styles.module.sass';

type Props = {
    children: ReactNode
}

export const Root = (props: Props) => {
    return (
        <div className={styles.Projects}>
            <div className='container' {...props} />
        </div >
    )
}