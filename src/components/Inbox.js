import React from 'react';
import './Inbox.css';

function Inbox(props) {
    return (
        <div>
            <div className="Inbox-box" id="scroll-box">
                <Mail title="코딩 가이드 공유 건" category="TDA 프로젝트" author="나" date="2019-12-25 23:42" />
                <Mail title="투자관련 교육 참석 요청 건" category="교육" author="강성운" date="2019-12-25 23:45" />
            </div>
        </div>
    )
}

function Mail(props) {
    return (
        <div className="Mail-List">
            <div className="Mail-Title">{props.title}
                <div className="Mail-Category">&nbsp;{props.category}</div>
            </div>

            <div className="Mail-Author">작성자 : {props.author}, {props.date}</div>
        </div>
    )
}



export default Inbox;