import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const IdentifierTitle = styled.Text`
    color: #B2B2B2;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const IdentifierHash = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_800ExtraBold';
`;