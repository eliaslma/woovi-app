import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaymentOptions from '../../components/PaymentOptions';

import {
    Container
} from './styles';

export function PaymentMethodScreen() {
    return (

        <Container>
            <SafeAreaView edges={['top']} style={{ flex: 1 }}>
                <PaymentOptions />
            </SafeAreaView>
        </Container>
    );
}