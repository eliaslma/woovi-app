import React from 'react';

import {
    Total
} from './styles';

const InstallmentTotal = ({ total }: { total: string }) => {
    return (
        <Total>
            Total: {total}
        </Total>
    );
}

export default InstallmentTotal;