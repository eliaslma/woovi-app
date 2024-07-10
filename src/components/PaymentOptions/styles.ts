import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Nunito_800ExtraBold';
  text-align: center;
`;

export const PaymentOptionsContainer = styled.View`
  margin-bottom: 20px;
`;

interface OptionContainerProps {
  selected: boolean;
}

export const OptionContainer = styled.View<OptionContainerProps>`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => (props.selected ? '#f0f0f0' : '#fff')};
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #E5E5E5;
`;

export const SelectedOption = styled(OptionContainer)`
  background-color: #f0f0f0;
`;

export const OptionContent = styled.View`
  flex: 1;
`;

export const OptionLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const OptionTotal = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const OptionInterest = styled.Text`
  font-size: 12px;
  color: #007bff; /* Change to your desired color */
`;

export const OptionCheckbox = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const CheckboxIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const CashbackContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const CashbackIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const CashbackText = styled.Text`
  font-size: 12px;
  color: #007bff; /* Change to your desired color */
`;

export const CashbackValue = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #007bff; /* Change to your desired color */
`;

export const SecurityText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #777; /* Change to your desired color */
`;
