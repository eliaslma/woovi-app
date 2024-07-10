import React, { useState } from 'react';
import {
  Container,
  Title,
  PaymentOptionsContainer,
  OptionContainer,
  SelectedOption,
  OptionContent,
  OptionLabel,
  OptionTotal,
  OptionInterest,
  OptionCheckbox,
  CheckboxIcon,
  CashbackContainer,
  CashbackIcon,
  CashbackText,
  CashbackValue,
  SecurityText,
} from './styles';
import { TouchableOpacity } from 'react-native';

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const paymentOptions = [
    {
      id: 1,
      label: '1x R$ 30.500,00',
      total: 'R$ 30.500,00',
      cashback: 'Ganhe 3% de Cashback',
      cashbackValue: 'R$ 300,00',
    },
    {
      id: 2,
      label: '2x R$ 15.300,00',
      total: 'R$ 30.600,00',
      interest: null,
    },
    {
      id: 3,
      label: '3x R$ 10.196,66',
      total: 'R$ 30.620,00',
      interest: null,
    },
    {
      id: 4,
      label: '4x R$ 7.725,00',
      total: 'R$ 30.900,00',
      interest: '-3% de juros: Melhor opção de parcelamento',
    },
    {
      id: 5,
      label: '5x R$ 6.300,00',
      total: 'R$ 31.500,00',
      interest: null,
    },
    {
      id: 6,
      label: '6x R$ 5.283,33',
      total: 'R$ 31.699,98',
      interest: null,
    },
    {
      id: 7,
      label: '7x R$ 4.542,85',
      total: 'R$ 31.800,00',
      interest: null,
    },
  ];

  const handleOptionPress = (optionId: number) => {
    setSelectedOption(optionId);
  };

  return (
    <Container>
      <Title>João, como você quer pagar?</Title>
      <PaymentOptionsContainer>
        {paymentOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleOptionPress(option.id)}
          >
            <OptionContainer selected={selectedOption === option.id}>
              <OptionContent>
                <OptionLabel>{option.label}</OptionLabel>
                <OptionTotal>Total: {option.total}</OptionTotal>
                {option.interest && (
                  <OptionInterest>{option.interest}</OptionInterest>
                )}
                {option.cashback && (
                  <CashbackContainer>
                    {/* <CashbackIcon source={require('./cashback-icon.png')} /> */}
                    <CashbackText>{option.cashback}</CashbackText>
                    <CashbackValue>{option.cashbackValue}</CashbackValue>
                  </CashbackContainer>
                )}
              </OptionContent>
              <OptionCheckbox>
                {/* {selectedOption === option.id && (
                  <CheckboxIcon source={require('./checkbox-checked.png')} />
                )} */}
              </OptionCheckbox>
            </OptionContainer>
          </TouchableOpacity>
        ))}
      </PaymentOptionsContainer>
      <SecurityText>Pagamento 100% seguro via: Woovi</SecurityText>
    </Container>
  );
};

export default PaymentOptions;
