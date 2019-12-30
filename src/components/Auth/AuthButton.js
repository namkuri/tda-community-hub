import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: Roboto;
    text-align: center;
    align-self: center;
    vertical-align: 50%;
    color: white;
    font-size:12px;
    background: #6764FF;
    border-radius: 14px;
    width: 292px;
    height: 24px;

    &:hover {
        background: rgb(137, 135, 255);
    }
`;

const AuthButton = ({ to, children, onClick }) => (
    <Wrapper to={to} onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;