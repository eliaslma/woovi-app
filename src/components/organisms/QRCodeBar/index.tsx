import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Dimensions } from 'react-native';
import QRCodeCopyButton from '../../molecules/QRCodeCopyButton';

const widthScreen = Dimensions.get('window').width;

import {
    Container,
    QRCodeLine
} from './styles';

const QRCodeBar = ({ hash }: { hash: string }) => {
    return (
        <Container>
            <QRCodeLine>
                <QRCode size={widthScreen * .7} value={hash} />
            </QRCodeLine>
            <QRCodeCopyButton/>
        </Container>
    );
}

export default QRCodeBar;