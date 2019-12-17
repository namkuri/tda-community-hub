import React from 'react';
import './Login.css';
import { Button } from 'reactstrap';

const Login = ({ value, id, pw }) => {
    return (
        <div className="login">
            <div className="login-wrap">

                <div className="login-box">

                    <div className="login-top">
                        <div className="login-top-button-focus">SIGN IN</div>
                        <div className="login-top-button">SIGN UP</div>
                    </div>

                    <div className="login-middle">
                        <div className="login-input-box">
                            <div className="input-disc">USERNAME</div>
                            <input className="login-input" value={id} />
                            <div className="input-disc">PASSWORD</div>
                            <input className="login-input" value={pw} type="password" />
                            <div className="input-checkbox">
                                <input type="checkbox" />
                                &nbsp;Keep me signed in
                                </div>
                        </div>
                    </div>

                    <div className="login-bottom">
                        <div className="login-button">SIGN IN</div>
                        <hr className="login-hr" />
                        <div className="login-label">Forgot password?</div>
                        <div className="tda-label">TDA Community Hub</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;