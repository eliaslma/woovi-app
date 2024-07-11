import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    background-color: #133A6F;
    width: 100%;
    padding: 12px 0px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const ButtonTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_600SemiBold';
    text-align: center;
    color: #FFFFFF;
`;