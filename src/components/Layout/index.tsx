import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { GridLayout } from "./styles";

interface ChildrenProps {
    children?: React.ReactNode
}

function Layout({ children } : ChildrenProps){
    return (
        <GridLayout>
            <MainHeader />
            <Content>
                {children}
            </Content>
            <Aside /> 
        </GridLayout>
    )
}
export default Layout