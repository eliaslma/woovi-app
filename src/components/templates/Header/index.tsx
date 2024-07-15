import React from 'react';

import {
    Container,
    Logo,
    Title
} from './styles';

const Header = ({ title }: { title: string }) => {
    return (
        <Container>
            <Logo source={require('../../../../assets/woovi-logo.png')} />
            <Title>{title}</Title>
        </Container>
    );
}

export default Header;