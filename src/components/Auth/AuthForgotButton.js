import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: Roboto;
    font-size: 10px;
    color: #AEAEAE;
    text-align: center;
`;

const AuthForgotButton = ({ children, onClick }) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthForgotButton;