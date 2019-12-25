import React from 'react';
import './Main.css';
/*import { Button } from 'reactstrap';*/
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

        <div className="Header">
            <Title>TDA Community Hub⚔</Title>
            <div className="Nav-wrap">
                <Nav>HOME</Nav>
                <Nav>BLOG</Nav>
                <Nav>MAIL</Nav>
                <Nav>PROJECT</Nav>
                <Nav>투표</Nav>
                <Nav>결재</Nav>
                <Nav>교육</Nav>
                <Nav>WIKI</Nav>
            </div>
        </div>
    )
}

function PostList(props) {
    return (
        <div className="Post-List">
            <div className="Post-Title">{props.title}
                <div className="Post-Category">&nbsp;{props.category}</div>
            </div>

            <div className="Post-Author">작성자 : {props.author}, {props.date}</div>
        </div>
    )
}
function Post(props) {
    return (
        <div className="Post-Box">
            <PostList title="Hi" category="Cat1" author="Me" date="2019-12-25 23:42" />
            <PostList title="Hello world" category="카테고리2" author="Namkyu" date="2019-12-25 23:45" />
        </div>
    )
}
function ContentBox(props) {
    return (
        <div className="Content-box-wrap">
            <div className="Content-box-name">{props.name}</div>
            <div className="Content-box">
                {props.children}
            </div>
        </div>
    )
}
function Main(props) {
    return (
        <div>
            <div className="Main-wrap">
                <Header />
                <ContentBox name="POSTS">
                    <Post />
                </ContentBox>
            </div>

        </div>
    )
}

export default Main;