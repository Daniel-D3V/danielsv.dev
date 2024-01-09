import { Button as ButtonUI } from "@material-tailwind/react"
import classNames from "classnames"
import { ComponentProps } from "react"

type Props = Omit<ComponentProps<typeof ButtonUI>, "placeholder">

export const Button = ({ className, ...props }: Props) => {
    return (
        <ButtonUI className={classNames('font-mono normal-case rounded-md px-4 py-2 text-base font-medium bg-primary text-white', className)} placeholder="." {...props} />
    )
}