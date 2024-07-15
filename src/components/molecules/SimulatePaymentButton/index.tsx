import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
    SimulateButton,
    Title,
    Container
} from './styles';

export function SimulatePaymentButton({ handleSimulatePayment, isLoading }: { handleSimulatePayment: () => void, isLoading?: boolean }) {
    return (
        <Container>
            <SimulateButton onPress={handleSimulatePayment} disabled={isLoading}>
                <Title>Simular Pagamento</Title>
                {isLoading && <ActivityIndicator size={'small'} color={'#FFFFFF'} />}
            </SimulateButton>
        </Container>
    );
}