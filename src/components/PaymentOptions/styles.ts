import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface OptionContainerProps {
  selected: boolean;
  lastOption?: boolean;
  firstOption?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Nunito_800ExtraBold';
  text-align: center;
`;

export const PaymentOptionsContainer = styled.View`
  width: 100%;
`;

export const FirstOptionContainer = styled.View<OptionContainerProps>`
   flex-direction: row;
    align-items: center;
    padding: 15px;
    background-color: ${(props) => (props.selected ? 'rgba(3, 214, 157, .05)' : '#fff')};
    border: 1px #E5E5E5;
    border-radius: 10px;
    margin-bottom: 20px;
    ${(props) => props.selected && css`
    border: 2px #03D69D;
  `};
`

export const OptionContainer = styled.View<OptionContainerProps>`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => (props.selected ? 'rgba(3, 214, 157, .05)' : '#fff')};
  border: 1px #E5E5E5;
  
  ${(props) => props.selected && css`
    border: 2px #03D69D;
  `};
  
  ${(props) => props.selected && props.lastOption && css`
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 2px #03D69D;
        border-bottom-color: #03D69D;
    `};

    ${(props) => props.lastOption && css`
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    `};

    ${(props) => props.firstOption && css`
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    `};

`;

export const OptionContent = styled.View`
  flex: 1;
  gap: 1px;
`;

export const OptionTotalWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

export const OptionQuote = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Nunito_800ExtraBold';
  color: #4D4D4D;
`;

export const OptionQuoteTotal = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Nunito_600SemiBold';
  color: #4D4D4D;
`;

export const OptionTotal = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-bottom: 5px;
  font-family: 'Nunito_600SemiBold';
  color: #AFAFAF;
`;

export const OptionCheckbox = styled.View`
  gap: 4px;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const CashbackContainer = styled.View`
  flex-direction: column;
  gap: 6px;
`;


export const CashbackText = styled.Text`
  font-size: 12px;
  color: #03D69D;
`;

export const PaymentOptionsTitleWrapper = styled.View`
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  position: 'absolute';
  top: 9px;
  left: 9px;
  z-index: 1;
  max-width: 150px;
  background-color: #E5E5E5;
`;

export const PaymentOptionsTitle = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 18px;
  color: #4D4D4D;
`;


export const ButtonWrapper = styled.View`
  margin-top: 32px;
  align-items: center;
  width: 100%;
`;