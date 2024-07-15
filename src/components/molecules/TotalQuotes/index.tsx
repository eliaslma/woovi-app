import React from 'react';
import { LineDivider } from '../../atoms/LineDivider';

import {
    Container,
    Total,
    Cet,
    TotalWrapper
} from './styles';

export function TotalQuotes({ total }: { total: string }) {
    return (
        <Container>
            <LineDivider/>
                <TotalWrapper>
                    <Cet>CET: 0.5%</Cet>
                    <Total>Total: {total}</Total>
                </TotalWrapper>
            <LineDivider/>
        </Container>
    );
}