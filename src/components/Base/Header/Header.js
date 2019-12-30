import React from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import './Header.css';

function Title(props) {
    return (
        <div>
            <div className="Header-title">{props.children}</div>
        </div>
    )
}
function Nav(props) {
    return (
        <div>
            <div className="Header-Nav">{props.children}</div>
        </div>
    )
}
function Header(props) {
    return (
        <div>

            <div className="Header">
                <Title>TDA Community Hub⚔</Title>
                <div className="Nav-wrap">
                    <Link to="/"><Nav>HOME</Nav></Link>
                    <Link to="/post"><Nav>게시판</Nav></Link>
                    <Link to="/mail"><Nav>메일</Nav></Link>
                    <Link to="/project"><Nav>프로젝트</Nav></Link>
                    <Link to="/vote"><Nav>투표</Nav></Link>
                    <Link to="/approval"><Nav>결재</Nav></Link >
                    <Link to="/education"><Nav>교육</Nav></Link >
                    <Link to="/wiki"><Nav>위키</Nav></Link >
                </div >
            </div >
        </div>
    )
}

export default Header;