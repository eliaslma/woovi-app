import React from 'react';
import InstallmentOptionTitle from '../../atoms/InstallmentOptionTitle';
import CheckBox from '../../atoms/CheckBox';

import {
    Container
} from './styles';

const InstallmentOptionTab = ({...props}) => {
    return(
        <Container>
            <InstallmentOptionTitle {...props}/>
            <CheckBox selected={props.selected}/>
        </Container>
    );
}

export default InstallmentOptionTab;