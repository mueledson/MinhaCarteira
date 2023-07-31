import { Container } from "./styles";

interface IpropsContent {
    children?: React.ReactNode
}

function Content( {children} : IpropsContent ) {
    return (
        <Container>
            {children}
        </Container>
    )
}
export default Content