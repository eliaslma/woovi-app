import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 20px;
`;

interface InstallmentOptionCardProps {
    selected: boolean;
    lastOption?: boolean;
    firstOption?: boolean;
}

export const InstallmentOptionCard = styled.TouchableOpacity<InstallmentOptionCardProps>`
    padding: 15px;
    background-color: ${(props) => (props.selected ? 'rgba(3, 214, 157, 0.05)' : '#fff')};
    border: 1px solid #E5E5E5;
    gap: 5px;
    
    ${(props) => props.selected && css`
        border: 2px solid #03D69D;
    `};
    
    ${(props) => props.selected && props.lastOption && css`
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 2px solid #03D69D;
        border-bottom-color: #03D69D;
    `};

    ${(props) => props.lastOption && css`
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    `};

    ${(props) => props.firstOption && css`
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    `};
`;