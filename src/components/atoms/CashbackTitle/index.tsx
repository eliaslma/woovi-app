import React from 'react';

import {
    Container,
    Title,
    PercentValue
} from './styles';

const CashbackTitle = ({ percentValue }: {percentValue: number }) => {
    return (
        <Container>
            <Title>Ganhe</Title>
            <PercentValue> {percentValue}% </PercentValue>
            <Title>de Cashback</Title>
        </Container>
    );
}

export default CashbackTitle;