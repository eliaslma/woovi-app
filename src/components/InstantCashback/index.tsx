import React from 'react';

import {
    Container,
    Subtitle,
    LeftContainer,
    CashBackValueWrapper,
    Title,
    CashBackValue
} from './styles';

export function InstantCashback({ cashBackTotal }: { cashBackTotal: string }) {
    return (
        <Container>
            <LeftContainer>
                <Title>Cashback Instantâneo</Title>
                <Subtitle>O cashback instantâneo foi transferido para a sua chave Pix CPF: 053*******54</Subtitle>
            </LeftContainer>
            <CashBackValueWrapper>
                <CashBackValue>{cashBackTotal}</CashBackValue>
            </CashBackValueWrapper>
        </Container>
    );
}