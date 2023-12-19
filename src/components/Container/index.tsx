import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const Container = (props: Props) => {
    return (
        <div className='container' {...props} />
    )
}