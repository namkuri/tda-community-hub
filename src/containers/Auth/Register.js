import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthSelectedButton, AuthLabel, AuthSelectButton, AuthWrapper, AuthTopWrapper, AuthBottomWrapper, AuthMiddleWrapper, AuthHorizontalBar, CheckBox, InputBox, AuthButton, AuthForgotButton, AuthInputWrapper, AuthTdaLabel } from 'components/Auth';

function Register(props) {
    return (
        <AuthWrapper>
            <AuthTopWrapper>
                <Link to="/auth/login"><AuthSelectButton>SIGN IN</AuthSelectButton></Link>
                <Link to="/auth/register"><AuthSelectedButton>SIGN UP</AuthSelectedButton></Link>
            </AuthTopWrapper>
            <AuthMiddleWrapper>
                <AuthInputWrapper>
                    <InputBox label="USERNAME" />
                    <InputBox label="PASSWORD" type="password" />
                    <InputBox label="CONFIRM" type="password" />
                </AuthInputWrapper>
            </AuthMiddleWrapper>

            <AuthBottomWrapper>
                <AuthButton>SIGN UP</AuthButton>
                <AuthHorizontalBar />
                <AuthLabel>Welcome to TDA</AuthLabel>
                <AuthTdaLabel>TDA Community Hub</AuthTdaLabel>
            </AuthBottomWrapper>
        </AuthWrapper>
    );
};

export default Register;
