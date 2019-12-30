import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
    margin: 0px;
    border: 0px;
    padding: 0px;
    background-color: #404040;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display:flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
`;
const Box = styled.div`
    display: inline-flex;
    flex-direction: column;
    background: #005C79;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 408px;
    width: 365px;
    align-self: center; 
`;

function AuthWrapper(props) {
    return (
        <Positioner>
            <Box>
                {props.children}
            </Box>
        </Positioner>
    )
}

export default AuthWrapper;