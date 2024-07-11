import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    padding: 0px 18px;
    margin-top: 20px;
`;

export const QuoteWrapper = styled.View``;

export const QuoteTitleWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const QuoteInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const QuoteTitle = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_600SemiBold';
`;

export const QuoteValue = styled.Text`
    color: #4D4D4D;
    font-size: ${RFValue(12)}px;
    font-family: 'Nunito_800ExtraBold';
`;

export const EllipseIcon = styled.Image`
`;

export const LineSeparator = styled.Image`
    left: 7px;
    height: 16px;
`;