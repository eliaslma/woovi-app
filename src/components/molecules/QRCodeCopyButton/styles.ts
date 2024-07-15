import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    background-color: #133A6F;
    padding: 7px 20px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const Icon = styled.Image``;