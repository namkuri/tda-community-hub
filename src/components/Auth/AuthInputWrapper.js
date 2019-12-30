import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 295px;
    align-self: center;
`;

function AuthInputWrapper(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default AuthInputWrapper;