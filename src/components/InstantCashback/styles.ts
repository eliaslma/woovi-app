import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background-color: 'rgba(3, 214, 157, .2)';
`;

export const LeftContainer = styled.View`
    flex: 1;
    padding: 12px;
`;

export const Subtitle = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const CashBackValueWrapper = styled.View`
    padding: 16px;
    background-color: #03D69D;
    border-radius: 10px;
    height: 100%;
    align-items: center;
    flex-direction: row;
`;

export const CashBackValue = styled.Text`
    color: #FFFFFF;
    font-family: 'Nunito_800ExtraBold';
`;

export const Title = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_800ExtraBold';
`;