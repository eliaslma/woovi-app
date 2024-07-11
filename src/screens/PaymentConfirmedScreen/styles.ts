import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`;

export const LogoWrapper = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 8px;
`;

export const Logo = styled.Image`
  width: 123px;
  height: 36px;
  text-align: center;
`;

export const ConfirmPaymentWrapper = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 0px 19px;
`;

export const ConfirmIcon = styled.Image``;

export const PaymentWraper = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const PaymentTitle = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(16)}px;
    font-family: 'Nunito_800ExtraBold';
`;

export const InfoPaymentTitle = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_800ExtraBold';
`;

export const InfoPaymentContent = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const CashBackTitle = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(16)}px;
    font-family: 'Nunito_800ExtraBold';

`;