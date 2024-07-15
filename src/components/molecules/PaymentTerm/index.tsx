import React from 'react';
import { getFormattedDate } from '../../../utils/dateTimeUtils';

import {
    Container,
    PaymentTermTitle,
    PaymentTermContent
} from './styles';

export function PaymentTerm() {
    return (
        <Container>
            <PaymentTermTitle>
                Prazo de pagamento:
            </PaymentTermTitle>
            <PaymentTermContent>
                {getFormattedDate()}
            </PaymentTermContent>
        </Container>
    );
}