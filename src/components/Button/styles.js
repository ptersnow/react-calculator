import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);

    border-radius: 999px;
    color: #EBEBEB;
    font-size: 24px;
    font-weight: 700;
    
    width: 64px;
    height: 64px;

    
    &:hover {
        opacity: 0.6;
    }
`