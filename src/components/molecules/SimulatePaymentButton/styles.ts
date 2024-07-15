import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    padding: 0 19px;
    margin-top: 20px;
`;

export const SimulateButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #03D69D;
    padding: 7px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 5px;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_700Bold';
`;