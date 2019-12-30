import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height:200px;
`;

function AuthMiddleWrapper(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default AuthMiddleWrapper;