import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className?: string
}

export const Container = ({ className, ...props }: Props) => {
    return (
        <div className={classNames('container', className)} {...props} />
    )
}