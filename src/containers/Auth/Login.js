import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthSelectedButton, AuthSelectButton, AuthWrapper, AuthTopWrapper, AuthBottomWrapper, AuthMiddleWrapper, AuthHorizontalBar, CheckBox, InputBox, AuthButton, AuthForgotButton, AuthInputWrapper, AuthTdaLabel } from 'components/Auth';

class Login extends Component {
    render() {
        return (
            <AuthWrapper>
                <AuthTopWrapper>
                    <AuthSelectedButton>SIGN IN</AuthSelectedButton>
                    <Link to="/auth/register"><AuthSelectButton>SIGN UP</AuthSelectButton></Link>
                </AuthTopWrapper>
                <AuthMiddleWrapper>
                    <AuthInputWrapper>
                        <InputBox label="USERNAME" />
                        <InputBox label="PASSWORD" />
                        <CheckBox>&nbsp;Remember Me.</CheckBox>
                    </AuthInputWrapper>
                </AuthMiddleWrapper>

                <AuthBottomWrapper>
                    <AuthButton to="/">SIGN IN</AuthButton>
                    <AuthHorizontalBar />
                    <AuthForgotButton>Forgot password?</AuthForgotButton>
                    <AuthTdaLabel>TDA Community Hub</AuthTdaLabel>
                </AuthBottomWrapper>
            </AuthWrapper>
        );
    }
}

export default Login;
