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

import { PixPaymentOption } from '../../../types/PixPaymentOption';

export function InstallmentDivision({ installment, firstQuotePay }: { installment: PixPaymentOption, firstQuotePay?: boolean }) {

    return (
        <Container>
            {Array.from({ length: installment.quote }).map((_, index) => (
                <QuoteWrapper key={`quote_${index}`} style={{ top: index && 0 }}>
                    <QuoteInfo>
                        {index === 0 ?
                            <QuoteTitleWrapper>
                                {firstQuotePay ?
                                    <EllipseIcon
                                        source={require('../../../../assets/checkbox-checked.png')} style={{ width: 16, height: 16 }} /> :
                                    <EllipseIcon source={require('../../../../assets/ellipse-checked.png')} />}
                                {installment.quote === 1 ? <QuoteTitle>Pix à vista</QuoteTitle> : <QuoteTitle>1ª entrada no Pix</QuoteTitle>}
                            </QuoteTitleWrapper>
                            : <QuoteTitleWrapper>
                                {firstQuotePay ? <EllipseIcon source={require('../../../../assets/ellipse-checked.png')} /> : <EllipseIcon source={require('../../../../assets/ellipse.png')} />}
                                <QuoteTitle>{index + 1}ª no cartão</QuoteTitle>
                            </QuoteTitleWrapper>
                        }
                        <QuoteValue>{installment.quote_value}</QuoteValue>
                    </QuoteInfo>
                    {index != installment.quote - 1
                        && <LineSeparator source={require('../../../../assets/line-separator.png')} />}
                </QuoteWrapper>
            ))}
        </Container>
    );
}