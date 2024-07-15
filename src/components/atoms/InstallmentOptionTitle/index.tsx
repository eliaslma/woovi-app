import React from 'react';

import {
    Container,
    Value,
    Multiplier,
} from './styles';

const InstallmentOptionTitle = ({...props}) => {
    return(
        <Container>
            <Multiplier>{props.multiplier}x </Multiplier>
            <Value>{props.value}</Value>
        </Container>
    );
}

export default InstallmentOptionTitle;