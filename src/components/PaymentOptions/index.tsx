import React, { useState } from 'react';
import {
    Container,
    Title,
    PaymentOptionsContainer,
    OptionContainer,
    OptionContent,
    OptionTotal,
    OptionCheckbox,
    OptionTotalWrapper,
    CheckboxIcon,
    CashbackContainer,
    FirstOptionContainer,
    CashbackText,
    OptionQuote,
    OptionQuoteTotal,
    PaymentOptionsTitle,
    PaymentOptionsTitleWrapper,
    ButtonWrapper,
} from './styles';

import { TouchableOpacity } from 'react-native';
import { CashBackSticker } from '../CashBackSticker';
import { DefaultButton } from '../DefaultButton';
import { useNavigation } from '@react-navigation/native';
import { propsNavigationStack } from '../../routes/Models';
import { SecurityFooter } from '../SecurityFooter';

export interface PixQuoteType {
    id: number;
    quote: number;
    quote_value: string;
    total: string;
    cashback?: string;
    cashbackValue?: string;
    bestOption?: boolean;
}

const PaymentOptions = () => {

    const [selectedOption, setSelectedOption] = useState<number | null>(1);
    const navigation = useNavigation<propsNavigationStack>();

    const uniquePix: PixQuoteType =
    {
        id: 1,
        quote: 1,
        quote_value: 'R$ 30.500,00',
        total: 'R$ 30.500,00',
        cashback: 'Ganhe 3% de Cashback',
        cashbackValue: 'R$ 300,00',
    };

    const pixQuotes = [
        {
            id: 2,
            quote: 2,
            quote_value: 'R$ 15.300,00',
            total: 'R$ 30.600,00',
        },
        {
            id: 3,
            quote: 3,
            quote_value: 'R$ 10.196,66',
            total: 'R$ 30.620,00',
        },
        {
            id: 4,
            quote: 4,
            quote_value: 'R$ 7.725,00',
            total: 'R$ 31.500,00',
            bestOption: true
        },
        {
            id: 5,
            quote: 5,
            quote_value: 'R$ 6.300,00',
            total: 'R$ 30.900,00',
        },
        {
            id: 6,
            quote: 6,
            quote_value: 'R$ 5.283,33',
            total: 'R$ 31.699,98',
        },
        {
            id: 7,
            quote: 7,
            quote_value: 'R$ 4.542,85',
            total: 'R$ 31.800,00',
        },
    ] as PixQuoteType[];

    const handleShowPaymentDetails = () => {
        if (selectedOption === 1) {
            navigation.navigate('DetailMethodScreen', uniquePix);
        } else {
            const quote = pixQuotes.find(item => item.id === selectedOption) as PixQuoteType;
            navigation.navigate('DetailMethodScreen', quote);
        }
    }

    const handleOptionPress = (optionId: number) => {
        setSelectedOption(optionId);
    };

    return (
        <Container>
            <Title>Elias, como você quer pagar?</Title>
            <PaymentOptionsContainer>
                <PaymentOptionsTitleWrapper>
                    <PaymentOptionsTitle>
                        Pix
                    </PaymentOptionsTitle>
                </PaymentOptionsTitleWrapper>
                <TouchableOpacity
                    key={uniquePix.id}
                    onPress={() => handleOptionPress(uniquePix.id)}>
                    <FirstOptionContainer
                        selected={selectedOption === uniquePix.id}>
                        <OptionContent>
                            <OptionTotalWrapper>
                                <OptionCheckbox>
                                    <OptionQuote>{uniquePix.quote}x</OptionQuote>
                                    <OptionQuoteTotal>{uniquePix.total}</OptionQuoteTotal>
                                </OptionCheckbox>

                                {selectedOption === uniquePix.id ? 
                                    <CheckboxIcon source={require('./../../../assets/checkbox-checked.png')} /> : <CheckboxIcon source={require('./../../../assets/ellipse-raw.png')} />
                                }
                            </OptionTotalWrapper>
                            {uniquePix.cashback && (
                                <CashbackContainer>
                                    <CashbackText>{uniquePix.cashback}</CashbackText>
                                    <CashBackSticker cashBackValue={uniquePix.cashbackValue} />
                                </CashbackContainer>
                            )}

                        </OptionContent>
                    </FirstOptionContainer>
                </TouchableOpacity>
            </PaymentOptionsContainer>
            <PaymentOptionsContainer>
                <PaymentOptionsTitleWrapper>
                    <PaymentOptionsTitle>
                        Pix Parcelado
                    </PaymentOptionsTitle>
                </PaymentOptionsTitleWrapper>
                {pixQuotes.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        onPress={() => handleOptionPress(option.id)}>
                        <OptionContainer
                            selected={selectedOption === option.id}
                            lastOption={option.id === pixQuotes.length + 1}
                            firstOption={option.id === 2}>
                            <OptionContent>
                                <OptionTotalWrapper>
                                    <OptionCheckbox>
                                        <OptionQuote>{option.quote}x</OptionQuote>
                                        <OptionQuoteTotal>{option.quote_value}</OptionQuoteTotal>
                                    </OptionCheckbox>
                        
                                    {selectedOption === option.id ? 
                                    <CheckboxIcon source={require('./../../../assets/checkbox-checked.png')} /> : <CheckboxIcon source={require('./../../../assets/ellipse-raw.png')} />
                                }
                                </OptionTotalWrapper>
                                {option.total && (
                                    <OptionTotal>Total: {option.total}</OptionTotal>
                                )}
                                {option.bestOption && (
                                    <CashBackSticker bestOption={option.bestOption} />
                                )}
                            </OptionContent>

                        </OptionContainer>
                    </TouchableOpacity>
                ))}
            </PaymentOptionsContainer>
            {selectedOption &&
                <ButtonWrapper>
                    <DefaultButton title="Continuar" onPress={handleShowPaymentDetails} />
                </ButtonWrapper>}
            <SecurityFooter />
        </Container>
    );
};

export default PaymentOptions;
