import React from 'react';

import {
    Container,
    Title
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { propsNavigationStack } from '../../routes/Models';

export function GoBackButton(){

    const navigation = useNavigation<propsNavigationStack>()

    return(
        <Container onPress={() => {navigation.navigate('PaymentMethodScreen')}}>
            <Title>Voltar ao início</Title>
        </Container>
    );
}