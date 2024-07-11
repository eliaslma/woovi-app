import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    align-items: center;
`;

export const PaymentTermTitle = styled.Text`
    color: #B2B2B2;
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_600SemiBold';
`;
export const PaymentTermContent = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_800ExtraBold';
`;