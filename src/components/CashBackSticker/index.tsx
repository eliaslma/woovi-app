import React from 'react';

import {
    Container,
    CashBackValueTitle,
} from './styles';

export function CashBackSticker({ cashBackValue, bestOption }: { cashBackValue?: string | null, bestOption?: true}){
    return(
        <Container>
            {bestOption ? <CashBackValueTitle>-3% de juros: Melhor opção de parcelamento</CashBackValueTitle> 
            : <CashBackValueTitle>🤑 {cashBackValue} de volta no seu Pix na hora</CashBackValueTitle>}
        </Container>
    );
}