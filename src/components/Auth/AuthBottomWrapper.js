import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function AuthBottomWrapper(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}
//test
export default AuthBottomWrapper;