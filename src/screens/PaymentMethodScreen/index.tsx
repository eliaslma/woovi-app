import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaymentOptions from '../../components/PaymentOptions';
import { ScrollView } from 'react-native';

import {
    Container,
    Logo,
    LogoWrapper,
} from './styles';

export function PaymentMethodScreen() {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
            <Container>
                <SafeAreaView style={{ flex: 1 }}>
                    <LogoWrapper>
                        <Logo source={require('./../../../assets/woovi-logo.png')} />
                    </LogoWrapper>
                    <PaymentOptions />
                </SafeAreaView>
            </Container>
        </ScrollView>
    );
}