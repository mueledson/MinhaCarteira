import React from "react";

import ContentHeader from "../../components/ContentHeader";

import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const Dashboard: React.FC = () => {

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
            <ContentHeader title="Dashboard" lineColor="#E44C4E">
            <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard