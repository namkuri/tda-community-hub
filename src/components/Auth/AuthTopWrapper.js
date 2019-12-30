import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;/*좌우 정렬방법*/
    align-items: center;
    height:88px;
    color: #ffffff;
`;

function AuthTopWrapper(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default AuthTopWrapper;