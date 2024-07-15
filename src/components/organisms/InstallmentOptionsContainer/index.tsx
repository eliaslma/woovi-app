import React from 'react';
import Flag from '../../molecules/Flag';
import { PixPaymentOption } from '../../../types/PixPaymentOption';
import { InstallmentOptionSticker } from '../../molecules/InstallmentOptionSticker';
import InstallmentOptionTab from '../../molecules/InstallmentOptionTab';
import CashbackTitle from '../../atoms/CashbackTitle';
import InstallmentTotal from '../../atoms/InstallmentTitle';

import {
    Container,
    InstallmentOptionCard
} from './styles';

const InstallmentOptionsContainer = ({ ...props }) => {

    return (
        <Container>
            <InstallmentOptionSticker title={props.title} />
            {props.options.map((option: PixPaymentOption, index: number) => (
                <InstallmentOptionCard
                    firstOption={index === 0} key={option.id}
                    onPress={() => props.handleOptionPress(option.id)}
                    selected={props.selectedOption === option.id}
                    lastOption={index === props.options.length - 1}>
                    <InstallmentOptionTab 
                        selected={props.selectedOption === option.id}
                        value={option.quote_value} 
                        multiplier={option.quote}/>
                    {props.startIndex != 0 && <InstallmentTotal total={option.total}/>}
                    {option?.cashback && 
                        <CashbackTitle percentValue={option.cashback}/>
                    }
                    {option.cashbackValue && 
                        <Flag
                            cashBackValue={option.cashbackValue}
                            bestOption={option.bestOption || undefined}
                        />
                    }
                </InstallmentOptionCard>
            ))}
        </Container>
    );
}

export default InstallmentOptionsContainer;