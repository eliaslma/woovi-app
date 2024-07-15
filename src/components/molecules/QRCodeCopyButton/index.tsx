import React from 'react';
import { Alert } from 'react-native';

import {
    Container,
    Title,
    Icon
} from './styles';

const QRCodeCopyButton = () => {

    const copyToClipboard = () => {
        Alert.alert(
            'QRCode',
            'QRCode copiado para a área de transferência!',
            [{ text: 'OK' }]
        );
    };

    return(
        <Container onPress={copyToClipboard}>
            <Title>Clique para copiar QR CODE</Title>
            <Icon source={require('../../../../assets/copy.png')} />
        </Container>
    );
}

export default QRCodeCopyButton;