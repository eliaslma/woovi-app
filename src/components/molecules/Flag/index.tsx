import React from 'react';

import {
    Container,
    FlagContentWrapper,
    FlagValueStrong,
    FlagTitle,
    TriangleShapeView
} from './styles';

const Flag = ({ cashBackValue, bestOption }: { cashBackValue?: string | null, bestOption?: true | undefined}) => {
    return(
        <Container>
            {bestOption ?
                <FlagContentWrapper>
                    <FlagValueStrong>{cashBackValue}:</FlagValueStrong>
                    <FlagTitle>Melhor opção de parcelamento</FlagTitle>
                </FlagContentWrapper>
                :
                <FlagContentWrapper>
                    <FlagValueStrong>🤑 {cashBackValue}</FlagValueStrong>
                    <FlagTitle>de volta no seu Pix na hora</FlagTitle>
                </FlagContentWrapper>}
            <TriangleShapeView />
        </Container>
    );
}

export default Flag;