import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #133A6F;
    padding: 0px 0px 0px 7px;
    border-radius: 5px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const CashBackContentWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const CashBackValueStrong = styled.Text`
    color: #FFFFFF;
    font-family: 'Nunito_800ExtraBold';
    font-size: 14px;
`;

export const CashBackTitle = styled.Text`
    color: #FFFFFF;
    font-family: 'Nunito_600SemiBold';
    font-size: 14px;
`;

export const TriangleShapeView = styled.View`
    width: 0;
    height: 0;
    background-color: transparent;
    border-style: solid;
    border-left-width: 15px;
    border-right-width: 15px;
    border-bottom-width: 30px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: white;
    transform: rotate(-90deg);
`;