import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: Roboto;
    font-size: 10px;
    color: #FF2121;
    text-align: center;
    margin-top:32px
`;

function AuthTdaLabel(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default AuthTdaLabel;