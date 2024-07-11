import React from 'react';

import {
    Container,
    Total,
    Cet
} from './styles';

export function TotalQuotes({total}: {total:string}){
    return(
        <Container>
            <Cet>CET: 0.5%</Cet>
            <Total>Total: {total}</Total>
        </Container>
    );
}