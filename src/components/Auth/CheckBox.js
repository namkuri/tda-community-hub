import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    font-family: Roboto;
    font-size: 10px;
    color: white;
    align-items: center;
    margin-left : 10px;
`;

const CheckBox = ({ children, ...rest }) => (
    <Wrapper>
        <input type="checkbox" {...rest} />
        {children}
    </Wrapper>
);

export default CheckBox;