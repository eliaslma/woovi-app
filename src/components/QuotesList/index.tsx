import React from 'react';

import {
    Container,
    QuoteWrapper,
    QuoteTitleWrapper,
    QuoteInfo,
    EllipseIcon,
    QuoteTitle,
    QuoteValue,
    LineSeparator
} from './styles';

import { PixQuoteType } from '../PaymentOptions';

export function QuotesList({ params, firstQuotePay }: { params: PixQuoteType, firstQuotePay?: boolean }) {
    return (
        <Container>
            {Array.from({ length: params.quote }).map((_, index) => (
                <QuoteWrapper key={`quote_${index}`}>
                    <QuoteInfo>
                        {index === 0 ?
                            <QuoteTitleWrapper>
                                {firstQuotePay ?
                                    <EllipseIcon
                                        source={require('./../../../assets/ellipse-pay.png')} /> :
                                    <EllipseIcon source={require('./../../../assets/ellipse-checked.png')} />}
                                <QuoteTitle>1ª entrada no Pix</QuoteTitle>
                            </QuoteTitleWrapper>
                            : <QuoteTitleWrapper>
                                <EllipseIcon source={require('./../../../assets/ellipse.png')} />
                                <QuoteTitle>{index + 1}ª no cartão</QuoteTitle>
                            </QuoteTitleWrapper>
                        }
                        <QuoteValue>{params.quote_value}</QuoteValue>
                    </QuoteInfo>
                    {index != params.quote - 1
                        && <LineSeparator source={require('./../../../assets/line-separator.png')} />}
                </QuoteWrapper>
            ))}
        </Container>
    );
}