import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/templates/Header';
import { useRoute } from '@react-navigation/native';
import { PixPaymentOption } from '../../types/PixPaymentOption';
import QRCodeBar from '../../components/organisms/QRCodeBar';
import { generateHash } from '../../utils/hashUtils';
import InstallmentOptionDetail from '../../components/templates/InstallmentOptionDetail';
import { SecurityFooter } from '../../components/molecules/SecurityFooter';
import { SimulatePaymentButton } from '../../components/molecules/SimulatePaymentButton';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';

import {
    Container
} from './styles';
import { propsNavigationStack } from '../../routes/Models';


const PaymentMethodDetails = () => {

    const route = useRoute();
    const installment = route.params as PixPaymentOption;
    const [isLoading, setLoading] = useState<boolean>()
    const [hash, setHash] = useState<string>();
    const navigation = useNavigation<propsNavigationStack>();

    const headerTitle = installment.quote !== 1
        ? `Elias, pague a entrada de ${'\n'} ${installment.quote_value} pelo Pix`
        : `Elias, pague sua compra de ${'\n'} ${installment.quote_value} pelo Pix`;

    const handlePaymentSuccess = (navigateTo: any, navParams: any, duration: number, notify?: boolean) => {
        if (notify) {
            showMessage({
                backgroundColor: '#03D69D',
                message: "Já identificamos seu pagamento.",
                description: "Pagamento via PIX realizado com sucesso!",
                type: "success",
                duration: duration
            });
        }

        navigation.navigate(navigateTo, navParams);
        setLoading(false);
    };

    const handleSimulatePayment = () => {
        setLoading(true);

        setTimeout(() => {
            if (installment.quote === 1) {
                handlePaymentSuccess('PaymentConfirmedScreen', { total: installment.total, hash, cashback: installment.cashbackValue }, 1500);
            } else {
                handlePaymentSuccess('PayScreen', { installment, hash }, 3000, true);
            }
        }, 1500);
    };


    useEffect(() => {
        setHash(generateHash());
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#FFFFFF' }}>
            <Container>
                <Header title={headerTitle} />
                {hash && <QRCodeBar hash={hash} />}
                <InstallmentOptionDetail installment={installment} hash={hash && hash} />
                <SimulatePaymentButton handleSimulatePayment={handleSimulatePayment} isLoading={isLoading} />
                <SecurityFooter />
            </Container>
        </ScrollView>
    );
}

export default PaymentMethodDetails;