import { Header } from "../Molecules/Header"
import { ProjectList } from "../Organisms/ProjectList"
import { Root } from "../Organisms/Root"

export const ProjectsLayout = () => {
    return (
        <Root>
            <Header />
            <ProjectList />
        </Root>
    )
}