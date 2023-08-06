import { useMemo } from "react";
import { useParams } from "react-router-dom";

import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

function List(){
    const { type } = useParams(); 
    
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type]);
    
    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type]);

    const months = [
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'}
    ]
    const years = [
        {value: 2023, label: 2023},
        {value: 2024, label: 2024},
        {value: 2025, label: 2025}
    ]

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>
            
            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard 
                    tagColor={lineColor}
                    title="Conta de Luz"
                    subtitle="27/05/2021"
                    amount="R$ 100,00"
                />
            </Content>
        </Container>
    )
}

export default List