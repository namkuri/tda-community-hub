import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: Roboto;
    font-size: 10px;
    color: #AEAEAE;
    text-align: center; 
`;

function AuthLabel(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default AuthLabel;