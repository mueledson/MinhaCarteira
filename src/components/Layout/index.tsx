import { GridLayout } from "./styles";

import Aside from "../Aside";

import MainHeader from "../MainHeader";

import Content from "../Content";

interface ChildrenProps {
    children?: React.ReactNode
}

const Layout: React.FC = ({children} : ChildrenProps) => {
    return (
        <GridLayout>
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>
        </GridLayout>
    )
}

export default Layout