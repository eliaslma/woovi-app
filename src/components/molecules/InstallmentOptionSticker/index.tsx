import React from 'react';

import {
    Container,
    Sticker,
    Title
} from './styles';

export function InstallmentOptionSticker({ ...props }) {
    return (
        <Container>
            <Sticker>
                <Title>
                    {props.title}
                </Title>
            </Sticker>
        </Container>
    );
}