import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
    Container
} from './styles';

export function Loader({color}: {color: string}){
    return(
        <Container>
            <ActivityIndicator color={color} size='small'/>
        </Container>
    );
}