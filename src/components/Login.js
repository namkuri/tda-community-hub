import React from 'react';
import './Login.css';
import { Button } from 'reactstrap';

function InputBox(props) {
    return (
        <div>
            <div className="input-disc"> {props.children}</div>
            <input className="login-input" value={props.name} />
        </div>
    )
}

function CheckBox(props) {
    return (
        <div className="input-checkbox">
            <input type="checkbox" />
            {props.children}
        </div>
    )
}

function Signin(props) {
    return (
        <div>


            <div className="login-middle">
                <div className="login-input-box">
                    <InputBox name={props.id}>USERNAME</InputBox>
                    <InputBox name={props.pw}>PASSWORD</InputBox>
                    <CheckBox>&nbsp;Remember Me.</CheckBox>

                </div>
            </div>

            <div className="login-bottom">
                <div className="login-button">SIGN IN</div>
                <hr className="login-hr" />
                <div className="login-label">Forgot password?</div>
                <div className="tda-label">TDA Community Hub</div>
            </div>
        </div>
    );
};

function Signup(props) {
    return (
        <div>
            <div className="login-middle">
                <div className="login-input-box">
                    <InputBox name={props.id}>USERNAME</InputBox>
                    <InputBox name={props.pw}>PASSWORD</InputBox>
                    <InputBox name={props.pw2}>CONFIRM</InputBox>
                </div>
            </div>

            <div className="login-bottom">
                <div className="login-button">SIGN UP</div>
                <hr className="login-hr" />
                <div className="login-label">Welcome to TDA</div>
                <div className="tda-label">TDA Community Hub</div>
            </div>
        </div>
    );
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSignin: true };

        this.handleSignin = this.handleSignin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);

    }

    handleSignin() {
        this.setState(state => ({
            isSignin: true
        }));
    }
    handleSignup() {
        this.setState(state => ({
            isSignin: false
        }));
    }
    render() {
        return (
            <div className="login">
                <div className="login-wrap">
                    <div className="login-box">
                        <div className="login-top">
                            <div className={this.state.isSignin ? "login-top-button-focus" : "login-top-button"} onClick={this.handleSignin}>SIGN IN</div>
                            <div className={this.state.isSignin ? "login-top-button" : "login-top-button-focus"} onClick={this.handleSignup}>SIGN UP</div>
                        </div>
                        {this.state.isSignin ? <Signin /> : <Signup />}
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;