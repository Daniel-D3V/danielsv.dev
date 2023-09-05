import { Button } from "../Molecules/Button"
import { Logo } from "../Molecules/Logo"
import { Nav } from "../Molecules/Nav"
import { Root } from "../Organisms/Root"

export const Navbar = () => {
    return (
        <Root>
            <Logo />
            <Nav />
            <Button />
        </Root>
    )
}