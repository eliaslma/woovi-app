import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 19px;
    align-items: center;
`;

export const Total = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(13.5)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const Cet = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_600SemiBold';
`;