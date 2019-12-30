import React from 'react';
import MemberIcon from './MemberIcon';
import './MemberList.css';

function MemberStatus(props) {
    return (
        <div className="Member-status-list">
            <MemberIcon />
            <div className="Member-status-name">{props.memberName}</div>
            <div className="Member-status-status">{props.memberStatus}</div>
        </div>
    )
}

function MemberList(props) {
    return (
        <div>
            <div className="Member-box" id="scroll-box">
                <MemberStatus memberName="류남규" memberStatus="오프라인" />
            </div>
        </div >
    )
}

export default MemberList;