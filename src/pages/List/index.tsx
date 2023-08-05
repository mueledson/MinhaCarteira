import React from "react";

import { Container, Content } from "./styles";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {
    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Maria'  , label: 'Maria'},
        {value: 'Dante'  , label: 'Dante'},
    ]

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862" 
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
            </Content>
        </Container>
    )
}

export default List