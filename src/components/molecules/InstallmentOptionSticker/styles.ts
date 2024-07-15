import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    z-index: 1;
`;

export const Title = styled.Text`
    font-family: 'Nunito_800ExtraBold';
    font-size: 18px;
    color: #4D4D4D;
`;

export const Sticker = styled.View`
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    position: 'absolute';
    top: 9px;
    left: 9px;
    background-color: #E5E5E5;
    padding: 0px 20px;
`;