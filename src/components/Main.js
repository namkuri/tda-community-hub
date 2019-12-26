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
        <div>
            <ContentBox name="POSTS">
                <div className="Post-box" id="scroll-box">
                    <PostList title="TDA 커뮤헙 개발" category="TDA 프로젝트" author="나" date="2019-12-25 23:42" />
                    <PostList title="재무제표와 경영" category="교육" author="강성운" date="2019-12-25 23:45" />
                    <PostList title="게임 개발" category="블로그" author="우희성" date="2019-12-25 23:45" />
                    <PostList title="컨트롤러 레이아웃" category="컨트롤러 프로젝트" author="우형석" date="2019-12-25 23:45" />
                    <PostList title="컨트롤러 개발" category="컨트롤러 프로젝트" author="우형석" date="2019-12-25 23:45" />
                </div>
            </ContentBox>
        </div>
    )
}

function Inbox(props) {
    return (
        <div>
            <ContentBox name="INBOX">
                <div className="Inbox-box" id="scroll-box">
                    <PostList title="코딩 가이드 공유 건" category="TDA 프로젝트" author="나" date="2019-12-25 23:42" />
                    <PostList title="투자관련 교육 참석 요청 건" category="교육" author="강성운" date="2019-12-25 23:45" />
                </div>
            </ContentBox>
        </div>
    )
}
function MemberIcon(props) {
    return (
        <div className="Member">

        </div>
    )
}
function MemberList(props) {
    return (
        <div className="Member-list">
            <MemberIcon />
            <MemberIcon />
            <MemberIcon />
        </div>
    )
}
function Tag(props) {
    return (
        <div className="Tag">
            {props.tagName}
        </div>
    )
}
function TagList(props) {
    return (
        <div className="Tag-list">
            <Tag tagName="공적" />
        </div>
    )
}
function ProjectList(props) {
    return (
        <div className="Project-list">
            <div className="Project-label">프로젝트 명</div>
            <div className="Project-label-title">{props.title}</div>
            <TagList />
            <div className="Project-label">멤버 목록</div>
            <MemberList />
            <div className="Project-label">마지막 포스트</div>
            <div className="Project-label-post">
                {props.lastPost}
                <div className="Project-label-post-desc">{props.desc}</div>
            </div>

        </div>
    )
}
function Project(props) {
    return (
        <div>
            <ContentBox name="PROJECT">
                <div className="Project-box" id="scroll-box">
                    <ProjectList title="TDA Project" lastPost="신규 프로젝트 분석과 자금 운영 안" desc="류남규, 2019-12-26 22:48" />
                    <ProjectList title="컨트롤러 그랩" lastPost="타겟 시장 분석과 수익 예상" desc="우형석, 2019-12-26 22:48" />
                    <ProjectList title="거주지" lastPost="거주지 위치 선정 및 예산 검토" desc="강성운, 2019-12-26 22:48" />
                </div>

            </ContentBox>
        </div>
    )
}
function MemberStatus(props) {
    return (
        <div className="Member-status-list">
            <MemberIcon />
            <div className="Member-status-name">{props.memberName}</div>
            <div className="Member-status-status">{props.memberStatus}</div>
        </div>
    )
}
function Member(props) {
    return (
        <div>
            <ContentBox name="Members">
                <div className="Member-box" id="scroll-box">
                    <MemberStatus memberName="류남규" memberStatus="오프라인" />
                </div>
            </ContentBox>
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
            <Header />
            <div className="Main-wrap">
                <div>
                    <Post />
                    <Inbox />
                </div>
                <div>
                    <Project />
                </div>
                <div>
                    <Member />
                </div>
            </div>

        </div>
    )
}

export default Main;