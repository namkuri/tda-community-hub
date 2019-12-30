import React from 'react';
import './PostList.css';

function Post(props) {
    return (
        <div className="Post-List">
            <div className="Post-Title">{props.title}
                <div className="Post-Category">&nbsp;{props.category}</div>
            </div>

            <div className="Post-Author">작성자 : {props.author}, {props.date}</div>
        </div>
    )
}

function PostList(props) {
    return (
        <div>
            <div className="Post-box" id="scroll-box">
                <Post title="TDA 커뮤헙 개발" category="TDA 프로젝트" author="나" date="2019-12-25 23:42" />
                <Post title="재무제표와 경영" category="교육" author="강성운" date="2019-12-25 23:45" />
                <Post title="게임 개발" category="블로그" author="우희성" date="2019-12-25 23:45" />
                <Post title="컨트롤러 레이아웃" category="컨트롤러 프로젝트" author="우형석" date="2019-12-25 23:45" />
                <Post title="컨트롤러 개발" category="컨트롤러 프로젝트" author="우형석" date="2019-12-25 23:45" />
            </div>
        </div >
    )
}

export default PostList;