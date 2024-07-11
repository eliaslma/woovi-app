import React from 'react';

import {
    Title
} from './styles';

export function ScreensTitle({title}: {title: string}){
    return(
        <Title>
            {title}
        </Title>
    );
}
