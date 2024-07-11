import React from 'react';

import {
    Container,
    IdentifierTitle,
    IdentifierHash
} from './styles';

export function Identifier({hash}: {hash: string}){
    return(
        <Container>
            <IdentifierTitle>Identificador:</IdentifierTitle>
            <IdentifierHash>{hash}</IdentifierHash>
        </Container>
    );
}