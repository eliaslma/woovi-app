import React from 'react';

import {
    CheckboxIcon
} from './styles';

const CheckBox = ({ selected }: { selected: boolean }) => {

    if (selected) {
        return (
            <CheckboxIcon source={require('../../../../assets/checkbox-checked.png')} />
        )
    }

    return (
        <CheckboxIcon source={require('../../../../assets/ellipse-raw.png')} />
    );
}

export default CheckBox;