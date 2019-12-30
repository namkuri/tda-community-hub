import React from 'react';
import styled from 'styled-components';

const Disc = styled.div`
    display: flex;
    font-family: Roboto;
    font-size: 8px;
    color: #AEAEAE;
    align-items: center;
    margin-left : 10px;
`;
const Input = styled.input`
    display: block;
    width: 295px;
    height: 25px;
    background: #697AD7;
    border-radius: 14px;
    color: white;
    border: none;
    text-align: left;
    align-self: center;
    margin-bottom: 10px;
    font-size: 12px;
    padding-left: 8px;
`;

const InputBox = ({ label, ...rest }) => (
    <div>
        <Disc>{label}</Disc>
        <Input {...rest} />
    </div >
);

export default InputBox;