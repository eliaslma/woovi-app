import React from 'react';

import {
    Container,
    ButtonTitle
} from './styles';
import { ActivityIndicator } from 'react-native';

export function DefaultButton({title, onPress, isLoading, disabled}: {title: string, onPress?: () => void, isLoading?: boolean, disabled?: boolean}){
    return(
        <Container onPress={onPress} disabled={disabled}>
            <ButtonTitle>{title}</ButtonTitle>
            {isLoading && <ActivityIndicator size="small" color="#FFFFFF"/>}
        </Container>
    );
}