import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreensTitle } from '../../components/ScreensTitle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, ScrollView, Alert, ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { SecurityFooter } from '../../components/SecurityFooter';
import { showMessage } from "react-native-flash-message";
import { propsNavigationStack } from '../../routes/Models';
import { QuotesList } from '../../components/QuotesList';
import { generateHash } from '../../utils/hashUtils';
import { Identifier } from '../../components/Identifier';

import {
    Container,
    Logo,
    LogoWrapper,
    QRCodeWrapper,
    QRCodeLine,
    CopyButton,
    CopyButtonWrapper,
    CopyButtonTitle,
    CopyIcon,
    Line,
    TestButtonWrapper,
    TestButtonTitle,
    TestButton
} from './styles';

import { PixQuoteType } from '../../components/PaymentOptions';
import { PaymentTerm } from '../../components/PaymentTerm';
import { TotalQuotes } from '../../components/TotalQuotes';

const widthScreen = Dimensions.get('window').width;

export function DetailMethodScreen() {

    const route = useRoute();
    const [loading, setLoading] = useState<boolean>(false);
    const [hash, setHash] = useState<string>();
    const navigation = useNavigation<propsNavigationStack>();

    const params = route.params as PixQuoteType;

    const title = params.quote !== 1 
        ? `Elias, pague a entrada de ${'\n'} ${params.quote_value} pelo Pix` 
        : `João, pague sua compra de ${'\n'} ${params.quote_value} pelo Pix`;

    const handlePaymentSuccess = (navigateTo: any, navParams: any, duration: number) => {
        showMessage({
            backgroundColor: '#03D69D',
            message: "Já identificamos seu pagamento.",
            description: "Pagamento via PIX realizado com sucesso!",
            type: "success",
            duration: duration
        });

        navigation.navigate(navigateTo, navParams);
        setLoading(false);
    };

    const handleSimulatePayment = () => {
        setLoading(true);

        setTimeout(() => {
            if (params.quote === 1) {
                handlePaymentSuccess('PaymentConfirmedScreen', { total: params.total, hash, cashback: params.cashbackValue }, 1500);
            } else {
                handlePaymentSuccess('PayScreen', params, 3000);
            }
        }, 1500);
    };

    const copyToClipboard = () => {
        Alert.alert(
            'QRCode',
            'QRCode copiado para a área de transferência!',
            [{ text: 'OK' }]
        );
    };

    useEffect(() => {
        setHash(generateHash());
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Container>
                <SafeAreaView style={{ flex: 1 }}>
                    <LogoWrapper>
                        <Logo source={require('./../../../assets/woovi-logo.png')} />
                    </LogoWrapper>
                    <ScreensTitle title={title} />
                    <QRCodeWrapper>
                        <QRCodeLine>
                            <QRCode size={widthScreen * .7} value={hash} />
                        </QRCodeLine>
                    </QRCodeWrapper>
                    <CopyButtonWrapper>
                        <CopyButton onPress={copyToClipboard}>
                            <CopyButtonTitle>Clique para copiar QR CODE</CopyButtonTitle>
                            <CopyIcon source={require('./../../../assets/copy.png')} />
                        </CopyButton>
                    </CopyButtonWrapper>
                    <PaymentTerm />
                    <QuotesList params={params} />
                    <Line />
                    <TotalQuotes total={params.total} />
                    <Line />
                    {hash && <Identifier hash={hash} />}
                    <TestButtonWrapper>
                        <TestButton onPress={handleSimulatePayment} disabled={loading}>
                            <TestButtonTitle>Simular pagamento via PIX</TestButtonTitle>
                            {loading && <ActivityIndicator size={'small'} color={'#FFFFFF'} />}
                        </TestButton>
                    </TestButtonWrapper>
                    <SecurityFooter />
                </SafeAreaView>
            </Container>
        </ScrollView>
    );
}
