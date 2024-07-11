import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Logo = styled.Image``;

export const LogoWrapper = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 16px;
`;

export const QRCodeWrapper = styled.View`
    width: 100%;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
`;

export const QRCodeLine = styled.View`
    border: 1px solid #03D69D;
    border-radius: 10px;
    padding: 10px;
`

export const CopyButtonWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: ${RFValue(16)}px;
    margin-bottom: ${RFValue(15)}px;
`;

export const CopyButton = styled.TouchableOpacity`
    background-color: #133A6F;
    padding: 7px 20px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const CopyButtonTitle = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const CopyIcon = styled.Image``;



export const QuotesList = styled.View`
    padding: 0px 18px;
    margin-top: 20px;
`;


export const Line = styled.View`
    height: 1px;
    margin: 19px;
    background-color: #E5E5E5;
`;


export const TestButtonWrapper = styled.View`
    padding: 0 19px;
    margin-top: 20px;
`;

export const TestButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #03D69D;
    padding: 7px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 5px;
`;

export const TestButtonTitle = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(10)}px;
    font-family: 'Nunito_700Bold';
`;