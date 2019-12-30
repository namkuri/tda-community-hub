import React from 'react';
import MemberIcon from './MemberIcon';
import './ProjectList.css';

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
function Project(props) {
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
function ProjectList(props) {
    return (
        <div>
            <div className="Project-box" id="scroll-box">
                <Project title="TDA Project" lastPost="신규 프로젝트 분석과 자금 운영 안" desc="류남규, 2019-12-26 22:48" />
                <Project title="컨트롤러 그랩" lastPost="타겟 시장 분석과 수익 예상" desc="우형석, 2019-12-26 22:48" />
                <Project title="거주지" lastPost="거주지 위치 선정 및 예산 검토" desc="강성운, 2019-12-26 22:48" />
            </div>

        </div>
    )
}


export default ProjectList;