import React from 'react';
import { PaymentTerm } from '../../molecules/PaymentTerm';
import { InstallmentDivision } from '../../organisms/InstallmentDivision';
import { TotalQuotes } from '../../molecules/TotalQuotes';
import { Identifier } from '../../molecules/Identifier';

import {
    Container
} from './styles';

const InstallmentOptionDetail = ({ ...props }) => {

    return (
        <Container>
            <PaymentTerm />
            <InstallmentDivision installment={props.installment} firstQuotePay={props.firstQuotePay} />
            <TotalQuotes total={props.installment.total} />
            <Identifier hash={props.hash}/>
        </Container>
    );

}

export default InstallmentOptionDetail;