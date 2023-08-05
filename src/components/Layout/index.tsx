import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { Grid } from "./styles";

interface ChildrenProps {
    children?: React.ReactNode
}

function Layout({ children } : ChildrenProps){
    return (
        <Grid>
            <MainHeader />
            <Content>
                {children}
            </Content>
            <Aside /> 
        </Grid>
    )
}
export default Layout