import { ReactNode } from "react"
import styles from './styles.module.sass'
import classNames from "classnames"

type Props = {
    children: ReactNode
}

export const Root = (props: Props) => {
    return (
        <header className={styles.Apresentation}>
            <div className='container'>
                <div className="row" {...props}></div>
            </div>
        </header>
    )
}