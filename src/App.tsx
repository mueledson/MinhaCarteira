import React from "react";
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import dark from "./styles/themes/dark";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import light from "./styles/themes/light";

const App: React.FC = () => {
    return (
            <ThemeProvider theme={dark}>
                <GlobalStyles/>
                <Layout/>
            </ThemeProvider>
    )
}

export default App