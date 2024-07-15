import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoBackButton } from '../../components/GoBackButton';
import * as Notifications from 'expo-notifications';
import LottieView from 'lottie-react-native'

import {
    Container,
    LogoWrapper,
    Logo,
    ConfirmPaymentWrapper,
    PaymentTitle,
    InfoPaymentContent,
    InfoPaymentTitle,
    CashBackTitle,
    LineWrapper
} from './styles';

import { useRoute } from '@react-navigation/native';
import { getFormattedDate } from '../../utils/dateTimeUtils';
import { LineDivider } from '../../components/atoms/LineDivider';
import { SecurityFooter } from '../../components/molecules/SecurityFooter';
import { InstantCashback } from '../../components/InstantCashback';

interface ConfirmedAddressProps {
    hash: string;
    total: string;
    cashback: string;
    name?: string;
}

export function PaymentConfirmedScreen() {

    const route = useRoute();
    const params = route.params as ConfirmedAddressProps;

    const callNotification = async () => {

        if(params.cashback){
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "♾️ WooviBank",
                    body: `Você recebeu um Pix de ${params.cashback} da Woovi 🤑`,
                },
                trigger: {
                    seconds: 5
                }
            })
        }
    }

    useEffect(() => {
        callNotification();
    },[])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Container>
                <SafeAreaView style={{ flex: 1 }}>
                    <LogoWrapper>
                        <Logo source={require('./../../../assets/woovi-logo.png')} />
                    </LogoWrapper>
                    <ConfirmPaymentWrapper>
                        <LottieView autoPlay loop={false} style={{ width: '100%', height: 150}} source={require('../../../assets/checkbox-animation.json')}/>
                    </ConfirmPaymentWrapper>
                    <ConfirmPaymentWrapper>
                        <PaymentTitle>
                            Pagamento confirmado
                        </PaymentTitle>
                    </ConfirmPaymentWrapper>
                    <ConfirmPaymentWrapper>
                        <InfoPaymentTitle>Valor pago:</InfoPaymentTitle>
                        <InfoPaymentContent>{params.total}</InfoPaymentContent>
                    </ConfirmPaymentWrapper>
                    <ConfirmPaymentWrapper>
                        <InfoPaymentTitle>Destinatário:</InfoPaymentTitle>
                        <InfoPaymentContent>{params.name ? params.name : 'Elias Lima'}</InfoPaymentContent>
                    </ConfirmPaymentWrapper>
                    <ConfirmPaymentWrapper>
                        <InfoPaymentTitle>Data do pagamento:</InfoPaymentTitle>
                        <InfoPaymentContent>{getFormattedDate()}</InfoPaymentContent>
                    </ConfirmPaymentWrapper>
                    <ConfirmPaymentWrapper>
                        <InfoPaymentTitle>Identificador</InfoPaymentTitle>
                        <InfoPaymentContent>{params.hash}</InfoPaymentContent>
                    </ConfirmPaymentWrapper>
                    <LineWrapper>
                        <LineDivider />
                    </LineWrapper>
                    {params.cashback &&
                        <>
                            <ConfirmPaymentWrapper>
                                <CashBackTitle>Parabéns! Você ganhou Cashback 🎉</CashBackTitle>
                            </ConfirmPaymentWrapper>
                            <ConfirmPaymentWrapper>
                                <InstantCashback cashBackTotal={params.cashback} />
                            </ConfirmPaymentWrapper>
                        </>
                    }
                    <ConfirmPaymentWrapper>
                        <GoBackButton />
                    </ConfirmPaymentWrapper>
                    <SecurityFooter />
                </SafeAreaView>
            </Container>
        </ScrollView>

    );
}