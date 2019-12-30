import React from 'react';
import PostList from 'components/PostList';
import Inbox from 'components/Inbox';
import ProjectList from 'components/ProjectList';
import MemberList from 'components/MemberList';
import ContentBox from 'components/ContentBox';
import { Link } from 'react-router-dom';

import './Home.css';

/*import { Button } from 'reactstrap';*/



function Home(props) {
    return (
        <div>
            <div className="Home-wrap">
                <div>
                    <ContentBox name="POSTS">
                        <PostList />
                    </ContentBox>
                    <ContentBox name="INBOX">
                        <Inbox />
                    </ContentBox>
                </div>
                <div>
                    <ContentBox name="PROJECT">
                        <ProjectList />
                    </ContentBox>
                </div>
                <div>
                    <ContentBox name="Members">
                        <MemberList />
                    </ContentBox>
                </div>
                <Link to="/auth/login">(TEST)로그인 화면으로</Link>
            </div>

        </div>
    )
}

export default Home;