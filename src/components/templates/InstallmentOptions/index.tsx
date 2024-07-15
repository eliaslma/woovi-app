import React, { useState } from 'react';
import { DefaultButton } from '../../DefaultButton';
import { useNavigation } from '@react-navigation/native';
import { SecurityFooter } from '../../molecules/SecurityFooter';
import { PixPaymentOption } from '../../../types/PixPaymentOption';
import InstallmentOptionsContainer from '../../organisms/InstallmentOptionsContainer';

import {
    Container
} from './styles';
import { propsNavigationStack } from '../../../routes/Models';

const InstallmentOptions = ({ ...props }) => {

    const [selectedOption, setSelectedOption] = useState<PixPaymentOption>();
    const navigation = useNavigation<propsNavigationStack>();

    const handleOptionPress = (optionId: number) => {
        const selected = props.options.find((option: PixPaymentOption) => option.id === optionId);
        if (selected) {
            setSelectedOption(selected);
        }
    };

    const renderPaymentOptions = (options: PixPaymentOption[], title: string, startIndex: number) => {
        return (
            <InstallmentOptionsContainer
                options={options}
                title={title}
                startIndex={startIndex}
                handleOptionPress={handleOptionPress}
                selectedOption={selectedOption?.id}
            />
        );
    }

    const handleGoPaymentDetails = () => {
        if (selectedOption) {
            navigation.navigate('DetailMethodScreen', selectedOption);
        }
    }

    return (
        <Container>
            {renderPaymentOptions([props.options[0]], 'Pix', 0)}
            {renderPaymentOptions(props.options.slice(1), 'Pix Parcelado', 1)}
            <DefaultButton title="continuar" onPress={handleGoPaymentDetails} />
            <SecurityFooter/>
        </Container>
    );
}

export default InstallmentOptions;