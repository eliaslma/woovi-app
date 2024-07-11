import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    margin-right: 16px;
    border-radius: 10px;
    background-color: #03D69D;
    margin: 19px;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_600SemiBold';
`;