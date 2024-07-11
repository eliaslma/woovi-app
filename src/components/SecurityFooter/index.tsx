import React from 'react';

import {
    Container,
    SecurityIcon,
    SecurityText
} from './styles';

export function SecurityFooter(){
    return(
        <Container>
            <SecurityIcon source={require('./../../../assets/secure.png')} />
            <SecurityText>Pagamento 100% seguro via:</SecurityText>
            <SecurityIcon source={require('./../../../assets/woovi-secondary-logo.png')} />
        </Container>
    );
}