import { ReactNode } from "react"
import styles from './styles.module.sass'
import classNames from "classnames"

type Props = {
    children: ReactNode
}

export const Root = (props: Props) => {
    return (
        <header className={styles.Header}>
            <div className={classNames(styles.Container, 'container')} {...props} />
        </header>
    )
}