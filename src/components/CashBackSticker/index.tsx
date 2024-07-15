import React from 'react';

import {
    Container,
    CashBackValueStrong,
    TriangleShapeView,
    CashBackContentWrapper,
    CashBackTitle
} from './styles';

export function CashBackSticker({ cashBackValue, bestOption }: { cashBackValue?: string | null, bestOption?: boolean }) {
    return (
        <Container>
            {bestOption ?
                <CashBackContentWrapper>
                    <CashBackValueStrong>-3% de juros:</CashBackValueStrong>
                    <CashBackTitle>Melhor opção de parcelamento</CashBackTitle>
                </CashBackContentWrapper>
                :
                <CashBackContentWrapper>
                    <CashBackValueStrong>🤑 {cashBackValue}</CashBackValueStrong>
                    <CashBackTitle>de volta no seu Pix na hora</CashBackTitle>
                </CashBackContentWrapper>}
            <TriangleShapeView />
        </Container>
    );
}
