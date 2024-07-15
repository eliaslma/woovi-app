import React from 'react';
import { PixPaymentOption } from '../../types/PixPaymentOption';
import Header from '../../components/templates/Header';
import InstallmentOptions from '../../components/templates/InstallmentOptions';
import { ScrollView } from 'react-native';

import {
    Container
} from './styles';

const PaymentMethod = () => {

    const options: PixPaymentOption[] = [
        {
            id: 1,
            quote: 1,
            quote_value: 'R$ 30.500,00',
            total: 'R$ 30.500,00',
            cashback: 3,
            cashbackValue: 'R$ 300,00',
        },
        {
            id: 2,
            quote: 2,
            quote_value: 'R$ 15.300,00',
            total: 'R$ 30.600,00',
        },
        {
            id: 3,
            quote: 3,
            quote_value: 'R$ 10.196,66',
            total: 'R$ 30.620,00',
        },
        {
            id: 4,
            quote: 4,
            quote_value: 'R$ 7.725,00',
            total: 'R$ 30.900,00',
            bestOption: true,
            cashbackValue: '-3% de juros',
        },
        {
            id: 5,
            quote: 5,
            quote_value: 'R$ 6.300,00',
            total: 'R$ 31.500,00',
        },
        {
            id: 6,
            quote: 6,
            quote_value: 'R$ 5.283,33',
            total: 'R$ 31.699,98',
        },
        {
            id: 7,
            quote: 7,
            quote_value: 'R$ 4.542,85',
            total: 'R$ 31.800,00',
        },
    ];

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title="Elias, Como voce quer pagar?" />
                <InstallmentOptions options={options} />
            </ScrollView>
        </Container>
    );
}

export default PaymentMethod;