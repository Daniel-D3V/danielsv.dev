import { ReactNode } from "react"
import styles from './styles.module.sass';
import classNames from "classnames";

export type Props = {
    children: ReactNode
}

export const Root = (props: Props) => {
    return (
        <div className={styles.Contact}>
            <div className={classNames(styles.Container, 'container')}  {...props} />
        </div>
    )
}