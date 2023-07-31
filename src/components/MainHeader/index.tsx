import { useMemo } from 'react';

import emojis from '../../utils/emoji';

import {
    Container,
    Profile,
    UserName,
    Welcome,
} from "./styles";

import Toggle from '../Toggle';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Edson</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;