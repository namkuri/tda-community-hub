import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: Roboto;
    font-size: 18px;
    color: #AEAEAE;
    &:hover {
        color: #FFFFFF;
    }
`;

const AuthSelectButton = ({ children, onClick }) => (
    < Wrapper onClick={onClick} >
        {children}
    </Wrapper >

);

export default AuthSelectButton;