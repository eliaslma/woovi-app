import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    padding: 0 19px;
    width: 100%;
`;

export const Total = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(13)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const TotalWrapper = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 20px 0px;
    justify-content: space-between;
`;

export const Cet = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_600SemiBold';
`;